// src/components/Demo/index.tsx
"use client";

import React, { useEffect, useState } from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import FileUploadBox from "../../app/demo/_components/FileUpload";
import { toast } from "react-hot-toast";

const Demo = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const [appealLetter, setAppealLetter] = useState<string>("");
  // New state to check if textarea is filled
  const [isTextareaFilled, setIsTextareaFilled] = useState<boolean>(false);
  const [isEmailFilled, setIsEmailFilled] = useState<boolean>(false);
  const [isSubjectFilled, setIsSubjectFilled] = useState<boolean>(false);

  useEffect(() => {
    if (appealLetter.trim().length > 0) {
      setIsTextareaFilled(true);
    } else {
      setIsTextareaFilled(false);
    }
  }, [appealLetter]);

  useEffect(() => {
    setIsEmailFilled(email.trim() !== "");
  }, [email]);

  useEffect(() => {
    setIsSubjectFilled(subject.trim() !== "");
  }, [subject]);

  const handlePatientNotesChange = (file: File | null) => {
    setPatientNotesFile(file); // Update the state for patient notes file
  };
  
  const handleInsuranceDenialChange = (file: File | null) => {
    setInsuranceDenialFile(file); // Update the state for insurance denial file
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    event.preventDefault();

    if (files.length === 0) {
      alert("Please fill in all fields and upload at least one file.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    console.log(formData);

    // Define the fetch promise
    const fetchPromise = fetch("https://api.kyronmedical.com/generate-appeal", {
      method: "POST",
      body: formData,
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        const appealLetter = data.appeal_letter; // Extract the appeal_letter field

        // Update the state to display the appeal letter
        setAppealLetter(appealLetter);

        // Create a blob from the appeal letter text for download
        const blob = new Blob([appealLetter], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "appeal_letter.txt";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); // Clean up the URL object
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate appeal.");
      }
    });

    // Use toast.promise to handle notifications
    toast.promise(
      fetchPromise,
      {
        loading: "Generating your appeal letter...",
        success: "Appeal letter generated successfully!",
        error: (err) => `Error: ${err.message}`,
      },
      {
        style: {
          minWidth: "250px",
        },
      },
    );
  };

  const handleEmailSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    console.log(formData);

    // Define the fetch promise
    const fetchPromise = fetch("https://api.kyronmedical.com/generate-appeal", {
      method: "POST",
      body: formData,
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email.");
      }
    });

    // Use toast.promise to handle notifications
    toast.promise(
      fetchPromise,
      {
        loading: "Generating your appeal letter...",
        success: "Appeal letter generated successfully!",
        error: (err) => `Error: ${err.message}`,
      },
      {
        style: {
          minWidth: "250px",
        },
      },
    );
  };

  return (
    <section id="demo" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SignedOut>
          <h2 className="text-center text-3xl font-bold text-dark dark:text-white">
            Sign in to generate your letter of appeal
          </h2>
          <SignInButton />
        </SignedOut>
        
        <SignedIn>

            
          <div className="mx-4 mt-32 flex flex-col flex-wrap items-center justify-center gap-8 align-middle">
            <div className="flex flex-row gap-8">
              <FileUploadBox
                label="Patient Note(s)"
                onFileChange={handlePatientNotesChange} // For patient notes
              />
              <FileUploadBox
                label="Insurance Denial"
                onFileChange={handleInsuranceDenialChange} // For insurance denial
              />
            </div>

            <button
              type="button"
              className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
              onClick={handleSubmit}
            >
              Generate Letter of Appeal
            </button>

            {isTextareaFilled && (
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Recipient&apos;s Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter recipient's email"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                {/* Updated Textarea Container */}
                <div className="w-full max-w-3xl">
                  {" "}
                  {/* Increased max-width */}
                  {/* Letter of appeal from fetch request */}
                  <textarea
                    className="border-stroke h-96 w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={appealLetter}
                    readOnly
                    rows={15} // Increased number of visible text lines
                  ></textarea>
                </div>

                <button
                  type="button"
                  className={`rounded-sm px-9 py-4 text-base font-medium shadow-submit duration-300 ${
                    isEmailFilled && isSubjectFilled
                      ? "bg-primary text-white hover:bg-primary/90 dark:shadow-submit-dark"
                      : "cursor-not-allowed bg-gray-300 text-gray-700"
                  }`}
                  onClick={handleSubmit}
                  disabled={!isEmailFilled || !isSubjectFilled}
                >
                  Send Email
                </button>
              </div>
            )}
          </div>
        </SignedIn>
      </div>
    </section>
  );
};

export default Demo;
