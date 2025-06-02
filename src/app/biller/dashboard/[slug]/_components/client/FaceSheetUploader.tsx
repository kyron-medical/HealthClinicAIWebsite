// components/FaceSheetMassUploader.tsx
"use client";

import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { trpc } from "trpc/client";
import { useUser } from "@clerk/nextjs";

interface PatientSummary {
  id: string;
  name: string;
  dob: Date;
  insurer: string;
  moneyCollected: number;
  createdAt: Date;
  updatedAt: Date;
  billerId: string;
  serviceStart: Date;
  serviceEnd: Date | null;
  providerName: string | null;
  facilityName: string | null;
  zipCode: string | null;
  groupNumber: string | null;
}
interface FaceSheetMassUploaderProps {
  patients: PatientSummary[];
  setPatients: (newList: PatientSummary[]) => void;
}

// const textract = new TextractClient({ region: "us-east-1" }); // set your region

export function FaceSheetMassUploader({
  patients,
  setPatients,
}: FaceSheetMassUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const utils = trpc.useUtils(); // or useQueryClient() for React Query

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
    data: any,
  ): data is {
    results: Array<{
      extractedData: any;
      filename: string;
      status: string;
      missingFields?: string[];
    }>;
  } {
    return (
      data &&
      Array.isArray(data.results) &&
      data.results.every(
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
      let data: any;
      try {
        data = await response.json();
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
          insurer: extractedData.insurer ?? "Unknown",
          dob: new Date(extractedData.date_of_birth),
          serviceEnd: null, // Default to null, can be updated later
          providerName: extractedData.provider_name ?? null,
          facilityName: extractedData.facility_name ?? null,
          zipCode: extractedData.zip_code ?? null,
          groupNumber: extractedData.group_number ?? null,
          moneyCollected: 0, // Default value, can be updated later
          billerId: user.id,
        };
      });

      try {
        await createPatientsBulk.mutateAsync(newPatients);
        toast.success(`Created ${newPatients.length} patient(s)`);
        await utils.getPatientsByBillerId.invalidate({ userId: user.id });
      } catch (err) {
        toast.error("Failed to create patients in bulk.");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Network error while uploading face sheets.");
    
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
        className={`rounded px-3 py-1 text-sm text-white ${
          uploading
            ? "cursor-not-allowed bg-gray-400"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading…" : "+"}
      </button>
    </div>
  );
}
