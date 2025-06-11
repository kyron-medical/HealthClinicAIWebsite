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
      <div className="py-20 text-center" data-oid="rq3vvpv">
        Redirecting you now...
      </div>
    );
  }

  // If no URL provided, show error
  if (!url) {
    return (
      <div className="container py-20 text-center" data-oid="_nfie97">
        <h1 className="mb-4 text-2xl font-bold" data-oid="k:n2yl2">
          Invalid Resource Link
        </h1>
        <p data-oid="siqgyos">No destination URL was provided.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-md py-20" data-oid="kjexqkx">
      <div
        className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
        data-oid="utyehcr"
      >
        <h1 className="mb-6 text-2xl font-bold" data-oid="4ha2mg8">
          Access This Resource
        </h1>
        <p className="mb-6" data-oid="9yle_21">
          Please provide your email to access this exclusive resource.
        </p>

        <EmailCollectionForm
          onSuccess={() => setEmailSubmitted(true)}
          onClose={() => (window.location.href = url)} // Skip if user cancels
          redirectUrl={url}
          data-oid="y3n4e5d"
        />

        <button
          onClick={() => (window.location.href = url)}
          className="mt-4 w-full text-center text-sm text-gray-500 hover:underline"
          data-oid="dyrham1"
        >
          Skip and continue to resource
        </button>
      </div>
    </div>
  );
}

export default function RedirectPage() {
  return (
    <Suspense data-oid="3r-_5cm">
      <RedirectPageInner data-oid="llx93oq" />
    </Suspense>
  );
}
