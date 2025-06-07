"use client";

import { PatientEvent } from "@prisma/client";
import { useState } from "react";
import { trpc } from "trpc/client";
import { z } from "zod";

// Define interface for your row data
interface PatientRow {
  name: string;
  dob: Date;
  sex?: string | null;
  address?: string;
  insurer: string;
  moneyCollected: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  billerId: string;
  groupNumber?: string | null;
  serviceStart?: Date | null;
  serviceEnd?: Date | null;
}

function CountryCodeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      className="rounded border px-2 py-1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: 80 }}
    >
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+91">🇮🇳 +91</option>
      <option value="+61">🇦🇺 +61</option>
      <option value="+81">🇯🇵 +81</option>
      <option value="+33">🇫🇷 +33</option>
    </select>
  );
}

/*
===============================================================================

  Voice AI Agent Component

===============================================================================
*/
export const VoiceAI = ({
  patient,
  _events,
  _patients,
  createEventMutation,
}: {
  patient: PatientRow;
  _events: PatientEvent[];
  _patients: PatientRow[];
  createEventMutation: ReturnType<typeof trpc.createPatientEvent.useMutation>;
}) => {
  const [callType, setCallType] = useState("biller-insurance");
  const [billerInput, setbillerInput] = useState("");
  const [insuranceNumber, setinsuranceNumber] = useState("");
  const [billerInputCountry, setbillerInputCountry] = useState("+1");
  const [insuranceNumberCountry, setinsuranceNumberCountry] = useState("+1");
  const [billerInputMode, setbillerInputMode] = useState("text");
  const [callInProgress, setCallInProgress] = useState(false);
  const [callTranscript, setCallTranscript] = useState("");

  const phoneNumberSchema = z
    .string()
    .min(7, "Phone number too short")
    .max(15, "Phone number too long")
    .regex(/^\d+$/, "Phone number must be digits only");

  const billerInputValid =
    billerInputMode === "phone"
      ? phoneNumberSchema.safeParse(billerInput.replace(/\D/g, "")).success
      : billerInput.trim().length > 0;

  const insuranceNumberValid = phoneNumberSchema.safeParse(
    insuranceNumber.replace(/\D/g, ""),
  ).success;

  const inputsValid = billerInputValid && insuranceNumberValid;

  const postCall = async <T,>(endpoint: string): Promise<T> => {
    const response = await fetch(`https://aws.kyronmedical.com${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doctor_phone:
          billerInputMode === "phone"
            ? billerInputCountry + billerInput
            : billerInput,
        insurance: insuranceNumberCountry + insuranceNumber,
      }),
    });
    if (!response.ok) throw new Error(`Failed to complete ${endpoint} call.`);
    return response.json() as Promise<T>;
  };

  async function handleMakeCalls() {
    setCallInProgress(true);
    setCallTranscript("");
    if (!patient) return;

    const makeCall = async () => {
      try {
        let transcript = "";
        let summary = "";

        if (callType === "peer-peer") {
          const data = await postCall<{
            p2p_transcript?: string;
            summary?: string;
          }>("/bapi/p2p");
          transcript = data.p2p_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "biller-insurance") {
          const data = await postCall<{
            p2p_transcript?: string;
            summary?: string;
          }>("/bapi/p2p");
          transcript = data.p2p_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "claim-status") {
          const data = await postCall<{
            CSI_transcript?: string;
            summary?: string;
          }>("/bapi/claim_status_inquiry");
          transcript = data.CSI_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "appeal-followup") {
          const data = await postCall<{
            AF_transcript?: string;
            summary?: string;
          }>("/bapi/appeal_followup");
          transcript = data.AF_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "denial-clarification") {
          const data = await postCall<{
            DRC_transcript?: string;
            summary?: string;
          }>("/bapi/denial_reason_clarification");
          transcript = data.DRC_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "eob-query") {
          const data = await postCall<{
            EOB_transcript?: string;
            summary?: string;
          }>("/bapi/eob");
          transcript = data.EOB_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "eligibility-verification") {
          const data = await postCall<{
            EV_transcript?: string;
            summary?: string;
          }>("/bapi/eligibility_verification");
          transcript = data.EV_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "policy-detail") {
          const data = await postCall<{
            PDI_transcript?: string;
            summary?: string;
          }>("/bapi/policy_detail_inquiry");
          transcript = data.PDI_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "coordination-of-benefits") {
          const data = await postCall<{
            COB_transcript?: string;
            summary?: string;
          }>("/bapi/coordination_of_benefits");
          transcript = data.COB_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "billing-discrepancy") {
          const data = await postCall<{
            BDR_transcript?: string;
            summary?: string;
          }>("b/api/billing_discrepancy_resolution");
          transcript = data.BDR_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "claim-rejection") {
          const data = await postCall<{
            CRI_transcript?: string;
            summary?: string;
          }>("/bapi/claim_rejection_inquiry");
          transcript = data.CRI_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else {
          setCallTranscript("Unknown call type.");
          setCallInProgress(false);
          return;
        }

        setCallTranscript(transcript);

        await createEventMutation.mutateAsync({
          patientId: patient.id,
          eventType: "Voice AI",
          eventContent: summary,
          date: new Date(),
          transcript,
        });

        setCallInProgress(false);
      } catch (error) {
        let errorMsg = "Unknown error";
        if (error instanceof Error) {
          errorMsg = error.message;
        }
        setCallTranscript("Error during call: " + errorMsg);
        setCallInProgress(false);
        return null;
      }
    };

    await makeCall();
  }

  function handleCancelCall() {
    setCallInProgress(false);
    setCallTranscript("");
  }

  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <h2 className="m-0 text-3xl font-bold">Voice AI Agent</h2>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Place a call to {patient.name}&apos;s insurance and let the AI agent
        handle the conversation.
      </p>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-semibold">Call Type</label>
        <select
          className="w-full rounded border px-2 py-1"
          value={callType}
          onChange={(e) => setCallType(e.target.value)}
        >
          <option value="claim-status">Claim Status Inquiry</option>
          <option value="appeal-followup">Appeal Follow-up</option>
          <option value="eligibility-verification">
            Eligibility and Benefits Verification
          </option>
        </select>
      </div>
      <div className="mb-4 flex flex-col gap-4">
        {/* Toggle input mode for the first field */}
        <div className="flex items-center gap-2">
          <select
            className="rounded border px-2 py-1"
            value={billerInputMode}
            onChange={(e) => setbillerInputMode(e.target.value)}
          >
            <option value="text">Instructions</option>
            <option value="phone">Phone Number</option>
          </select>

          {billerInputMode === "phone" ? (
            <>
              <CountryCodeSelect
                value={billerInputCountry}
                onChange={setbillerInputCountry}
              />
              <input
                type="tel"
                className="flex-1 rounded border px-2 py-1"
                placeholder="Medical Biller's Phone Number"
                value={billerInput}
                onChange={(e) => setbillerInput(e.target.value)}
              />
            </>
          ) : (
            <textarea
              className="flex-1 rounded border px-2 py-1"
              placeholder="Enter instructions or context (e.g. claim ID, billing note)"
              value={billerInput}
              onChange={(e) => setbillerInput(e.target.value)}
            />
          )}
        </div>
        {/* Second input: remains as insurance phone number */}
        <div className="flex items-center gap-2">
          <CountryCodeSelect
            value={insuranceNumberCountry}
            onChange={setinsuranceNumberCountry}
          />
          <input
            type="tel"
            className="flex-1 rounded border px-2 py-1"
            placeholder="Insurance Phone Number"
            value={insuranceNumber}
            onChange={(e) => setinsuranceNumber(e.target.value)}
          />
        </div>
      </div>

      {!callInProgress ? (
        <button
          className={`w-full rounded px-4 py-2 font-bold text-white ${
            inputsValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-gray-400"
          }`}
          disabled={!inputsValid}
          onClick={handleMakeCalls}
        >
          Make Calls
        </button>
      ) : (
        <div className="mt-4 rounded border bg-gray-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></span>
            <span className="font-semibold">Calling in progress...</span>
          </div>
          <button
            className="mt-2 rounded bg-red-500 px-4 py-2 text-white"
            onClick={handleCancelCall}
          >
            Cancel
          </button>
          <div className="mt-4 text-xs text-gray-500">
            Please feel free to close this window – calls will operate
            autonomously.
          </div>
          {callTranscript && (
            <div className="mt-4 rounded border bg-white p-2">
              <div className="mb-1 font-bold">Transcript:</div>
              <pre className="whitespace-pre-wrap text-xs">
                {callTranscript}
              </pre>
            </div>
          )}
        </div>
      )}
    </>
  );
};
