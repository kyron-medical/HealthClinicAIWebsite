"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { trpc } from "trpc/client";
import { z } from "zod";
import type { PatientEvent } from "@prisma/client";
import { FaRegTrashCan } from "react-icons/fa6";
import { DetailsForm } from "./modal-tabs/details-tab";
import { VoiceAI } from "./modal-tabs/voiceai-tab";
import { AppealForm } from "./modal-tabs/appeal-tab";
import { EligibilityTab } from "./modal-tabs/eligibility-tab";

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


const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

function isAcceptedFileType(file: File) {
  return ACCEPTED_TYPES.includes(file.type);
}

type View = "timeline" | "details" | "appeal" | "voice" | "eligibility";

export default function PatientModal({
  isOpen,
  onClose,
  patient,
  setPatient,
  events,
  patients,
  refetchPatientsAction,
}: PatientModalProps) {
  const [mounted, setMounted] = useState(false);

  const patientModalRef = useRef(null);
  const eventModalRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // In patient-modal.tsx
  const handleTabChange = (newView: View) => {
    // Reset scroll position BEFORE view changes
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }

    // Then change the view
    setView(newView);
    setShowAddEvent(false);
  };

  const [selectedEvent, setSelectedEvent] = useState<PatientEvent | null>(null);
  const [view, setView] = useState<View>("timeline");

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventType, setEventType] = useState("");
  const [eventContent, setEventContent] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [eventPdfs, setEventPdfs] = useState<File[]>([]);
  // const utils = trpc.useUtils(); // or useQueryClient() for React Query

  // const [files, setFiles] = useState<File[]>([]);

  // const [allUploaded, setAllUploaded] = useState(false);
  // const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (view === "details") {
      // Use requestAnimationFrame for better timing
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (contentRef.current) {
            contentRef.current.scrollTop = 0;
          }
        });
      });
    }
  }, [view]);

  const handleEditPdf = (_event, _pdfIdx) => {
    toast("Edit PDF not implemented (stub)");
  };

  const handleDeletePdf = (_event, _pdfIdx) => {
    toast("Delete PDF not implemented (stub)");
  };

  const createEventMutation = trpc.createPatientEvent.useMutation();
  const deletePatientMutation = trpc.deletePatient.useMutation();
  const updateMoneyCollectedMutation =
    trpc.updatePatientMoneyCollected.useMutation();

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
    } catch (error: unknown) {
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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
      onClick={handleBackdropClick}
    >
      <div
        className="relative h-[80%] w-[80%] rounded-lg bg-white p-6 px-16 shadow-lg dark:bg-gray-800"
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
              className="flex h-full w-full items-center justify-center rounded-lg bg-white"
            >
              <div
                ref={contentRef}
                className="h-[85%] w-[100%] overflow-y-auto rounded-lg bg-white"
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
                        handleTabChange("details");
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
                    <button
                      className={`rounded px-4 py-2 ${
                        view === "eligibility"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => {
                        setView("eligibility");
                        setShowAddEvent(false);
                      }}
                    >
                      Eligibility & Benefits
                    </button>
                    {view !== "timeline" ? (
                      <button
                        className="ml-auto rounded px-3 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        onClick={() => setView("timeline")}
                      >
                        Back to Timeline
                      </button>
                    ) : (
                      <>
                        {/* Delete Patient Button - top left corner */}
                        <button
                          className="ml-auto mr-4 flex items-center gap-1 rounded bg-red-100 px-3 py-1 text-red-600 hover:bg-red-200"
                          onClick={() => handleDeletePatient(patient.id)}
                          title="Delete Patient"
                        >
                          <FaRegTrashCan className="text-lg" />
                          Delete
                        </button>
                      </>
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
                    <div className="absolute bottom-4 left-16 mt-6 flex justify-end">
                      <button
                        className="rounded  px-4 py-2 text-slate-700"
                        onClick={handlePreviousPatient}
                      >
                        ← Previous Patient
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-16 mt-6 flex justify-end">
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
                  <AppealForm
                    patient={patient}
                    refetchPatientsAction={refetchPatientsAction}
                  />
                )}

                {view === "voice" && (
                  <VoiceAI
                    patient={patient}
                    _events={events}
                    _patients={patients}
                    createEventMutation={createEventMutation}
                  />
                )}

                {view === "eligibility" && (
                  <EligibilityTab/>
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
