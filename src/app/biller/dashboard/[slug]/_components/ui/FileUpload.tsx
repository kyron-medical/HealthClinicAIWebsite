// src/components/Demo/FileUpload.tsx
"use client";

import React, { useState, useEffect } from "react";
import { TiUpload } from "react-icons/ti";
// If you use react-hot-toast or react-toastify, import it here
// import { toast } from "react-hot-toast";

interface FileUploadBoxProps {
  onFileChange: (file: File | null) => void;
  label: string;
}

interface UploadFile {
  file: File;
  progress: number;
  uploaded: boolean;
}

const FileUploadBox: React.FC<FileUploadBoxProps> = ({
  onFileChange,
  label,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [allUploaded, setAllUploaded] = useState(false);

  // Simulate upload progress
  useEffect(() => {
    const interval = setInterval(() => {
      setUploadedFiles((files) =>
        files.map((f) =>
          !f.uploaded && f.progress < 100
            ? {
                ...f,
                progress: Math.min(f.progress + 10, 100),
                uploaded: f.progress + 10 >= 100,
              }
            : f,
        ),
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Check if all files are uploaded
  useEffect(() => {
    if (
      uploadedFiles.length > 0 &&
      uploadedFiles.every((f) => f.uploaded) &&
      !allUploaded
    ) {
      setAllUploaded(true);
      // Uncomment if using toast
      // toast.success("Files uploaded successfully");
    }
  }, [uploadedFiles, allUploaded]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const newFiles = files.map((file) => ({
      file,
      progress: 0,
      uploaded: false,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
    onFileChange(files[0] || null);
    setIsDragOver(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const newFiles = files.map((file) => ({
      file,
      progress: 0,
      uploaded: false,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
    onFileChange(files[0] || null);
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`dashed border-2 ${isDragOver ? "border-blue-500" : "border-blue-200"} flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-[#f8f8f8] p-8 text-center transition-colors duration-300 dark:bg-[#2C303B]`}
        onClick={() =>
          document.getElementById(label.replace(/\s+/g, "-"))?.click()
        }
      >
        <div className="p-4">
          <TiUpload />
        </div>
        Upload files
        <input
          id={label.replace(/\s+/g, "-")}
          type="file"
          multiple
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default FileUploadBox;
