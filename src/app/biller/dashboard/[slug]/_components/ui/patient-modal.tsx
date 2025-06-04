"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { trpc } from "trpc/client";
import { z } from "zod";
import type { PatientEvent } from "@prisma/client";
import { FaRegTrashCan } from "react-icons/fa6";

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

interface PatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: PatientRow | null;
  setPatient: (patient: PatientRow | null) => void;
  events: PatientEvent[];
  patients: PatientRow[];
  refetchPatientsAction: (options?: unknown) => Promise<unknown>;
}

/*
===============================================================================

  Individual Event Component

===============================================================================
*/

/*
===============================================================================

  Details Component

===============================================================================
*/

// Add a type assertion if needed:
type ExistingPatientDetails = {
  dob?: string | Date | null;
  serviceStart?: string | Date | null;
  serviceEnd?: string | Date | null;
  zipCode?: string | null;
  insurer?: string | null;
  address?: string | null;
  sex?: string | null;
  groupNumber?: string | null;
  providerName?: string | null;
  facilityName?: string | null;
  // Add other fields as needed
};

type DetailsFormProps = {
  patient: PatientRow;
  refetchPatientsAction : (options?: unknown) => Promise<unknown>;
}

export function DetailsForm(
  { patient, refetchPatientsAction }: DetailsFormProps,
) {
  // Local form state for every field:
  const [firstName, setFirstName] = useState(patient.name.split(" ")[0] || "");
  const [editingFirstName, setEditingFirstName] = useState(false);

  const [lastName, setLastName] = useState(patient.name.split(" ")[1] || "");
  const [editingLastName, setEditingLastName] = useState(false);

  const [dob, setDob] = useState(
    patient.dob ? patient.dob.toISOString().substring(0, 10) : "",
  );
  const [editingDob, setEditingDob] = useState(false);

  const [sex, setSex] = useState("");
  const [editingSex, setEditingSex] = useState(false);

  // New fields
  const [address, setAddress] = useState("");
  const [editingAddress, setEditingAddress] = useState(false);

  const [zipCode, setZipCode] = useState("");
  const [editingZipCode, setEditingZipCode] = useState(false);

  const [insurer, setInsurer] = useState(patient.insurer || "");
  const [editingInsurer, setEditingInsurer] = useState(false);

  const [serviceStart, setServiceStart] = useState("");
  const [editingServiceStart, setEditingServiceStart] = useState(false);

  const [serviceEnd, setServiceEnd] = useState("");
  const [editingServiceEnd, setEditingServiceEnd] = useState(false);

  const [providerName, setProviderName] = useState("");
  const [editingProviderName, setEditingProviderName] = useState(false);

  const [facilityName, setFacilityName] = useState("");
  const [editingFacilityName, setEditingFacilityName] = useState(false);

  const [groupNumber, setGroupNumber] = useState("");
  const [editingGroupNumber, setEditingGroupNumber] = useState(false);

  // Track if any field has changed
  const [dirty, setDirty] = useState(false);

  // TRPC mutation to upsert details:
  const detailsMutation = trpc.updatePatientDetails.useMutation({
    onSuccess: () => {
      toast.success("Details saved");
      setDirty(false);
    },
    onError: (err) => toast.error(err.message),
  });

  // On mount, you might fetch existing details to seed the form:
  const { data: existing } = trpc.getPatientDetails.useQuery({
    patientId: patient.id,
  }) as { data: ExistingPatientDetails };

  useEffect(() => {
    if (existing) {
      // dob
      let dobString = "";
      if (existing.dob) {
        if (typeof existing.dob === "string") {
          dobString = existing.dob.substring(0, 10);
        } else if (existing.dob instanceof Date) {
          dobString = existing.dob.toISOString().substring(0, 10);
        }
      }
      setDob(dobString);

      // serviceStart
      let serviceStartString = "";
      if (existing.serviceStart) {
        if (typeof existing.serviceStart === "string") {
          serviceStartString = existing.serviceStart.substring(0, 16);
        } else if (existing.serviceStart instanceof Date) {
          serviceStartString = existing.serviceStart.toISOString().substring(0, 16);
        }
      }
      setServiceStart(serviceStartString);

      // serviceEnd
      let serviceEndString = "";
      if (existing.serviceEnd) {
        if (typeof existing.serviceEnd === "string") {
          serviceEndString = existing.serviceEnd.substring(0, 16);
        } else if (existing.serviceEnd instanceof Date) {
          serviceEndString = existing.serviceEnd.toISOString().substring(0, 16);
        }
      }
      setServiceEnd(serviceEndString);

      let zipCodeString = "";
      if (existing.zipCode) {
        zipCodeString =
          typeof existing.zipCode === "string"
            ? existing.zipCode
            : ""
      }
      setZipCode(zipCodeString);

      let insurerString = "";
      if (existing.insurer) {
        insurerString =
          typeof existing.insurer === "string"
            ? existing.insurer
            : ""
      }

      setAddress(existing.address ?? "");
      setSex(existing.sex ?? "");
      setGroupNumber(existing.groupNumber ?? "");
      setProviderName(existing.providerName ?? "");
      setFacilityName(existing.facilityName ?? "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existing]);

  // Mark dirty on any change
  function handleChange<T>(setter: (v: T) => void) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(e.target.value as T);
      setDirty(true);
    };
  }

  // Only require at least one field to be changed to enable save
  const formValid = dirty && !detailsMutation.isPending;

  // Render form
  return (
    <form
      className="max-h-[60vh] space-y-4  p-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!formValid) {
          toast.error("No changes to save");
          return;
        }

        detailsMutation.mutate({
          patientId: patient.id,
          name: `${firstName} ${lastName}`,
          dob: dob ?? undefined,
          serviceStart: serviceStart ?? undefined,
          serviceEnd: serviceEnd ?? undefined,
          providerName: providerName ?? undefined,
          facilityName: facilityName ?? undefined,
          zipCode: zipCode ?? undefined,
          groupNumber: groupNumber ?? undefined,
          address: address ?? undefined,
          sex: sex ?? undefined,
        });
        void refetchPatientsAction(); // Refetch patients after saving
      }}
    >
      <h2 className="mb-2 text-2xl font-bold">Patient Details</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="">First Name</label>
          {editingFirstName || !firstName ? (
            <input
              type="text"
              className="mt-1 w-full rounded border px-2 py-1"
              value={firstName}
              onChange={handleChange(setFirstName)}
              onBlur={() => setEditingFirstName(false)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingFirstName(false);
                }
              }}
            />
          ) : (
            <div className="flex items-center gap-2">
              <span className="truncate text-sm">{firstName}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingFirstName(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          {editingLastName || !lastName ? (
            <input
              type="text"
              className="mt-1 w-full rounded border px-2 py-1"
              value={lastName}
              onChange={handleChange(setLastName)}
              onBlur={() => setEditingLastName(false)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingLastName(false);
                }
              }}
            />
          ) : (
            <div className="flex items-center gap-2">
              <span className="truncate text-sm">{lastName}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingLastName(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label>Date of Birth</label>
          {editingDob || !dob ? (
            <input
              type="date"
              className="mt-1 w-full rounded border px-2 py-1"
              value={dob}
              onChange={handleChange(setDob)}
              onBlur={() => setEditingDob(false)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setEditingDob(false);
                }
              }}
            />
          ) : (
            <div className="flex items-center gap-2">
              <span>{dob}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingDob(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Sex */}
        <div>
          <label>Sex</label>
          {editingSex || !sex ? (
            <select
              className="mt-1 w-full rounded border px-2 py-1"
              value={sex}
              onChange={handleChange(setSex)}
              onBlur={() => setEditingSex(false)}
              autoFocus
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <div className="flex items-center gap-2">
              <span className="truncate text-sm">{sex}</span>
              <button
                className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
                onClick={() => setEditingSex(true)}
                type="button"
              >
                Change
              </button>
            </div>
          )}
        </div>
        {/* …and all your other insurance, procedure, ICD fields… */}
      </div>

      {/* Address */}
      <div className="col-span-2">
        <label>Address</label>
        {editingAddress || !address ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={address}
            onChange={handleChange(setAddress)}
            onBlur={() => setEditingAddress(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingAddress(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{address}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingAddress(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Zip Code */}
      <div>
        <label>Zip Code</label>
        {editingZipCode || !zipCode ? (
          <input
            type="text"
            pattern="\d{5}"
            className="mt-1 w-full rounded border px-2 py-1"
            value={zipCode}
            onChange={handleChange(setZipCode)}
            onBlur={() => setEditingZipCode(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingZipCode(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{zipCode}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingZipCode(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Insurer Name */}
      <div>
        <label>Insurer Name</label>
        {editingInsurer || !insurer ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={insurer}
            onChange={handleChange(setInsurer)}
            onBlur={() => setEditingInsurer(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingInsurer(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{insurer}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingInsurer(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service Start */}
      <div>
        <label>Service Start</label>
        {editingServiceStart || !serviceStart ? (
          <input
            type="datetime-local"
            className="mt-1 w-full rounded border px-2 py-1"
            value={serviceStart}
            onChange={handleChange(setServiceStart)}
            onBlur={() => setEditingServiceStart(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingServiceStart(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{serviceStart}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceStart(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Service End */}
      <div>
        <label>Service End</label>
        {editingServiceEnd || !serviceEnd ? (
          <input
            type="datetime-local"
            className="mt-1 w-full rounded border px-2 py-1"
            value={serviceEnd}
            onChange={handleChange(setServiceEnd)}
            onBlur={() => setEditingServiceEnd(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingServiceEnd(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{serviceEnd}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingServiceEnd(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Provider Name */}
      <div>
        <label>Provider Name</label>
        {editingProviderName || !providerName ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={providerName}
            onChange={handleChange(setProviderName)}
            onBlur={() => setEditingProviderName(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingProviderName(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{providerName}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingProviderName(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Facility Name */}
      <div>
        <label>Facility Name</label>
        {editingFacilityName || !facilityName ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={facilityName}
            onChange={handleChange(setFacilityName)}
            onBlur={() => setEditingFacilityName(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingFacilityName(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{facilityName}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingFacilityName(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Group Number */}
      <div>
        <label>Group Number</label>
        {editingGroupNumber || !groupNumber ? (
          <input
            type="text"
            className="mt-1 w-full rounded border px-2 py-1"
            value={groupNumber}
            onChange={handleChange(setGroupNumber)}
            onBlur={() => setEditingGroupNumber(false)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditingGroupNumber(false);
              }
            }}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span className="truncate text-sm">{groupNumber}</span>
            <button
              className="rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
              onClick={() => setEditingGroupNumber(true)}
              type="button"
            >
              Change
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!formValid}
        className={`mt-4 w-full rounded px-4 py-2 font-bold text-white ${
          formValid
            ? "bg-green-600 hover:bg-green-700"
            : "cursor-not-allowed bg-gray-400"
        }`}
      >
        {detailsMutation.isPending ? "Saving…" : "Save Details"}
      </button>
    </form>
  );
}

/*
===============================================================================

  Letter of Appeal Generation Component

===============================================================================
*/

/*
===============================================================================

  Voice AI Agent Component

===============================================================================
*/
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

const VoiceAI = ({
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
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number1Country, setNumber1Country] = useState("+1");
  const [number2Country, setNumber2Country] = useState("+1");
  const [callInProgress, setCallInProgress] = useState(false);
  const [callTranscript, setCallTranscript] = useState("");

  const phoneNumberSchema = z
    .string()
    .min(7, "Phone number too short")
    .max(15, "Phone number too long")
    .regex(/^\d+$/, "Phone number must be digits only");

  const numbersValid =
    phoneNumberSchema.safeParse(number1.replace(/\D/g, "")).success &&
    phoneNumberSchema.safeParse(number2.replace(/\D/g, "")).success;

  const postCall = async <T,>(endpoint: string): Promise<T> => {
    const response = await fetch(`https://aws.kyronmedical.com${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doctor_phone: number1Country + number1,
        insurance: number2Country + number2,
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
          <option value="biller-insurance">
            Medical Biller ↔ Insurance (Medical Biller Prior Authorization)
          </option>
          <option value="peer-peer">
            Physician ↔ Insurance (Peer-to-Peer Prior Authorization)
          </option>
          <option value="claim-status">Claim Status Inquiry</option>
          <option value="appeal-followup">Appeal Follow-up</option>
          <option value="denial-clarification">
            Denial Reason Clarification
          </option>
          <option value="eob-query">EOB Query</option>
          <option value="eligibility-verification">
            Eligibility Verification
          </option>
          <option value="policy-detail">Policy Detail Inquiry</option>
          <option value="coordination-of-benefits">
            Coordination of Benefits
          </option>
          <option value="billing-discrepancy">
            Billing Discrepancy Resolution
          </option>
          <option value="claim-rejection">Claim Rejection Inquiry</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <CountryCodeSelect
            value={number1Country}
            onChange={setNumber1Country}
          />

          <input
            type="tel"
            className="flex-1 rounded border px-2 py-1"
            placeholder={
              callType === "peer-peer"
                ? "Physician's Phone Number"
                : "Medical Biller's Phone Number"
            }
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <CountryCodeSelect
            value={number2Country}
            onChange={setNumber2Country}
          />

          <input
            type="tel"
            className="flex-1 rounded border px-2 py-1"
            placeholder="Insurance Phone Number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
      </div>
      {!callInProgress ? (
        <button
          className={`w-full rounded px-4 py-2 font-bold text-white ${
            numbersValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-gray-400"
          }`}
          disabled={!numbersValid}
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

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

function isAcceptedFileType(file: File) {
  return ACCEPTED_TYPES.includes(file.type);
}

type View = "timeline" | "details" | "appeal" | "voice";

export default function PatientModal({
  isOpen,
  onClose,
  patient,
  setPatient,
  events,
  patients,
  refetchPatientsAction
}: PatientModalProps) {
  const [mounted, setMounted] = useState(false);

  const patientModalRef = useRef(null);
  const eventModalRef = useRef(null);

  const [selectedEvent, setSelectedEvent] = useState<PatientEvent | null>(null);
  const [view, setView] = useState<View>("timeline");

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventType, setEventType] = useState("");
  const [eventContent, setEventContent] = useState("");
  const [amountPaid, setAmountPaid] = useState('');
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [eventPdfs, setEventPdfs] = useState<File[]>([]);
  // const utils = trpc.useUtils(); // or useQueryClient() for React Query

  // Upload state for multiple files with progress
  interface UploadFile {
    file: File;
    progress: number;
    uploaded: boolean;
  }
  const [appealLetter, setAppealLetter] = useState<string>("");
  // const [files, setFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<
    [UploadFile | undefined, UploadFile | undefined]
  >([undefined, undefined]);
  // const [allUploaded, setAllUploaded] = useState(false);
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditPdf = (_event, _pdfIdx) => {
    toast("Edit PDF not implemented (stub)");
  };

  const handleDeletePdf = (_event, _pdfIdx) => {
    toast("Delete PDF not implemented (stub)");
  };

  const createEventMutation = trpc.createPatientEvent.useMutation();
  const deletePatientMutation = trpc.deletePatient.useMutation();
  const updateMoneyCollectedMutation = trpc.updatePatientMoneyCollected.useMutation();

  useEffect(() => {
    setMounted(true);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!mounted || !isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot || !(modalRoot instanceof Element)) return null;

  if (!patient) return null;

  const handlePreviousPatient = () => {
    if (!patient || !patients.length) return;
    const index = patients.findIndex((p) => p.id === patient.id);
    const prevIndex = (index - 1 + patients.length) % patients.length;
    setPatient(patients[prevIndex]);
    setShowAddEvent(false);
  };

  const handleNextPatient = () => {
    if (!patient || !patients.length) return;
    const index = patients.findIndex((p) => p.id === patient.id);
    const nextIndex = (index + 1) % patients.length;
    setPatient(patients[nextIndex]);
    setShowAddEvent(false);
  };

  const handleDeletePatient = async (patientId: string) => {
    if (!patientId) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete this patient? This action cannot be undone.",
    );
    if (!confirmed) return;

    try {
      await deletePatientMutation.mutateAsync({ patientId });
      toast.success("Patient deleted successfully");
      void refetchPatientsAction();
      // Remove the deleted patient from the patients list and select the next one if available
      const idx = patients.findIndex((p) => p.id === patientId);
      const newPatients = patients.filter((p) => p.id !== patientId);
      if (newPatients.length > 0) {
        // Select next patient, or previous if last was deleted
        const nextIdx = idx < newPatients.length ? idx : newPatients.length - 1;
        setPatient(newPatients[nextIdx]);
        setShowAddEvent(false);
      } else {
        setPatient(null);
      }
      onClose();
    } catch (error : unknown) {
      toast.error("Failed to delete patient: ");
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventType || !eventContent) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.loading("Adding event...");
    try {
      // Upload PDFs and get URLs
      let fileUrls: string[] = [];
      if (eventPdfs.length > 0) {
        // Replace with your upload logic
        fileUrls = await Promise.all(
          eventPdfs.map(async (file) => {
            // Example: upload to S3 or your backend
            // return await uploadPdf(file);
            return URL.createObjectURL(file); // For demo only
          }),
        );
      }

      await createEventMutation.mutateAsync({
        patientId: patient.id,
        eventType,
        eventContent,
        date: new Date(eventDate),
        fileUrls: fileUrls,
      });
      
      if (eventType === "Insurance Paid") {
        const amount = parseFloat(amountPaid) || 0;
        await updateMoneyCollectedMutation.mutateAsync({
          patientId: patient.id,
          moneyCollected: amount,
        });
      }
      void refetchPatientsAction();
      

      toast.dismiss();
      toast.success("Event added!");
      setShowAddEvent(false);
      setEventType("");
      setEventContent("");
      setEventDate(new Date().toISOString().split("T")[0]);
      setEventPdfs([]);
    } catch {
      toast.dismiss();
      toast.error("Error adding event");
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const [denialFile, noteFile] = uploadedFiles;

    if (!denialFile || !noteFile) {
      toast.error("Please upload both Denial and Note files.");
      return;
    }

    const formData = new FormData();

    formData.append("files", denialFile.file);
    formData.append("files", noteFile.file);

    try {
      const fetchPromise = async () => {
        const response = await fetch(
          "https://aws.kyronmedical.com/bapi/generate-appeal",
          {
            method: "POST",
            body: formData,
          },
        );

        if (response.ok) {
          type ResponseData = {
            appeal_letter: string;
          };

          const data = (await response.json()) as ResponseData;
          const appealLetter: string = data.appeal_letter;

          setAppealLetter(appealLetter);

          const blob = new Blob([appealLetter], { type: "text/plain" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "appeal_letter.txt";
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);

          const urlList = [url];

          // Automatically add to history log
          await createEventMutation.mutateAsync({
            patientId: patient.id,
            eventType: "Letter of Appeal",
            eventContent: appealLetter,
            date: new Date(),
            fileUrls: urlList,
          });
        } else {
          type ErrorResponse = {
            error: string;
          };
          const errorData = (await response.json()) as ErrorResponse;
          throw new Error(errorData.error ?? "Failed to generate appeal.");
        }
      };

      await toast.promise(
        fetchPromise(),
        {
          loading: "Generating your appeal letter...",
          success: "Appeal letter generated successfully!",
          error: "Failed to generate appeal letter.",
        },
        {
          style: {
            minWidth: "250px",
          },
        },
      );
    } catch (error) {
      console.error("Error during appeal generation:", error);
    }
  };

  // // This function should be called when a file is selected
  // const handleEventFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   try {
  //     const events: {
  //       patientId: string;
  //       type: string;
  //       content: string;
  //       date: Date;
  //       summary: string;
  //       fileUrls: string[];

  //       billerId: string;
  //     }[] = [];
  //     for await (const row of parse(file)) {
  //       const name = row.data.name;
  //       const insurer = row.data.insurer;
  //       const moneyCollected = row.data.moneyCollected;
  //       if (!name || !insurer || !moneyCollected) {
  //         toast.error("Invalid data in CSV file");
  //         return;
  //       }
  //       events.push({
  //         name,
  //         insurer,
  //         moneyCollected: Number(moneyCollected),
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //         billerId: user.id,
  //       });
  //     }

  //     // Call your tRPC mutation
  //     await trpc.createPatientEventsBulk.useMutation().mutateAsync({
  //       events,
  //     });
  //     await utils.getpatientEventsByPatientId.invalidate(); // Invalidate/refetch the patients query
  //     toast.success("Events imported!");
  //   } catch (err) {
  //     toast.dismiss();
  //     toast.error("Error adding patients");
  //     console.error("Error adding patients:", err);
  //   }
  // };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
      onClick={handleBackdropClick}
    >
      <div
        className="relative h-[70%] w-[70%] rounded-lg bg-white p-6 px-16 shadow-lg dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          ✕
        </button>

        {view === "timeline" && (
          <>
            {/* Delete Patient Button - top left corner */}
            <button
              className="absolute right-16 top-6 flex items-center gap-1 rounded bg-red-100 px-3 py-1 text-red-600 hover:bg-red-200"
              onClick={() => handleDeletePatient(patient.id)}
              title="Delete Patient"
            >
              <FaRegTrashCan className="text-lg" />
              Delete
            </button>
          </>
        )}

        <AnimatePresence mode="wait">
          {!selectedEvent ? (
            <motion.div
              key={view}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full rounded-lg bg-white"
            >
              <div
                ref={patientModalRef}
                className="h-full w-full overflow-y-auto rounded-lg bg-white"
              >
                <div className="mb-4 flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <button
                      className={`rounded px-4 py-2 ${
                        view === "details"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => {
                        setView("details");
                        setShowAddEvent(false);
                      }}
                    >
                      Details
                    </button>
                    <button
                      className={`rounded px-4 py-2 ${
                        view === "appeal"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => {
                        setView("appeal");
                        setShowAddEvent(false);
                      }}
                    >
                      Letter of Appeal
                    </button>
                    <button
                      className={`rounded px-4 py-2 ${
                        view === "voice"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => {
                        setView("voice");
                        setShowAddEvent(false);
                      }}
                    >
                      Voice AI Agent
                    </button>
                    {view !== "timeline" && (
                      <button
                        className="ml-auto rounded px-3 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        onClick={() => setView("timeline")}
                      >
                        Back to Timeline
                      </button>
                    )}
                  </div>
                  {view === "timeline" && (
                    <div className="flex flex-row items-center gap-2">
                      <button
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                        onClick={() => setShowAddEvent(true)}
                      >
                        Add Patient Event
                      </button>
                    </div>
                  )}
                </div>

                {showAddEvent && (
                  <form
                    className="mb-4 flex flex-col gap-2 rounded border bg-gray-50 p-4"
                    onSubmit={handleAddEvent}
                  >
                    <label className="text-sm font-semibold">
                      Event Type
                      <select
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        <option value="Note">Note</option>
                        <option value="Letter of Appeal">
                          Letter of Appeal
                        </option>
                        <option value="Voice AI">Voice AI</option>
                        <option value="Insurance Paid">Insurance Paid</option>
                      </select>
                    </label>
                    <label className="text-sm font-semibold">
                      Event Content
                      <textarea
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventContent}
                        onChange={(e) => setEventContent(e.target.value)}
                        placeholder="Enter event details"
                        required
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Event Date
                      <input
                        type="date"
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Attach PDF(s)
                      <input
                        type="file"
                        accept="application/pdf"
                        multiple
                        className="mt-1 w-full"
                        onChange={(e) =>
                          setEventPdfs(Array.from(e.target.files ?? []))
                        }
                      />
                    </label>
                    <div>
                      {eventType === "Insurance Paid" && (
                        <label className="text-sm font-semibold">
                          Amount Paid
                          <input
                            type="number"
                            className="mt-1 w-full rounded border px-2 py-1"
                            value={amountPaid}
                            onChange={(e) => setAmountPaid(e.target.value)}
                            required
                          />
                        </label>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                        disabled={createEventMutation.isPending}
                      >
                        {createEventMutation.isPending
                          ? "Adding..."
                          : "Add Event"}
                      </button>
                      <button
                        type="button"
                        className="rounded bg-gray-300 px-4 py-2 text-gray-700"
                        onClick={() => setShowAddEvent(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {view === "timeline" && (
                  <>
                    <h2 className="mb-4 text-3xl font-bold">
                      {patient.name}&apos;s Timeline
                    </h2>
                    <ul className="space-y-4">
                      {events.map((event: PatientEvent, index) => (
                        <li
                          key={index}
                          className="cursor-pointer border-b pb-2 hover:bg-gray-100"
                          onClick={() => {
                            setSelectedEvent(event);
                          }}
                        >
                          <p className="font-semibold">
                            {event.date.toDateString()}:{" "}
                            {event.type ?? event.type}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            {event.type === "Voice AI"
                              ? event.summary
                              : event.content}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-2 left-16 mt-6 flex justify-end">
                      <button
                        className="rounded  px-4 py-2 text-slate-700"
                        onClick={handlePreviousPatient}
                      >
                        ← Previous Patient
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-16 mt-6 flex justify-end">
                      <button
                        className="rounded  px-4 py-2 text-slate-700"
                        onClick={handleNextPatient}
                      >
                        Next Patient →
                      </button>
                    </div>
                  </>
                )}

                {view === "details" && (
                  <DetailsForm
                    patient={patient}
                    refetchPatientsAction={refetchPatientsAction}
                  />
                )}

                {view === "appeal" && (
                  <>
                    <h2 className="mb-4 text-3xl font-bold">
                      Letter of Appeal Generation
                    </h2>
                    <div className="mb-4 text-sm text-gray-500">
                      <strong>
                        To generate a letter of appeal for {patient.name},
                        please upload both:
                      </strong>
                      <ul className="ml-6 mt-2 list-disc">
                        <li>
                          <strong>Denial</strong> (PDF, Word, or TXT)
                        </li>
                        <li>
                          <strong>Note</strong> (PDF, Word, or TXT)
                        </li>
                      </ul>
                      <span className="mt-2 block text-red-500">
                        Do not upload the same file twice. File names do not
                        matter.
                      </span>
                    </div>
                    <div className="flex space-x-8">
                      <div className="w-3/5 border-r pr-4">
                        <h3 className="mb-2 text-xl font-semibold">
                          Required Files
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="mb-1 block font-semibold">
                              Denial
                            </label>
                            {uploadedFiles[0] ? (
                              <div className="flex items-center gap-2">
                                <span className="truncate text-sm">
                                  {uploadedFiles[0].file.name}
                                </span>
                                <button
                                  className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                  // Remove denial from tuple
                                  onClick={() =>
                                    setUploadedFiles(([_, note]) => [
                                      undefined,
                                      note,
                                    ])
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            ) : (
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx,.txt"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  if (!isAcceptedFileType(file)) {
                                    toast.error(
                                      "Invalid file type. Only PDF, Word, or TXT allowed.",
                                    );
                                    return;
                                  }
                                  if (
                                    uploadedFiles[1]?.file.name === file.name
                                  ) {
                                    toast.error("Duplicate file detected.");
                                    return;
                                  }
                                  setUploadedFiles(([_, note]) => [
                                    { file, progress: 0, uploaded: true },
                                    note,
                                  ]);
                                }}
                              />
                            )}
                          </div>
                          <div>
                            <label className="mb-1 block font-semibold">
                              Note
                            </label>
                            {uploadedFiles[1] ? (
                              <div className="flex items-center gap-2">
                                <span className="truncate text-sm">
                                  {uploadedFiles[1].file.name}
                                </span>
                                <button
                                  className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                  // Remove patient note from tuple
                                  onClick={() =>
                                    setUploadedFiles(([denial]) => [
                                      denial,
                                      undefined,
                                    ])
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            ) : (
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx,.txt"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  if (!isAcceptedFileType(file)) {
                                    toast.error(
                                      "Invalid file type. Only PDF, Word, or TXT allowed.",
                                    );
                                    return;
                                  }
                                  if (
                                    uploadedFiles[0]?.file.name === file.name
                                  ) {
                                    toast.error("Duplicate file detected.");
                                    return;
                                  }
                                  setUploadedFiles(([denial]) => [
                                    denial,
                                    { file, progress: 0, uploaded: true },
                                  ]);
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <button
                          className={`mt-8 w-[256px] rounded px-4 py-2 text-white ${
                            uploadedFiles.length === 2 &&
                            uploadedFiles[0]?.uploaded &&
                            uploadedFiles[1]?.uploaded
                              ? "bg-blue-500 hover:bg-blue-600"
                              : "cursor-not-allowed bg-gray-400"
                          }`}
                          onClick={handleSubmit}
                          disabled={
                            uploadedFiles.length !== 2 ||
                            !uploadedFiles[0]?.uploaded ||
                            !uploadedFiles[1]?.uploaded
                          }
                        >
                          Generate Letter of Appeal
                        </button>
                      </div>
                      <div className="w-2/5 pl-8">
                        <div className="mb-4 rounded bg-blue-50 p-4">
                          <strong>Instructions:</strong>
                          <ul className="ml-6 mt-2 list-disc text-sm">
                            <li>Upload one Denial and one Note file.</li>
                            <li>
                              Accepted formats: PDF, Word (.doc/.docx), or TXT.
                            </li>
                            <li>Do not upload the same file twice.</li>
                            <li>File names do not matter.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {view === "voice" && (
                  <VoiceAI
                    patient={patient}
                    _events={events}
                    _patients={patients}
                    createEventMutation={createEventMutation}
                  />
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="event"
              initial={{ x: "", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full rounded-lg bg-white"
            >
              <div
                ref={eventModalRef}
                className="h-full w-full rounded-lg bg-white"
              >
                <button
                  className="absolute left-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-200"
                  onClick={() => setSelectedEvent(null)}
                  aria-label="Back to Patient Modal"
                >
                  ←
                </button>
                <h3 className="mb-4 text-2xl font-bold">
                  {selectedEvent?.type} Details
                </h3>
                {selectedEvent?.type === "Voice AI" ? (
                  <>
                    <p className="mb-2">
                      <strong>Summary:</strong> {selectedEvent.summary}
                    </p>
                    <p>
                      <strong>Transcript:</strong> {selectedEvent.transcript}
                    </p>
                  </>
                ) : (
                  <div>
                    {selectedEvent?.fileUrls &&
                    selectedEvent.fileUrls.length > 0 ? (
                      <div>
                        <h4 className="mb-2 font-semibold">Attached PDFs:</h4>
                        <ul className="space-y-2">
                          {selectedEvent.fileUrls.map((url, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                              >
                                View PDF {idx + 1}
                              </a>
                              <a
                                href={url}
                                download
                                className="rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600"
                              >
                                Download
                              </a>
                              <button
                                className="hover:bg-yellow-600 rounded bg-blue-500 px-2 py-1 text-xs text-white"
                                onClick={() =>
                                  handleEditPdf(selectedEvent, idx)
                                }
                              >
                                Edit
                              </button>
                              <button
                                className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                onClick={() =>
                                  handleDeletePdf(selectedEvent, idx)
                                }
                              >
                                Delete
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p>{selectedEvent?.content}</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>,
    modalRoot,
  );
}
