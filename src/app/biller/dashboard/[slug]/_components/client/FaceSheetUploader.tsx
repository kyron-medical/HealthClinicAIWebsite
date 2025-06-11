// components/FaceSheetMassUploader.tsx
"use client";

import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { trpc } from "trpc/client";
import { useUser } from "@clerk/nextjs";

interface ExtractedPatientData {
  patient_name: string;
  insurance_name?: string;
  date_of_birth: string;
  address?: string | null;
  age?: string | number | null;
  sex?: string | null;
  state?: string | null;
  city?: string | null;
  provider_name?: string | null;
  facility_name?: string | null;
  zip?: string | null;
  group_number?: string | null;
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
  refetchPatientsAction: (options?: unknown) => Promise<unknown>;
}

// const textract = new TextractClient({ region: "us-east-1" }); // set your region

export function FaceSheetMassUploader({
  refetchPatientsAction,
}: FaceSheetMassUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const createPatientsBulk = trpc.createPatientsBulk.useMutation();
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
          item.extractedData !== null &&
          typeof item.extractedData.patient_name === "string" &&
          typeof item.extractedData.date_of_birth === "string",
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
      duration: 15000,
    });

    try {
      const response = await fetch(
        "https://aws.kyronmedical.com/bapi/upload-face-sheets",
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

      const newPatients = data.results.map((patient) => {
        const extractedData = patient.extractedData;
        return {
          name: extractedData.patient_name,
          insurer: extractedData.insurance_name ?? "Unknown",
          dob: new Date(extractedData.date_of_birth),
          address: extractedData.address ?? null,
          age: extractedData.age ?? null,
          sex: extractedData.sex ?? null,
          state: extractedData.state ?? null,
          city: extractedData.city ?? null,
          serviceEnd: null, // Default to null, can be updated later
          providerName: extractedData.provider_name ?? null,
          facilityName: extractedData.facility_name ?? null,
          zipCode: extractedData.zip ?? null,
          groupNumber: extractedData.group_number ?? null,
          billerId: user.id,
        };
      });

      try {
        await createPatientsBulk.mutateAsync(newPatients);
        toast.success(`Created ${newPatients.length} patient(s)`);
        await refetchPatientsAction(); // Immediately update the list
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
    <div className="flex items-center" data-oid="20rrr-_">
      {/* Hidden file input to trigger face sheet upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.png,.PNG,.jpg,.jpeg,.tiff,.heic"
        multiple
        className="hidden"
        onChange={handleFilesSelected}
        data-oid="2o5fpxr"
      />

      {/* Only the "+" button is rendered here */}
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className={`rounded px-3 py-1 text-sm text-white ${
          uploading
            ? "cursor-not-allowed bg-gray-400"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        data-oid="tmy:nnv"
      >
        {uploading ? "Uploading…" : "+"}
      </button>
    </div>
  );
}
