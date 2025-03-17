"use client";

import { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import FileUploadBox from "./FileUpload";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import { useUser } from "@clerk/nextjs";

const DemoForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const [patientNotesFile, setPatientNotesFile] = useState<File | null>(null);
  const [insuranceDenialFile, setInsuranceDenialFile] = useState<File | null>(
    null,
  );

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

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    event.preventDefault();

    if (!patientNotesFile || !insuranceDenialFile) {
      alert("Please upload both Patient Note(s) and Insurance Denial files.");
      return;
    }

    const formData = new FormData();
    formData.append("files", patientNotesFile);
    formData.append("files", insuranceDenialFile);
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
    // Use toast.promise to handle notifications
    toast.promise(
      fetchPromise,
      {
        pending: "Generating your appeal letter...",
        success: "Appeal letter generated successfully!",
        error: "Failed to generate appeal letter.",
      },
      {
        style: {
          minWidth: "250px",
        },
      },
    );
  };

  return (
    <>
      <div className="container" data-oid="y3c:fe7">
        <SignedOut data-oid="f1ps1wa">
          <h2
            className="text-center text-3xl font-bold text-dark dark:text-white"
            data-oid="vn1fmeo"
          >
            Sign in to generate your letter of appeal
          </h2>
          <SignInButton data-oid="6m_ohc4" />
        </SignedOut>

        <SignedIn data-oid="p6bx4wg">
          <div
            className="mx-4 mt-32 flex flex-col flex-wrap items-center justify-center gap-8 align-middle"
            data-oid="vr9doft"
          >
            <div className="flex flex-row gap-8" data-oid="nvg_eb2">
              <FileUploadBox
                label="Patient Note(s)"
                onFileChange={(file) => setPatientNotesFile(file)}
                data-oid="kklfxvc"
              />

              <FileUploadBox
                label="Insurance Denial"
                onFileChange={(file) => setInsuranceDenialFile(file)}
                data-oid="ozqq3rl"
              />
            </div>

            <button
              type="button"
              className={`rounded-sm px-9 py-4 text-base font-medium shadow-submit duration-300 ${
                patientNotesFile && insuranceDenialFile
                  ? "bg-primary text-white hover:bg-primary/90 dark:shadow-submit-dark"
                  : "cursor-not-allowed bg-gray-300 text-gray-700"
              }`}
              onClick={handleSubmit}
              disabled={!patientNotesFile || !insuranceDenialFile}
              data-oid="t1:62j4"
            >
              Generate Letter of Appeal
            </button>

            {isTextareaFilled && (
              <div className="w-full px-4 md:w-1/2" data-oid="xq-x9n_">
                <div className="mb-8" data-oid="vb9vist">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    data-oid="i57k5yk"
                  >
                    Recipient&apos;s Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter recipient's email"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-oid="fm28g-5"
                  />
                </div>
                <div className="mb-8" data-oid="hjc1fb7">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    data-oid=".vhto-5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    data-oid="dg0xp3z"
                  />
                </div>
                {/* Updated Textarea Container */}
                <div className="w-full max-w-3xl" data-oid=".pbxcln">
                  {" "}
                  {/* Increased max-width */}
                  {/* Letter of appeal from fetch request */}
                  <textarea
                    className="border-stroke h-96 w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={appealLetter}
                    readOnly
                    rows={15} // Increased number of visible text lines
                    data-oid="._610yw"
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
                  data-oid="l_r1e.u"
                >
                  Send Email
                </button>
              </div>
            )}
          </div>
        </SignedIn>
      </div>
    </>
  );
};

export default DemoForm;
