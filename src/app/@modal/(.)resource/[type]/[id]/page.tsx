"use client";

import { Modal } from "./Modal";
import FullPageImageView from "@/app/resources/_components/full-image-page";
import { useState, useEffect } from "react";
import EmailCollectionForm from "@/components/EmailCollectionForm";


export default function ResourceModal({
  params: { type, id },
}: {
  params: { type: string; id: string };
}) {
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    // Show email collection modal after 5 seconds
    const timer = setTimeout(() => {
      setShowEmailModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal>
        <FullPageImageView resourceId={id} resourceType={type} />
      </Modal>
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold">
              Get More Resources Like This
            </h2>
            <p className="mb-4">
              Enter your email to receive updates and similar resources.
            </p>

            <EmailCollectionForm onClose={() => setShowEmailModal(false)} />

            <button
              onClick={() => setShowEmailModal(false)}
              className="mt-4 text-sm text-gray-500 hover:underline"
            >
              No thanks, continue browsing
            </button>
          </div>
        </div>
      )}
    </>
  );
}
