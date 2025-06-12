"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { trpc } from "trpc/client";
import { z } from "zod";
import {
  Action,
  Encounter,
  Patient,
  Physician,
  billerAction,
} from "@prisma/client";
import { FaRegTrashCan } from "react-icons/fa6";
import { DetailsForm } from "./modal-tabs/details-tab";

import { AppealForm } from "./modal-tabs/appeal-tab";
import { EligibilityTab } from "./modal-tabs/eligibility-tab";

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

interface EncounterModalProps {
  isOpen: boolean;
  onClose: () => void;
  encounter: Encounter & {
    patient: Patient;
    physician: Physician; // or the actual Physician type if you have it imported
    actions: billerAction[];
  };
  setEncounter: (
    encounter:
      | (Encounter & {
          patient: Patient;
          physician: Physician; // or the actual Physician type if you have it imported
          actions: billerAction[];
        })
      | null,
  ) => void;
  encounters: (Encounter & {
    patient: Patient;
    physician: Physician; // or the actual Physician type if you have it imported
    actions: billerAction[];
  })[];
  actions: billerAction[];

  // patient: PatientRow | null;
  // setPatient: (patient: PatientRow | null) => void;
  // events: Encounter[];
  // patients: PatientRow[];
  refetchEncountersAction: (options?: unknown) => Promise<unknown>;
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

export default function EncounterModal({
  isOpen,
  onClose,
  encounter,
  setEncounter,
  encounters,
  actions,
  refetchEncountersAction: refetchEncountersAction,
}: EncounterModalProps) {
  const [mounted, setMounted] = useState(false);

  const eventModalRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // In encounter-modal.tsx
  const handleTabChange = (newView: View) => {
    // Reset scroll position BEFORE view changes
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }

    // Then change the view
    setView(newView);
    setShowAddEvent(false);
  };

