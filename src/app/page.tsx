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
    <section id="prototype" className="my-8 text-center" data-oid="g8qz6ui">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="-d10t.t"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="7ghyzad"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="c74apyj"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="lic8.dg"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="cnhz:4f"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          <span
            className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
            data-oid="_nd6srf"
          >
            Email
            <span className="text-sm text-red-700" data-oid="v3_jqqd">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
            data-oid="byvd.uk"
          />

          <div className="mt-8" data-oid="6:ylqjr">
            <TestDrive handleSubmit={handleSubmit} data-oid="blghggb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="qzix:6c" />
      <Landing data-oid="gqk21ct" />
      <section id="prototype" className="my-8 text-center" data-oid="q7cx.84">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="pj:1p:5"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="2bpzh9z"
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid="2ysf3kp"
            >
              Our Physician Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="fanzk8s"
              >
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p
              className="text-base text-body-color md:text-lg"
              data-oid="pxz6fjm"
            >
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
            data-oid="s_kznfl"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="dxdx6_:"
      >
        <div className="container" data-oid="r5n8nsh">
          <h3 data-oid="ikvq6ok">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid="fxo33pf"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="u:sdpi-"
          >
            <Link href="/news" data-oid="ypq549n">
              <InfiniteCarousel data-oid="tl5p-4r">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="4uzt2zp"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="_pzb7gq"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="av3p11v"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="hf3mt79"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="879t-hd"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="7s0bloi"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="mnhymor"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="owz6ock"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid=".57_pn8"
      >
        <div className="container" data-oid="b_.njh_">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="6akuz55"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid=":vbz:hw"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="4ev2yj0"
            >
              <div className="mb-6" data-oid="ocpx0l5">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="oyxh_9g"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="orvo6lo"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="9npkwil"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="i8ywm11"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="ycm2bu2"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="rg..0qa">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="2zo6tum"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="fcq4il7"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="uynuml8"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid="4yj:jp1"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="59yt-we"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="5.uar.b"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="en6-6x4"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="pmot6fe"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="ygnhowz"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="uo.jspd"
            >
              <div className="mb-6" data-oid="sj4ik58">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="k2cx5bp"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="58o7gy6"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="f423__g"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="v29qa.p"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="t4ix3.p"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="-5z11q-"
            >
              <div className="mb-6" data-oid="6tbst7z">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="4grydj4"
                >
                  <div className="relative h-12 w-12" data-oid="11j86_h">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="osp0hfe"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="h.q2xtl"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="2gv2ims"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="vxlbf:j"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="kyefvum"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="lnic:cp"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid=":-u.24d"
          >
            <div className="text-center text-white" data-oid="npi.czq">
              <h4 className="mb-2 text-4xl font-bold" data-oid="6elxu17">
                98%
              </h4>
              <p className="text-blue-100" data-oid=":rf3833">
                First Pass Resolution Rate
              </p>
            </div>
            <div className="text-center text-white" data-oid="tg2x.wg">
              <h4 className="mb-2 text-4xl font-bold" data-oid="ky3pvby">
                3x
              </h4>
              <p className="text-blue-100" data-oid="80lunzn">
                Faster Processing Time
              </p>
            </div>
            <div className="text-center text-white" data-oid="8x_xhfn">
              <h4 className="mb-2 text-4xl font-bold" data-oid="r5s48v5">
                $2.1M
              </h4>
              <p className="text-blue-100" data-oid="lqry-np">
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="3jkye7k"
      >
        <div className="container" data-oid="dgawhpt">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="zctsqb."
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="2_bu2mv"
            >
              <Orb color="pink" data-oid="8z.:mpg" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="uyi8plh">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="gwpd2if"
                >
                  Denials Management
                </h3>
                <p className="text-left text-body-color" data-oid="j_0gyzl">
                  <span className="text-left font-bold" data-oid="d_bggqz">
                    Turn denials into approvals.
                  </span>{" "}
                  Proactively identify, analyze, and resolve claim denials with
                  intelligent automation, reducing revenue loss and
                  administrative burden.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="_j:o:7s"
            >
              <Orb color="green" data-oid="ntczc0m" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="zr91xxz">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="jkg4v8j"
                >
                  Claims Management
                </h3>
                <p className="text-left text-body-color" data-oid="_ilo1hh">
                  <span className="font-bold" data-oid="_4z0cn1">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="1jsjg3_"
            >
              <Orb color="pearl" data-oid="x.h-4d0" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="qba.30i">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="m4lc3jf"
                >
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color" data-oid="ltm674g">
                  <span className="font-bold" data-oid="kbgghf-">
                    Instant approvals, fewer delays.
                  </span>{" "}
                  AI streamlines prior authorizations by automating
                  documentation, reducing provider workload, and expediting
                  patient care.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row "
              data-oid="hdnds3h"
            >
              <Orb color="orange" data-oid="f2axhqa" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="2ptx_k0">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="fvtoe0a"
                >
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color" data-oid=".3fl8qr">
                  <span className="font-bold" data-oid="a.z4tef">
                    Verify in seconds, reduce rejections.
                  </span>{" "}
                  AI-driven eligibility checks instantly confirm patient
                  coverage, preventing claim denials and improving front-end
                  efficiency.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="o7n736e"
            >
              <Orb color="gold" data-oid="l1.ok8k" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="0vcrk46">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="saz5p7b"
                >
                  Payment Posting
                </h3>
                <p className="text-left text-body-color" data-oid="ftw04__">
                  <span className="font-bold" data-oid="d:v2chz">
                    Experience flawless financial reconciliation
                  </span>{" "}
                  Our system automates payment posting with unparalleled
                  accuracy. It seamlessly matches remittance data to patient
                  accounts, minimizes human error, and speeds up cash flow.
                </p>
              </div>
            </div>
            <div
              className=" flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="9:rqw60"
            >
              <Orb color="copper" data-oid="a.6waj9" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="gmcq0gq">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="h2j7-ts"
                >
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color" data-oid="vxr88r6">
                  <span className="font-bold" data-oid=":-ner33">
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
      <Pipeline data-oid="xwlx8iv" />
      {/* <Testimonials /> */}
    </>
  );
}
