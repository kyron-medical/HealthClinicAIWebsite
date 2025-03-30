"use client";

import { useState } from "react";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div
      className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8"
      data-oid="r9hzeu_"
    >
      <div className="mx-auto max-w-3xl text-center" data-oid="wg_tdjw">
        <h3 className="mb-4 text-2xl font-bold text-white" data-oid="l8fgr7v">
          Subscribe to our newsletter
        </h3>
        <p className="mb-6 text-blue-100" data-oid="2k6f72e">
          Get the latest healthcare technology insights delivered to your inbox
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          data-oid="i4q:ysc"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-0 bg-white/90 px-4 py-3 text-gray-800 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 sm:max-w-md"
            required
            data-oid="iii2fs1"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50 sm:w-auto"
            data-oid="7e1bp:b"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
