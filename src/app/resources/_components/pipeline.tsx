"use client";

import GetStarted from "@/app/_components/ui/started-button";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

const Pipeline = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    window.location.href = `https://form.typeform.com/to/zstMkPH7?email=${email}`;

    toast.success("Email submitted successfully!");
    setEmail("");
    setSubmitted(true);
  };

  return (
    <section id="prototype" className="my-8 text-center" data-oid="s9_gefx">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="_5r047h"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="5zjxhci"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="ij42:za"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="l2vz079"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="62s0nuy"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          {/* <span
                    className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
                    data-oid="qmsxjpk"
                   >
                    Email
                    <span className="text-sm text-red-700" data-oid="sgxgpxc">
                      *
                    </span>
                   </span> */}
          {/* <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
                    data-oid="i9_px7q"
                   />
                    <div className="mt-8" data-oid="r.m--hx">
                    <TestDrive handleSubmit={handleSubmit} data-oid="l6..mpm" />
                   </div> */}
          <div className="mt-8" data-oid="_bmxap5">
            <GetStarted data-oid="tcnjetd" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
