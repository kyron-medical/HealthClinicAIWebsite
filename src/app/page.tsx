"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Landing from "./_components/home/Landing";
import Testimonials from "./_components/home/Testimonials";
import Image from "next/image";
import Orb from "@/app/_components/ui/orb";
import { InfiniteCarousel } from "./news/_components/InfiniteCarousel";
import { CarouselPlugin } from "@/app/_components/ui/carousel";
import Link from "next/link";
import TestDrive from "./_components/ui/drive-button";
import SectionTitle from "@/components/Common/SectionTitle";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
    <section id="prototype" className="my-8 text-center">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
        />

        <div className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            Access an Interactive Demo of Kyron
          </h2>
          <p className="text-base text-body-color md:text-lg">
            Experience Kyron's tailored solutions with our interactive demo.
          </p>

          <span className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color">
            Email
            <span className="text-sm text-red-700">*</span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
          />

          <div className="mt-8">
            <TestDrive handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Landing />
      <section id="prototype" className="my-8 text-center">
        <div className="flex flex-col items-center justify-center md:flex-row ">
          <div className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Our Physician Dashboard Gives You{" "}
              <span className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent">
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p className="text-base text-body-color md:text-lg">
              Our physician dashboard is designed to give you full control over
              your billing, scheduling, and patient records. You can easily
              automate every repetitive task you do not want to do.
            </p>
          </div>
          <Image
            src="/images/frontend-prototype.png"
            alt="Front-End Prototype"
            className="mx-auto w-full transform self-center rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
            width={500}
            height={400}
          />
        </div>
      </section>

      <section className="py-8 text-center md:py-16 md:py-20 lg:py-28">
        <div className="container">
          <h3>
            <span className="text-xl text-slate-700 md:text-2xl">
              As featured in...
            </span>
          </h3>

          <div className="mt-12 flex flex-wrap justify-center md:mt-24 ">
            <Link href="/news">
              <InfiniteCarousel>
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 text-center md:py-16 md:py-20 lg:py-4">
        <div className="container">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* World Class Team */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-6">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                World Class Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A white glove service team dedicated to your success
              </p>
              <div className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"></div>
            </div>

            {/* Seamless Integration */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-6 grid grid-cols-3 gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30">
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30">
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30">
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Seamless Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"></div>
            </div>

            {/* ROI Obsessed */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-6">
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                  <div className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                ROI Obsessed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"></div>
            </div>

            {/* Vendor Consolidation */}
            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center">
                  <div className="relative h-12 w-12">
                    <div className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"></div>
                    <div className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"></div>
                    <div className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"></div>
                  </div>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Vendor Consolidation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3">
            <div className="text-center text-white">
              <h4 className="mb-2 text-4xl font-bold">98%</h4>
              <p className="text-blue-100">First Pass Resolution Rate</p>
            </div>
            <div className="text-center text-white">
              <h4 className="mb-2 text-4xl font-bold">3x</h4>
              <p className="text-blue-100">Faster Processing Time</p>
            </div>
            <div className="text-center text-white">
              <h4 className="mb-2 text-4xl font-bold">$2.1M</h4>
              <p className="text-blue-100">Average Annual Savings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4">
        <div className="container">
          <div className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24">
            <div className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row">
              <Orb color="pink" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0">
                <h3 className="text-lg font-semibold md:text-xl">
                  Denials Management
                </h3>
                <p className="text-left text-body-color">
                  <span className="text-left font-bold">
                    Turn denials into approvals.
                  </span>{" "}
                  Proactively identify, analyze, and resolve claim denials with
                  intelligent automation, reducing revenue loss and
                  administrative burden.
                </p>
              </div>
            </div>
            <div className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row">
              <Orb color="green" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0">
                <h3 className="text-lg font-semibold md:text-xl">
                  Claims Management
                </h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row">
              <Orb color="pearl" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0">
                <h3 className="text-lg font-semibold md:text-xl">
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Instant approvals, fewer delays.
                  </span>{" "}
                  AI streamlines prior authorizations by automating
                  documentation, reducing provider workload, and expediting
                  patient care.
                </p>
              </div>
            </div>
            <div className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row ">
              <Orb color="orange" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0">
                <h3 className="text-lg font-semibold md:text-xl">
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Verify in seconds, reduce rejections.
                  </span>{" "}
                  AI-driven eligibility checks instantly confirm patient
                  coverage, preventing claim denials and improving front-end
                  efficiency.
                </p>
              </div>
            </div>
            <div className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row">
              <Orb color="gold" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0">
                <h3 className="text-lg font-semibold md:text-xl">
                  Payment Posting
                </h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Experience flawless financial reconciliation
                  </span>{" "}
                  Our system automates payment posting with unparalleled
                  accuracy. It seamlessly matches remittance data to patient
                  accounts, minimizes human error, and speeds up cash flow.
                </p>
              </div>
            </div>
            <div className=" flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row">
              <Orb color="copper" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0">
                <h3 className="text-lg font-semibold md:text-xl">
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Transform your medical records with precision.
                  </span>{" "}
                  Our AI-powered tool analyzes and refines coding notes,
                  ensuring consistency and compliance, reducing claim denials,
                  and letting healthcare professionals focus on patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pipeline />
      {/* <Testimonials /> */}
    </>
  );
}
