"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { trpc } from "trpc/client";
import { z } from "zod";
import type { PatientEvent } from "@prisma/client";

// Define interface for your row data
interface PatientRow {
  name: string;
  insurer: string;
  moneyCollected: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  billerId: string;
}

interface PatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: PatientRow | null;
  setPatient: (patient: PatientRow) => void;
  events: PatientEvent[];
  patients: PatientRow[];
}

/*
===============================================================================

  Individual Event Component

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
    const response = await fetch(`https://api.kyronmedical.com${endpoint}`, {
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
          }>("/api/p2p");
          transcript = data.p2p_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "biller-insurance") {
          const data = await postCall<{
            p2p_transcript?: string;
            summary?: string;
          }>("/api/p2p");
          transcript = data.p2p_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "claim-status") {
          const data = await postCall<{
            CSI_transcript?: string;
            summary?: string;
          }>("/api/claim_status_inquiry");
          transcript = data.CSI_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "appeal-followup") {
          const data = await postCall<{
            AF_transcript?: string;
            summary?: string;
          }>("/api/appeal_followup");
          transcript = data.AF_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "denial-clarification") {
          const data = await postCall<{
            DRC_transcript?: string;
            summary?: string;
          }>("/api/denial_reason_clarification");
          transcript = data.DRC_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "eob-query") {
          const data = await postCall<{
            EOB_transcript?: string;
            summary?: string;
          }>("/api/eob");
          transcript = data.EOB_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "eligibility-verification") {
          const data = await postCall<{
            EV_transcript?: string;
            summary?: string;
          }>("/api/eligibility_verification");
          transcript = data.EV_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "policy-detail") {
          const data = await postCall<{
            PDI_transcript?: string;
            summary?: string;
          }>("/api/policy_detail_inquiry");
          transcript = data.PDI_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "coordination-of-benefits") {
          const data = await postCall<{
            COB_transcript?: string;
            summary?: string;
          }>("/api/coordination_of_benefits");
          transcript = data.COB_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "billing-discrepancy") {
          const data = await postCall<{
            BDR_transcript?: string;
            summary?: string;
          }>("/api/billing_discrepancy_resolution");
          transcript = data.BDR_transcript ?? "No transcript available.";
          summary = data.summary ?? "";
        } else if (callType === "claim-rejection") {
          const data = await postCall<{
            CRI_transcript?: string;
            summary?: string;
          }>("/api/claim_rejection_inquiry");
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
        setCallTranscript("Error during call: " + (error as Error).message);
        setCallInProgress(false);
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
        Place a call to {patient.name}'s insurance and let the AI agent handle
        the conversation.
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

export default function PatientModal({
  isOpen,
  onClose,
  patient,
  setPatient,
  events,
  patients,
}: PatientModalProps) {
  const [mounted, setMounted] = useState(false);

  const patientModalRef = useRef(null);
  const eventModalRef = useRef(null);

  const [selectedEvent, setSelectedEvent] = useState<PatientEvent | null>(null);
  const [view, setView] = useState<"timeline" | "appeal" | "voice">("timeline");

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventType, setEventType] = useState("");
  const [eventContent, setEventContent] = useState("");
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [eventPdfs, setEventPdfs] = useState<File[]>([]);

  const handleEditPdf = (_event, _pdfIdx) => {
    toast("Edit PDF not implemented (stub)");
  };

  const handleDeletePdf = (_event, _pdfIdx) => {
    toast("Delete PDF not implemented (stub)");
  };

  const createEventMutation = trpc.createPatientEvent.useMutation();

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
  if (!modalRoot) return null;

  if (!patient) return null;

  const handlePreviousPatient = () => {
    if (!patient || !patients.length) return;
    const index = patients.findIndex((p) => p.id === patient.id);
    const prevIndex = (index - 1 + patients.length) % patients.length;
    setPatient(patients[prevIndex]);
  };

  const handleNextPatient = () => {
    if (!patient || !patients.length) return;
    const index = patients.findIndex((p) => p.id === patient.id);
    const nextIndex = (index + 1) % patients.length;
    setPatient(patients[nextIndex]);
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
        const match = /(\$?\s?)(\d+(\.\d{1,2})?)/.exec(eventContent);
        const amount = match ? parseFloat(match[2]) : 0;
        await trpc.updatePatientMoneyCollected.useMutation().mutateAsync({
          patientId: patient.id,
          moneyCollected: amount,
        });
      }

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
                        view === "appeal"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setView("appeal")}
                    >
                      Letter of Appeal
                    </button>
                    <button
                      className={`rounded px-4 py-2 ${
                        view === "voice"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setView("voice")}
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
                      <input
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        placeholder="e.g. Note, Voice AI"
                        required
                      />
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
                            value={eventContent}
                            onChange={(e) => setEventContent(e.target.value)}
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
