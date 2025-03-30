// src/components/Demo/FileUpload.tsx
"use client";

import React, { useState } from "react";

interface FileUploadBoxProps {
  onFileChange: (file: File | null) => void;
  label: string;
}

const FileUploadBox: React.FC<FileUploadBoxProps> = ({
  onFileChange,
  label,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
    onFileChange(file);
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
    const file = event.target.files ? event.target.files[0] : null;
    setUploadedFile(file);
    onFileChange(file);
  };

  return (
    <div
      className="w-full max-w-md flex flex-col items-center"
      data-oid="c66ssvx"
    >
      <label
        className="mb-2 block text-sm font-medium text-dark dark:text-white"
        data-oid="ji.gn4k"
      >
        {label}
      </label>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          dashed border-2 ${isDragOver ? "border-blue-500" : "border-blue-200"}
          flex
          h-48
          w-full
          cursor-pointer
          flex-col items-center
          justify-center rounded-lg bg-[#f8f8f8] p-8 text-center transition-colors
          duration-300 dark:bg-[#2C303B]
        `}
        onClick={() =>
          document.getElementById(label.replace(/\s+/g, "-"))?.click()
        }
        data-oid="rtnzv8p"
      >
        Drag and drop a file here or click to select a file
        <input
          id={label.replace(/\s+/g, "-")}
          type="file"
          onChange={handleFileSelect}
          style={{ display: "none" }}
          data-oid="msd_mt3"
        />
      </div>
      {uploadedFile && (
        <p className="mt-2 text-sm text-body-color" data-oid="xbgph7f">
          Uploaded: {uploadedFile.name}
        </p>
      )}
    </div>
  );
};

export default FileUploadBox;
