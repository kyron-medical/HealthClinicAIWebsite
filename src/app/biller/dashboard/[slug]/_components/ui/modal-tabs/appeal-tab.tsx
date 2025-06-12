"use client";

import {
  billerAction,
  Encounter,
  Patient,
  Physician,
  Action,
} from "@prisma/client";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { trpc } from "trpc/client";
import { z } from "zod";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

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

function isAcceptedFileType(file: File) {
  return ACCEPTED_TYPES.includes(file.type);
}

// Define interface for your row data
interface PatientRow {
  id: string;
  name: string;
  dob: Date;
  sex?: string | null;
  address?: string;
  physician: string;

  caseId: string;
  encounterId: string;
  dateOfService: Date;
  facility: string;
  insuranceCompany: string;
  actions: number;
  status: string;

  insurer: string;
  groupNumber?: string | null;
  serviceStart?: Date | null;
  serviceEnd?: Date | null;

  billerId: string;
  createdAt: Date;
  updatedAt: Date;
}

type AppealFormProps = {
  encounter: Encounter & {
    patient: Patient;
    physician: Physician; // or the actual Physician type if you have it imported
    actions: billerAction[];
  };
  refetchEncountersAction: (options?: unknown) => Promise<unknown>;
};

/*
===============================================================================

  Letter of Appeal Generation Component

===============================================================================
*/

export const AppealForm = ({
  encounter: encounter,
  refetchEncountersAction: refetchEncountersAction,
}: AppealFormProps) => {
  const [mounted, setMounted] = useState(false);

  const patientModalRef = useRef(null);
  const eventModalRef = useRef(null);

  const [selectedAction, setSelectedAction] = useState<billerAction | null>(
    null,
  );

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventType, setEventType] = useState<Action>();
  const [eventContent, setEventContent] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [eventPdfs, setEventPdfs] = useState<File[]>([]);
  // const utils = trpc.useUtils(); // or useQueryClient() for React Query

  const createActionMutation = trpc.createAction.useMutation();
  const deletePatientMutation = trpc.deletePatient.useMutation();

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
    const response = await fetch(`https://www.kyronmedical.com${endpoint}`, {
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
    setEventType(Action.APPEALS);
    setCallInProgress(true);
    setCallTranscript("");
    if (!encounter.patient) return;

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

        if (!eventType || !eventContent) {
          toast.error("Please fill in all fields.");
          return;
        }

        await createActionMutation.mutateAsync({
          encounterId: encounter.id,
          type: eventType,
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

  const handleEditPdf = (_event, _pdfIdx) => {
    toast("Edit PDF not implemented (stub)");
  };

  const handleDeletePdf = (_event, _pdfIdx) => {
    toast("Delete PDF not implemented (stub)");
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setEventType(Action.APPEALS);

    const [denialFile, noteFile] = uploadedFiles;

    if (!denialFile || !noteFile) {
      toast.error("Please upload both Denial and Note files.");
      return;
    }

    const formData = new FormData();

    formData.append("files", denialFile.file);
    formData.append("files", noteFile.file);

    if (!eventType || !eventContent) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const fetchPromise = async () => {
        const response = await fetch(
          "https://www.kyronmedical.com/bapi/generate-appeal",
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
          await createActionMutation.mutateAsync({
            encounterId: encounter.id,
            type: eventType,
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

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex flex-row items-center gap-2">
          <h2 className="m-0 text-3xl font-bold">Voice AI Agent</h2>
        </div>
        <p className="mb-4 text-sm text-gray-500">
          Place a call to {encounter.patient.name}&apos;s insurance and let the
          AI agent handle the conversation.
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
              <div className="mt-4 max-h-64 overflow-auto rounded border bg-white p-2">
                <div className="mb-1 font-bold">Transcript:</div>
                <pre className="whitespace-pre-wrap text-xs">
                  {callTranscript}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===================================================================== */}
      <div>
        <h2 className="mb-4 text-3xl font-bold">Letter of Appeal Generation</h2>
        <div className="mb-4 text-sm text-gray-500">
          <strong>
            To generate a letter of appeal for {encounter.patient.name}, please
            upload both:
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
            Do not upload the same file twice. File names do not matter.
          </span>
        </div>
        <div className="flex space-x-8">
          <div className="w-3/5 border-r pr-4">
            <h3 className="mb-2 text-xl font-semibold">Required Files</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block font-semibold">Denial</label>
                {uploadedFiles[0] ? (
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm">
                      {uploadedFiles[0].file.name}
                    </span>
                    <button
                      className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                      // Remove denial from tuple
                      onClick={() =>
                        setUploadedFiles(([_, note]) => [undefined, note])
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
                      if (uploadedFiles[1]?.file.name === file.name) {
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
                <label className="mb-1 block font-semibold">Note</label>
                {uploadedFiles[1] ? (
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm">
                      {uploadedFiles[1].file.name}
                    </span>
                    <button
                      className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                      // Remove patient note from tuple
                      onClick={() =>
                        setUploadedFiles(([denial]) => [denial, undefined])
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
                      if (uploadedFiles[0]?.file.name === file.name) {
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
                <li>Accepted formats: PDF, Word (.doc/.docx), or TXT.</li>
                <li>Do not upload the same file twice.</li>
                <li>File names do not matter.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
