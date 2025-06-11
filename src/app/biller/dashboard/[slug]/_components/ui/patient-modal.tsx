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
      data-oid="af2s-ee"
    >
      <div
        className="relative h-[80%] w-[80%] rounded-lg bg-white p-6 px-16 shadow-lg dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
        data-oid="nj70l5q"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
          aria-label="Close"
          data-oid="76kbpa7"
        >
          ✕
        </button>

        <AnimatePresence mode="wait" data-oid="m:wo4lr">
          {!selectedEvent ? (
            <motion.div
              key={view}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="flex h-full w-full items-center justify-center rounded-lg bg-white"
              data-oid="d685fsi"
            >
              <div
                ref={contentRef}
                className="h-[85%] w-[100%] overflow-y-auto rounded-lg bg-white"
                data-oid="-i8p7-6"
              >
                <div className="mb-4 flex flex-col gap-2" data-oid="ydji_ub">
                  <div
                    className="flex flex-row items-center gap-2"
                    data-oid="i:ys78-"
                  >
                    <button
                      className={`rounded px-4 py-2 ${
                        view === "details"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => {
                        handleTabChange("details");
                      }}
                      data-oid="biv3dhq"
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
                      data-oid="hze:q0_"
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
                      data-oid="fx:1:ju"
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
                      data-oid="s-or7wm"
                    >
                      Eligibility & Benefits
                    </button>
                    {view !== "timeline" ? (
                      <button
                        className="ml-auto rounded px-3 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        onClick={() => setView("timeline")}
                        data-oid="6t3hogd"
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
                          data-oid="q74o999"
                        >
                          <FaRegTrashCan
                            className="text-lg"
                            data-oid="zu-353s"
                          />
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                  {view === "timeline" && (
                    <div
                      className="flex flex-row items-center gap-2"
                      data-oid="eslxsvw"
                    >
                      <button
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                        onClick={() => setShowAddEvent(true)}
                        data-oid="cj695_l"
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
                    data-oid="ta1i3x4"
                  >
                    <label className="text-sm font-semibold" data-oid="v0q32a7">
                      Event Type
                      <select
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        required
                        data-oid="1al._f7"
                      >
                        <option value="" disabled data-oid="8c.zn_1">
                          Select event type
                        </option>
                        <option value="Note" data-oid="-6ere03">
                          Note
                        </option>
                        <option value="Letter of Appeal" data-oid="thjn:pe">
                          Letter of Appeal
                        </option>
                        <option value="Voice AI" data-oid="zbb.0ch">
                          Voice AI
                        </option>
                        <option value="Insurance Paid" data-oid="1n6aa5f">
                          Insurance Paid
                        </option>
                      </select>
                    </label>
                    <label className="text-sm font-semibold" data-oid="o.6xu_i">
                      Event Content
                      <textarea
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventContent}
                        onChange={(e) => setEventContent(e.target.value)}
                        placeholder="Enter event details"
                        required
                        data-oid="2d_55qi"
                      />
                    </label>
                    <label className="text-sm font-semibold" data-oid="ov-f9vq">
                      Event Date
                      <input
                        type="date"
                        className="mt-1 w-full rounded border px-2 py-1"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                        data-oid="wlgpj1f"
                      />
                    </label>
                    <label className="text-sm font-semibold" data-oid=":8_9thx">
                      Attach PDF(s)
                      <input
                        type="file"
                        accept="application/pdf"
                        multiple
                        className="mt-1 w-full"
                        onChange={(e) =>
                          setEventPdfs(Array.from(e.target.files ?? []))
                        }
                        data-oid="059k_jt"
                      />
                    </label>
                    <div data-oid=".bxrivc">
                      {eventType === "Insurance Paid" && (
                        <label
                          className="text-sm font-semibold"
                          data-oid="pt-67jo"
                        >
                          Amount Paid
                          <input
                            type="number"
                            className="mt-1 w-full rounded border px-2 py-1"
                            value={amountPaid}
                            onChange={(e) => setAmountPaid(e.target.value)}
                            required
                            data-oid="4rd.3pz"
                          />
                        </label>
                      )}

                      {eventType === "Note" && (
                        <div data-oid="dnlf3eu">
                          <label
                            className="text-sm font-semibold"
                            data-oid="o4x5qhm"
                          >
                            Appointment Type
                            <select
                              className="block w-full rounded-md border border-gray-300 p-2"
                              data-oid="skselbx"
                            >
                              <option value="yes" data-oid="y61aibf">
                                Annual Physical Exam (APE)
                              </option>
                              <option value="no" data-oid="5_e3svt">
                                Chronic Care Management (CCM)
                              </option>
                              <option value="yes" data-oid="rdfql2y">
                                Consultation (Consult)
                              </option>
                              <option value="no" data-oid="fjwksqy">
                                Follow-Up (F/U)
                              </option>
                              <option value="yes" data-oid="fizxi-t">
                                Hopistal Follow-Up (Hosp F/U)
                              </option>
                              <option value="no" data-oid=":q-reon">
                                Immunization Visit (IV)
                              </option>
                              <option value="yes" data-oid="_5knqnl">
                                New Patient Telehealth (TH)
                              </option>
                              <option value="no" data-oid="nt_x.z0">
                                New Patient
                              </option>
                              <option value="yes" data-oid="-lus3-_">
                                Post-Operative Visit (Post-Op)
                              </option>
                              <option value="no" data-oid="c25t1q8">
                                Pre-Operative Assessment (Pre-Op)
                              </option>
                              <option value="yes" data-oid="jrhabm.">
                                Redraw
                              </option>
                              <option value="no" data-oid="fa0i2l7">
                                Same Day
                              </option>
                              <option value="yes" data-oid="iy.9pdi">
                                Scheduled
                              </option>
                              <option value="no" data-oid="7r15sjl">
                                Sick Visit (SV)
                              </option>
                              <option value="yes" data-oid="d3bu7lk">
                                True PA
                              </option>
                              <option value="no" data-oid="jrtnt.h">
                                Urgent Care Visit (UCV)
                              </option>
                              <option value="no" data-oid="e5w0mrs">
                                Well Child Visit (WCV)
                              </option>
                            </select>
                          </label>
                          <label
                            className="text-sm font-semibold"
                            data-oid="rk3uv0a"
                          >
                            Place of Service
                            <select
                              className="block w-full rounded-md border border-gray-300 p-2"
                              data-oid="syr7ugg"
                            >
                              <option value="yes" data-oid="wrs3j.:">
                                Home
                              </option>
                              <option value="no" data-oid="4g4-xm7">
                                PCP/Physician Office
                              </option>
                              <option value="yes" data-oid="awe:eby">
                                Outpatient/Facility
                              </option>
                              <option value="no" data-oid="cc.a0to">
                                Free Standing Facility
                              </option>
                              <option value="yes" data-oid="e_ssiw8">
                                Specialist
                              </option>
                              <option value="no" data-oid="l5hnl7q">
                                Ambulatory Surgical Center
                              </option>
                              <option value="yes" data-oid="-tvalbp">
                                Impatient Hospital
                              </option>
                              <option value="no" data-oid="ur32x91">
                                Independent Lab
                              </option>
                            </select>
                          </label>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2" data-oid="_h0rhzq">
                      <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                        disabled={createEventMutation.isPending}
                        data-oid="q9kh0jy"
                      >
                        {createEventMutation.isPending
                          ? "Adding..."
                          : "Add Event"}
                      </button>
                      <button
                        type="button"
                        className="rounded bg-gray-300 px-4 py-2 text-gray-700"
                        onClick={() => setShowAddEvent(false)}
                        data-oid="ud17.kl"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {view === "timeline" && (
                  <>
                    <h2 className="mb-4 text-3xl font-bold" data-oid="r6dub39">
                      {patient.name}&apos;s Timeline
                    </h2>
                    <ul className="space-y-4" data-oid="0qjj-:s">
                      {events.map((event: PatientEvent, index) => (
                        <li
                          key={index}
                          className="cursor-pointer border-b pb-2 hover:bg-gray-100"
                          onClick={() => {
                            setSelectedEvent(event);
                          }}
                          data-oid="nmm-1zo"
                        >
                          <p className="font-semibold" data-oid="m:0sg82">
                            {event.date.toDateString()}:{" "}
                            {event.type ?? event.type}
                          </p>
                          <p
                            className="truncate text-sm text-gray-500"
                            data-oid="uh2b3rj"
                          >
                            {event.type === "Voice AI"
                              ? event.summary
                              : event.content}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="absolute bottom-4 left-16 mt-6 flex justify-end"
                      data-oid="-9rrrzk"
                    >
                      <button
                        className="rounded  px-4 py-2 text-slate-700"
                        onClick={handlePreviousPatient}
                        data-oid="0wjrk:d"
                      >
                        ← Previous Patient
                      </button>
                    </div>
                    <div
                      className="absolute bottom-4 right-16 mt-6 flex justify-end"
                      data-oid="4ocosy3"
                    >
                      <button
                        className="rounded  px-4 py-2 text-slate-700"
                        onClick={handleNextPatient}
                        data-oid="0g0m06i"
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
                    data-oid="2brb5co"
                  />
                )}

                {view === "appeal" && (
                  <AppealForm
                    patient={patient}
                    refetchPatientsAction={refetchPatientsAction}
                    data-oid="hp.b:l7"
                  />
                )}

                {view === "voice" && (
                  <VoiceAI
                    patient={patient}
                    _events={events}
                    _patients={patients}
                    createEventMutation={createEventMutation}
                    data-oid="i:8hx9l"
                  />
                )}

                {view === "eligibility" && (
                  <EligibilityTab data-oid="d-dpf_u" />
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
              data-oid="ntc4dpt"
            >
              <div
                ref={eventModalRef}
                className="h-full w-full rounded-lg bg-white"
                data-oid="eb:l1un"
              >
                <button
                  className="absolute left-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-200"
                  onClick={() => setSelectedEvent(null)}
                  aria-label="Back to Patient Modal"
                  data-oid="k1a0h8n"
                >
                  ←
                </button>
                <h3 className="mb-4 text-2xl font-bold" data-oid="2pzpo4a">
                  {selectedEvent?.type} Details
                </h3>
                {selectedEvent?.type === "Voice AI" ? (
                  <>
                    <p className="mb-2" data-oid="-o_es.l">
                      <strong data-oid="2q.795k">Summary:</strong>{" "}
                      {selectedEvent.summary}
                    </p>
                    <p data-oid="goa3y3p">
                      <strong data-oid="yl0u19m">Transcript:</strong>{" "}
                      {selectedEvent.transcript}
                    </p>
                  </>
                ) : (
                  <div data-oid="k9x:how">
                    {selectedEvent?.fileUrls &&
                    selectedEvent.fileUrls.length > 0 ? (
                      <div data-oid="pi23d:2">
                        <h4 className="mb-2 font-semibold" data-oid="_e39q07">
                          Attached PDFs:
                        </h4>
                        <ul className="space-y-2" data-oid="rf-moy1">
                          {selectedEvent.fileUrls.map((url, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2"
                              data-oid="ib5hn3t"
                            >
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                                data-oid="_dcwzq9"
                              >
                                View PDF {idx + 1}
                              </a>
                              <a
                                href={url}
                                download
                                className="rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600"
                                data-oid="5ax63t0"
                              >
                                Download
                              </a>
                              <button
                                className="hover:bg-yellow-600 rounded bg-blue-500 px-2 py-1 text-xs text-white"
                                onClick={() =>
                                  handleEditPdf(selectedEvent, idx)
                                }
                                data-oid="vargwm9"
                              >
                                Edit
                              </button>
                              <button
                                className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                onClick={() =>
                                  handleDeletePdf(selectedEvent, idx)
                                }
                                data-oid="hr1us11"
                              >
                                Delete
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p data-oid="el59tbt">{selectedEvent?.content}</p>
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
