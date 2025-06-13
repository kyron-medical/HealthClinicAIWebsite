"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import EmailCollectionForm from "@/components/EmailCollectionForm";

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceUrl: string;
  resourceTitle?: string;
}

export default function ResourceModal({
  isOpen,
  onClose,
  resourceUrl,
  resourceTitle = "Exclusive Resource",
}: ResourceModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add event to close on escape key
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

  const handleEmailSuccess = () => {
    // Redirect to the resource
    window.location.href = resourceUrl;
  };

  if (!mounted || !isOpen) return null;

  // Find the modal root element
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot || !(modalRoot instanceof Element)) return null;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="mb-4 text-2xl font-bold">
          Access &ldquo;{resourceTitle}&rdquo;
        </h2>
        <p className="mb-6">
          Please provide your email to access this exclusive resource.
        </p>

        <EmailCollectionForm
          onSuccess={handleEmailSuccess}
          onClose={onClose}
          redirectUrl={resourceUrl}
        />

        {/* <button 
                       onClick={() => window.location.href = resourceUrl}
                       className="mt-4 w-full text-center text-sm text-gray-500 hover:underline"
                      >
                       Skip and continue to resource
                      </button> */}
      </div>
    </div>,
    modalRoot,
  );
}
