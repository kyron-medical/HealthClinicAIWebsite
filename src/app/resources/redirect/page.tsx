"use client";

import { Suspense } from "react";
import EmailCollectionForm from "@/components/EmailCollectionForm";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function RedirectPageInner() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Redirect after email submission
  if (emailSubmitted && url) {
    window.location.href = url;
    return (
      <div className="py-20 text-center" data-oid=":1f7h_x">
        Redirecting you now...
      </div>
    );
  }

  // If no URL provided, show error
  if (!url) {
    return (
      <div className="container py-20 text-center" data-oid="5vm4-j.">
        <h1 className="mb-4 text-2xl font-bold" data-oid="v-oug_s">
          Invalid Resource Link
        </h1>
        <p data-oid="t98tudm">No destination URL was provided.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-md py-20" data-oid="337ni-w">
      <div
        className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
        data-oid="36astbl"
      >
        <h1 className="mb-6 text-2xl font-bold" data-oid="3u:vs_z">
          Access This Resource
        </h1>
        <p className="mb-6" data-oid="6wibhm4">
          Please provide your email to access this exclusive resource.
        </p>

        <EmailCollectionForm
          onSuccess={() => setEmailSubmitted(true)}
          onClose={() => (window.location.href = url)} // Skip if user cancels
          redirectUrl={url}
          data-oid=":4go9:k"
        />

        <button
          onClick={() => (window.location.href = url)}
          className="mt-4 w-full text-center text-sm text-gray-500 hover:underline"
          data-oid="n.3xz_1"
        >
          Skip and continue to resource
        </button>
      </div>
    </div>
  );
}

export default function RedirectPage() {
  return (
    <Suspense data-oid=":kpi.nt">
      <RedirectPageInner data-oid="q1cz_hx" />
    </Suspense>
  );
}
