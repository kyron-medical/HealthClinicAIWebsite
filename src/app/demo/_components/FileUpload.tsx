// src/components/Demo/FileUpload.tsx
"use client";

import { useState } from "react";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications

interface FileUploadBoxProps {
  onFileChange: (files: File[]) => void;
}

const FileUploadBox: React.FC<FileUploadBoxProps> = ({ onFileChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    onFileChange(droppedFiles);
    // Trigger success toast
    toast.success("Files selected successfully!");
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
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
    onFileChange(selectedFiles);
    // Trigger success toast
    toast.success("Files selected successfully!");
  };

  return (
    <div className="w-full max-w-3xl">
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
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        Drag and drop files here or click to select files
        <input
          id="fileInput"
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