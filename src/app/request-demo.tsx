"use client";

import RequestDemoForm from "@/components/Common/RequestDemoForm";

export default function RequestDemoPage() {
  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Request a Demo</h2>
      <RequestDemoForm />
    </div>
  );
}
