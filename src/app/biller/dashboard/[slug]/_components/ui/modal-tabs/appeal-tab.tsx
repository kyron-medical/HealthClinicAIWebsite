"use client";

import { PatientEvent } from "@prisma/client";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { trpc } from "trpc/client";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];

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
  patient: PatientRow;
  refetchPatientsAction: (options?: unknown) => Promise<unknown>;
};

/*
===============================================================================

  Letter of Appeal Generation Component

===============================================================================
*/

export const AppealForm = ({
  patient,
  refetchPatientsAction,
}: AppealFormProps) => {
  const [mounted, setMounted] = useState(false);

  const patientModalRef = useRef(null);
  const eventModalRef = useRef(null);

  const [selectedEvent, setSelectedEvent] = useState<PatientEvent | null>(null);

  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventType, setEventType] = useState("");
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

  const handleEditPdf = (_event, _pdfIdx) => {
    toast("Edit PDF not implemented (stub)");
  };

  const handleDeletePdf = (_event, _pdfIdx) => {
    toast("Delete PDF not implemented (stub)");
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

  return (
    <>
      <h2 className="mb-4 text-3xl font-bold" data-oid="kywvv0y">
        Letter of Appeal Generation
      </h2>
      <div className="mb-4 text-sm text-gray-500" data-oid="ur.y3w4">
        <strong data-oid="gy9bhxu">
          To generate a letter of appeal for {patient.name}, please upload both:
        </strong>
        <ul className="ml-6 mt-2 list-disc" data-oid="so30cdy">
          <li data-oid="5dj1byz">
            <strong data-oid="j.1l2bt">Denial</strong> (PDF, Word, or TXT)
          </li>
          <li data-oid="17mg3-c">
            <strong data-oid="8a2_xbg">Note</strong> (PDF, Word, or TXT)
          </li>
        </ul>
        <span className="mt-2 block text-red-500" data-oid="fvhcp-0">
          Do not upload the same file twice. File names do not matter.
        </span>
      </div>
      <div className="flex space-x-8" data-oid="dgm15rg">
        <div className="w-3/5 border-r pr-4" data-oid="uqdoc:0">
          <h3 className="mb-2 text-xl font-semibold" data-oid="1ilgqud">
            Required Files
          </h3>
          <div className="space-y-4" data-oid="1eplfej">
            <div data-oid="yfrfkc7">
              <label className="mb-1 block font-semibold" data-oid="1hnkf3b">
                Denial
              </label>
              {uploadedFiles[0] ? (
                <div className="flex items-center gap-2" data-oid="5bn-jeu">
                  <span className="truncate text-sm" data-oid=".z1el.7">
                    {uploadedFiles[0].file.name}
                  </span>
                  <button
                    className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                    // Remove denial from tuple
                    onClick={() =>
                      setUploadedFiles(([_, note]) => [undefined, note])
                    }
                    data-oid="7adwfnu"
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
                  data-oid="2_p4-h1"
                />
              )}
            </div>
            <div data-oid="lzl8qkn">
              <label className="mb-1 block font-semibold" data-oid="jij957r">
                Note
              </label>
              {uploadedFiles[1] ? (
                <div className="flex items-center gap-2" data-oid="._sre-m">
                  <span className="truncate text-sm" data-oid="2fq028.">
                    {uploadedFiles[1].file.name}
                  </span>
                  <button
                    className="rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                    // Remove patient note from tuple
                    onClick={() =>
                      setUploadedFiles(([denial]) => [denial, undefined])
                    }
                    data-oid="zicf0zo"
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
                  data-oid="boeadjb"
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
            data-oid="qnab8cd"
          >
            Generate Letter of Appeal
          </button>
        </div>
        <div className="w-2/5 pl-8" data-oid="0wyceah">
          <div className="mb-4 rounded bg-blue-50 p-4" data-oid="vih51ec">
            <strong data-oid="rpi-i.y">Instructions:</strong>
            <ul className="ml-6 mt-2 list-disc text-sm" data-oid="x7ofatd">
              <li data-oid="efkz2ln">Upload one Denial and one Note file.</li>
              <li data-oid="-9w9ynb">
                Accepted formats: PDF, Word (.doc/.docx), or TXT.
              </li>
              <li data-oid="kehmf3l">Do not upload the same file twice.</li>
              <li data-oid="0fredfw">File names do not matter.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
