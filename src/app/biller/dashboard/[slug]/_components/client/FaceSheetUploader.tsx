// components/FaceSheetMassUploader.tsx
"use client";

import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { trpc } from "trpc/client";
import { useUser } from "@clerk/nextjs";

interface ExtractedPatientData {
  patient_name: string;
  patient_id?: string;
  mrn?: string;
  medical_record_number?: string;
  date_of_birth: string;
  age?: string;
  sex?: string;
  race?: string;
  patient_phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  group_number?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  admission_date?: string;
  admission_time?: string;
  discharge_date?: string;
  discharge_time?: string;
  admitting_physician?: string;
  attending_physician?: string;
  attending_physician_npi?: string;
  attending_physician_opn?: string;
  attending_physician_address?: string;
  diagnosis?: string;
  procedure?: string;
  insurance_id?: string;
  insurance_name?: string;
  insurance_type?: string;
  insurance_plan?: string;
  insurance_primary_secondary?: string;
  insurance_start_date?: string;
  insurance_end_date?: string;
  facility_name?: string;
  facility_address?: string;
  facility_npi?: string;
  facility_type?: string;
  place_of_service?: string;
  appointment_type?: string;
}

interface UploadFaceSheetsResult {
  results: Array<{
    extractedData: ExtractedPatientData;
    filename: string;
    status: string;
    missingFields?: string[];
  }>;
}

interface FaceSheetMassUploaderProps {
  refetchEncountersAction: (options?: unknown) => Promise<unknown>;
}

// const textract = new TextractClient({ region: "us-east-1" }); // set your region

export function FaceSheetMassUploader({
  refetchEncountersAction,
}: FaceSheetMassUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const createCasesBulk = trpc.createCasesBulk.useMutation();
  const { user } = useUser();
  if (!user) {
    toast.error("You must be logged in to upload face sheets.");
    return null;
  }

  // Narrowing function in order to type the JSON response from the server
  // JSON contains an array called results which has the patient summaries
  // Narrowing function to check if data is in the expected format
  function isPatientSummaryArray(
    data: unknown,
  ): data is UploadFaceSheetsResult {
    return (
      typeof data === "object" &&
      data !== null &&
      Array.isArray((data as UploadFaceSheetsResult).results) &&
      (data as UploadFaceSheetsResult).results.every(
        (item) =>
          item &&
          typeof item.filename === "string" &&
          typeof item.status === "string" &&
          typeof item.extractedData === "object" &&
          item.extractedData !== null
      )
    );
  }

  // Handler for when the user selects files
  const handleFilesSelected = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const formData = new FormData();
    fileArray.forEach((file) => formData.append("files", file));

    setUploading(true);
    const toastId = toast.loading("Processing face sheets…", {
      duration: 30000,
    });

    try {
      const response = await fetch(
        "https://www.kyronmedical.com/bapi/upload-face-sheets",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        // The status is 4xx/5xx, so don’t try to parse JSON right away.
        // Instead, read the raw text (HTML or JSON error) and log it:
        const errorText = await response.text();
        console.error(`Upload failed (HTTP ${response.status}):`, errorText);
        // You can then surface a user‐friendly message in the UI.
        return;
      }

      // Only parse JSON when status is 200–299:
      let data: unknown;
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (err) {
        console.error("Expected JSON, but received:", await response.text());
        return;
      }

      toast.dismiss(toastId);

      if (!isPatientSummaryArray(data)) {
        toast.error("Invalid response format from server.");
        return;
      }

      const newEncounters = data.results.map((output) => {
        const extractedData = output.extractedData;
        return {
          patientName: extractedData.patient_name || undefined,
          patientId: extractedData.patient_id ?? undefined,
          mrn:
            extractedData.mrn ??
            extractedData.medical_record_number ??
            undefined,
          medical_record_number:
            extractedData.medical_record_number ?? undefined,
          date_of_birth: extractedData.date_of_birth ?? undefined,
          age: extractedData.age ? String(extractedData.age) : undefined,
          sex: extractedData.sex ?? undefined,
          race: extractedData.race ?? undefined,
          patient_phone: extractedData.patient_phone ?? undefined,
          patientAddress: extractedData.address ?? undefined,
          city: extractedData.city ?? undefined,
          state: extractedData.state ?? undefined,
          zip: extractedData.zip ?? undefined,
          group_number: extractedData.group_number ?? undefined,
          emergency_contact_name:
            extractedData.emergency_contact_name ?? undefined,
          emergency_contact_phone:
            extractedData.emergency_contact_phone ?? undefined,
          admission_date: extractedData.admission_date
            ? new Date(extractedData.admission_date).toISOString().split("T")[0]
            : undefined,
          admission_time: extractedData.admission_time ?? undefined,
          discharge_date: extractedData.discharge_date
            ? new Date(extractedData.discharge_date).toISOString().split("T")[0]
            : undefined,
          discharge_time: extractedData.discharge_time ?? undefined,
          admitting_physician: extractedData.admitting_physician ?? undefined,
          attending_physician: extractedData.attending_physician ?? undefined,
          attending_physician_npi:
            extractedData.attending_physician_npi ?? undefined,
          attending_physician_opn:
            extractedData.attending_physician_opn ?? undefined,
          attending_physician_address:
            extractedData.attending_physician_address ?? undefined,
          diagnosis: extractedData.diagnosis ?? undefined,
          procedure: extractedData.procedure ?? undefined,
          insurance_id: extractedData.insurance_id ?? undefined,
          insurance_name: extractedData.insurance_name ?? undefined,
          insurance_type: extractedData.insurance_type ?? undefined,
          insurance_plan: extractedData.insurance_plan ?? undefined,
          insurance_primary_secondary:
            extractedData.insurance_primary_secondary ?? undefined,
          insurance_start_date: extractedData.insurance_start_date ?? undefined,
          insurance_end_date: extractedData.insurance_end_date ?? undefined,
          facility_name: extractedData.facility_name ?? undefined,
          facility_address: extractedData.facility_address ?? undefined,
          facility_npi: extractedData.facility_npi ?? undefined,
          facility_type: extractedData.facility_type ?? undefined,
          place_of_service: extractedData.place_of_service ?? undefined,
          appointment_type: extractedData.appointment_type ?? undefined,
          // You can add any additional fields here as needed
          billerId: user.id, // If needed by your backend
        };
      });

      try {
        await createCasesBulk.mutateAsync(newEncounters);
        toast.success(`Created ${newEncounters.length} encounter(s)`);
        await refetchEncountersAction(); // Immediately update the list
      } catch (err) {
        toast.error(
          "Failed to create patients in bulk." +
            (err instanceof Error ? `: ${err.message}` : ""),
        );
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error(
        "Network error while uploading face sheets." +
          (err instanceof Error ? `: ${err.message}` : ""),
      );
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center">
      {/* Hidden file input to trigger face sheet upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.png,.PNG,.jpg,.jpeg,.tiff,.heic"
        multiple
        className="hidden"
        onChange={handleFilesSelected}
      />

      {/* Only the "+" button is rendered here */}
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className={`rounded px-4 py-2 text-sm font-medium text-white transition ${
          uploading
            ? "cursor-not-allowed bg-gray-400"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading…" : "+ New Case"}
      </button>
    </div>
  );
}
