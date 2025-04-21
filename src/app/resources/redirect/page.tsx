"use client";

import EmailCollectionForm  from "@/components/EmailCollectionForm";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  // Redirect after email submission
  if (emailSubmitted && url) {
    window.location.href = url;
    return <div className="text-center py-20">Redirecting you now...</div>;
  }
  
  // If no URL provided, show error
  if (!url) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Invalid Resource Link</h1>
        <p>No destination URL was provided.</p>
      </div>
    );
  }
  
  return (
    <div className="container py-20 max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Access This Resource</h1>
        <p className="mb-6">
          Please provide your email to access this exclusive resource.
        </p>
        
        <EmailCollectionForm 
          onSuccess={() => setEmailSubmitted(true)}
          onClose={() => window.location.href = url} // Skip if user cancels
          redirectUrl={url}
        />
        
        <button 
          onClick={() => window.location.href = url} 
          className="w-full text-center mt-4 text-sm text-gray-500 hover:underline"
        >
          Skip and continue to resource
        </button>
      </div>
    </div>
  );
}