  const [selectedAction, setSelectedAction] = useState<billerAction | null>(
    null,
  );
  const [view, setView] = useState<View>("timeline");

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventType, setEventType] = useState<Action>();
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

  const createActionMutation = trpc.createAction.useMutation();
  const deleteEncounterMutation = trpc.deleteEncounter.useMutation();

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

  if (!encounter) return null;

  if (!encounter.patient) {
    toast.error("Encounter does not have an associated patient.");
    return null;
  }

  // Get the previous encounter of the current patient
  const handlePreviousPatientEncounter = () => {
    if (!encounter || !encounters.length) return;
    const index = encounters.findIndex((e) => e.id === encounter.id);
    const prevIndex = (index - 1 + encounters.length) % encounters.length;

    setEncounter(encounters[prevIndex]);
    setShowAddEvent(false);
  };

  // Get the next encounter of the current patient
  const handleNextPatientEncounter = () => {
    if (!encounter || !encounters.length) return;
    const index = encounters.findIndex((e) => e.id === encounter.id);
    const nextIndex = (index + 1) % encounters.length;
    setEncounter(encounters[nextIndex]);
    setShowAddEvent(false);
  };

  const handleDeleteEncounter = async (encounterId: string) => {
    if (!encounterId) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete this patient? This action cannot be undone.",
    );
    if (!confirmed) return;

    try {
      await deleteEncounterMutation.mutateAsync({ encounterId });
      toast.success("Patient deleted successfully");
      void refetchEncountersAction();
      // Remove the deleted patient from the patients list and select the next one if available
      const idx = encounters.findIndex((p) => p.id === encounterId);
      const newEncounters = encounters.filter((p) => p.id !== encounterId);
      if (newEncounters.length > 0) {
        // Select next encounter, or previous if last was deleted
        const nextIdx =
          idx < newEncounters.length ? idx : newEncounters.length - 1;
        setEncounter(newEncounters[nextIdx]);
        setShowAddEvent(false);
      } else {
        setEncounter(null);
      }
      onClose();
    } catch (error: unknown) {
      toast.error("Failed to delete encounter: ");
    }
  };

  const handleAddAction = async (e: React.FormEvent) => {
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

      await createActionMutation.mutateAsync({
        encounterId: encounter.id,
        type: eventType,
        eventContent,
        date: new Date(eventDate),
        fileUrls: fileUrls,
      });

      void refetchEncountersAction();

      toast.dismiss();
      toast.success("Event added!");
      setShowAddEvent(false);
      setEventType(undefined);
      setEventContent("");
      setEventDate(new Date().toISOString().split("T")[0]);
      setEventPdfs([]);
    } catch {
      toast.dismiss();
      toast.error("Error adding event");
    }
  };

  if (!actions) {
    toast.error("No actions found for this encounter.");
    return null;
  }

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
          {!selectedAction ? (
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
                      Appeals
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
                          onClick={() => handleDeleteEncounter(encounter.id)}
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
                    onSubmit={handleAddAction}
                  >
                    <label className="text-sm font-semibold">
                      Event Type
                      <select
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value as Action)}
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
                      {/* {eventType === "Note" && (
                    <div data-oid="56h1c-3">
                    <label
                      className="text-sm font-semibold"
                      data-oid="uk:w3eg"
                    >
                      Appointment Type
                      <select
                        className="block w-full rounded-md border border-gray-300 p-2"
                        data-oid="h6s2drz"
                      >
                        <option value="yes" data-oid="2lt5tq2">
                          Annual Physical Exam (APE)
                        </option>
                        <option value="no" data-oid="3:rek6h">
                          Chronic Care Management (CCM)
                        </option>
                        <option value="yes" data-oid="0j.7xj_">
                          Consultation (Consult)
                        </option>
                        <option value="no" data-oid="zs268:6">
                          Follow-Up (F/U)
                        </option>
                        <option value="yes" data-oid="8lcg3v1">
                          Hopistal Follow-Up (Hosp F/U)
                        </option>
                        <option value="no" data-oid="4upfy5l">
                          Immunization Visit (IV)
                        </option>
                        <option value="yes" data-oid="qqjcba:">
                          New Patient Telehealth (TH)
                        </option>
                        <option value="no" data-oid="t-37h7a">
                          New Patient
                        </option>
                        <option value="yes" data-oid="2vhb-ht">
                          Post-Operative Visit (Post-Op)
                        </option>
                        <option value="no" data-oid="6x6quwm">
                          Pre-Operative Assessment (Pre-Op)
                        </option>
                        <option value="yes" data-oid="m8sm1w9">
                          Redraw
                        </option>
                        <option value="no" data-oid="zas08ty">
                          Same Day
                        </option>
                        <option value="yes" data-oid="ypufs8h">
                          Scheduled
                        </option>
                        <option value="no" data-oid="6p170g-">
                          Sick Visit (SV)
                        </option>
                        <option value="yes" data-oid="scbv-eh">
                          True PA
                        </option>
                        <option value="no" data-oid="j1v2hqc">
                          Urgent Care Visit (UCV)
                        </option>
                        <option value="no" data-oid="op:eh1c">
                          Well Child Visit (WCV)
                        </option>
                      </select>
                    </label>
                    <label
                      className="text-sm font-semibold"
                      data-oid="son4vbk"
                    >
                      Place of Service
                      <select
                        className="block w-full rounded-md border border-gray-300 p-2"
                        data-oid="v310r.8"
                      >
                        <option value="yes" data-oid="q9pnbre">
                          Home
                        </option>
                        <option value="no" data-oid="zfwc.al">
                          PCP/Physician Office
                        </option>
                        <option value="yes" data-oid="2n35rqh">
                          Outpatient/Facility
                        </option>
                        <option value="no" data-oid="gqa8arb">
                          Free Standing Facility
                        </option>
                        <option value="yes" data-oid="g6pnmpw">
                          Specialist
                        </option>
                        <option value="no" data-oid="9z_b8ph">
                          Ambulatory Surgical Center
                        </option>
                        <option value="yes" data-oid="wt21mk_">
                          Impatient Hospital
                        </option>
                        <option value="no" data-oid="wjs9m3x">
                          Independent Lab
                        </option>
                      </select>
                    </label>
                    </div>
                    )} */}
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                        disabled={createActionMutation.isPending}
                      >
                        {createActionMutation.isPending
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
                      {encounter.patient.name}&apos;s Timeline
                    </h2>
                    <ul className="space-y-4">
                      {actions.map((action: billerAction, index) => (
                        <li
                          key={index}
                          className="cursor-pointer border-b pb-2 hover:bg-gray-100"
                          onClick={() => {
                            setSelectedAction(action);
                          }}
                        >
                          <p className="font-semibold">
                            {action.date.toDateString()}:{" "}
                            {action.type ?? action.type}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            {action.type === Action.APPEALS
                              ? action.summary
                              : action.content}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-4 left-16 mt-6 flex justify-end">
                      <button
                        className="rounded  px-4 py-2 text-slate-700"
                        onClick={handlePreviousPatientEncounter}
                      >
                        ← Previous Encounter
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-16 mt-6 flex justify-end">
                      <button
                        className="rounded  px-4 py-2 text-slate-700"
                        onClick={handleNextPatientEncounter}
                      >
                        Next Encounter →
                      </button>
                    </div>
                  </>
                )}

                {view === "details" && (
                  <DetailsForm
                    encounter={encounter}
                    refetchEncountersAction={refetchEncountersAction}
                  />
                )}

                {view === "appeal" && (
                  <AppealForm
                    encounter={encounter}
                    refetchEncountersAction={refetchEncountersAction}
                  />
                )}

                {view === "eligibility" && <EligibilityTab />}
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
                  onClick={() => setSelectedAction(null)}
                  aria-label="Back to Encounter Modal"
                >
                  ←
                </button>
                <h3 className="mb-4 text-2xl font-bold">
                  {selectedAction?.type} Details
                </h3>
                {selectedAction?.type === Action.APPEALS ? (
                  <>
                    <p className="mb-2">
                      <strong>Summary:</strong> {selectedAction.summary}
                    </p>
                    <p>
                      <strong>Transcript:</strong> {selectedAction.transcript}
                    </p>
                  </>
                ) : (
                  <div>
                    {selectedAction?.fileUrls &&
                    selectedAction.fileUrls.length > 0 ? (
                      <div>
                        <h4 className="mb-2 font-semibold">Attached PDFs:</h4>
                        <ul className="space-y-2">
                          {selectedAction.fileUrls.map((url, idx) => (
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
                                  handleEditPdf(selectedAction, idx)
                                }
                              >
                                Edit
                              </button>
                              <button
                                className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                onClick={() =>
                                  handleDeletePdf(selectedAction, idx)
                                }
                              >
                                Delete
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p>{selectedAction?.content}</p>
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
