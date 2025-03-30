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
    <section id="prototype" className="my-8 text-center" data-oid="ogg69ij">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="4lyd2ja"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid=":1t_3.a"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="p4v52m9"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="30ri9v."
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="s-kt-u9"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          <span
            className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
            data-oid="7.b9n2y"
          >
            Email
            <span className="text-sm text-red-700" data-oid="gp.87ph">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
            data-oid="1t7svl8"
          />

          <div className="mt-8" data-oid="l089-jm">
            <TestDrive handleSubmit={handleSubmit} data-oid="d03iihi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="g:bz9q-" />
      <Landing data-oid="bpymt-8" />
      <section id="prototype" className="my-8 text-center" data-oid="m6c2967">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="f-qayko"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="k88kdp."
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid="f_ofqbd"
            >
              Our Physician Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="g-bq:ic"
              >
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p
              className="text-base text-body-color md:text-lg"
              data-oid="8okhu2x"
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
            data-oid="9qpf298"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="tyyt_ov"
      >
        <div className="container" data-oid="yn-7q3h">
          <h3 data-oid="wj1cbw3">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid="28djt2-"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="yd_10oa"
          >
            <Link href="/news" data-oid="-jrugy5">
              <InfiniteCarousel data-oid="hce.52d">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="xsxhjjj"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="z.:759o"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="w86-wf6"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="7uwzl1i"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="ds:ufle"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="6vbx-gt"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="fu:-79l"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="63r-.nn"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="a_xa1hy"
      >
        <div className="container" data-oid="2k72l_a">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="sbnxaw4"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="lvq1j2f"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="6_ljh2y"
            >
              <div className="mb-6" data-oid="l2zwdyq">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="t:bdfil"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="za487iw"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="7k.d5su"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="l-75jmw"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="p7ag828"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="udlh5ms">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="fvhxlrp"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="wzublul"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="bzopqpz"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid="z-ve39:"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="ywgpzrf"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="ie_d0xz"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="l.u5mou"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="wqp5_h:"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid=".szt2.r"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="fhs0bph"
            >
              <div className="mb-6" data-oid="v_amttp">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="isbn93n"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="z4jd24i"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="ijm3-br"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="pxgtgvx"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="6bot.l8"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="sb2xln5"
            >
              <div className="mb-6" data-oid=":t1m-7.">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="37q-vn9"
                >
                  <div className="relative h-12 w-12" data-oid="ucn0.1u">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="tj3p76d"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="qz-y3ll"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="b:b5_2p"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="7glsrds"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="7g7et3o"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="nz5wrep"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="igh--jv"
          >
            <div className="text-center text-white" data-oid="g9ad:wd">
              <h4 className="mb-2 text-4xl font-bold" data-oid="bfd204a">
                98%
              </h4>
              <p className="text-blue-100" data-oid=".c6g3.q">
                First Pass Resolution Rate
              </p>
            </div>
            <div className="text-center text-white" data-oid="gfoyv4p">
              <h4 className="mb-2 text-4xl font-bold" data-oid=":ygunto">
                3x
              </h4>
              <p className="text-blue-100" data-oid="pfrrtx6">
                Faster Processing Time
              </p>
            </div>
            <div className="text-center text-white" data-oid="skb981o">
              <h4 className="mb-2 text-4xl font-bold" data-oid="h:mcboz">
                $2.1M
              </h4>
              <p className="text-blue-100" data-oid="8xnnys_">
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="zjrl1pe"
      >
        <div className="container" data-oid="ic3rhcv">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="fdm2zm1"
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="6fsp0bl"
            >
              <Orb color="pink" data-oid="gns99h6" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="fk21q61">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="48o:zbz"
                >
                  Denials Management
                </h3>
                <p className="text-left text-body-color" data-oid="4gwrm1f">
                  <span className="text-left font-bold" data-oid="p48gcpz">
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
              data-oid="v5_1ang"
            >
              <Orb color="green" data-oid="z24_s6o" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="am:f74f">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="gzmdzm_"
                >
                  Claims Management
                </h3>
                <p className="text-left text-body-color" data-oid="h7nq:3b">
                  <span className="font-bold" data-oid="qs8eo6n">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="kka.y1n"
            >
              <Orb color="pearl" data-oid="y_me59u" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="1a6b:ch">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="58ei4n_"
                >
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color" data-oid="u.yge1p">
                  <span className="font-bold" data-oid="tfnpr95">
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
              data-oid=".4dm-af"
            >
              <Orb color="orange" data-oid="p32gogr" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="-l1o:s9">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="ggayrgm"
                >
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color" data-oid=":jv:2il">
                  <span className="font-bold" data-oid="7wg7fc8">
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
              data-oid="ls5lqnl"
            >
              <Orb color="gold" data-oid="ark4_rs" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="29m5owb">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="flwc1xc"
                >
                  Payment Posting
                </h3>
                <p className="text-left text-body-color" data-oid="et8wz_z">
                  <span className="font-bold" data-oid="jpwvprp">
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
              data-oid="95.x6n:"
            >
              <Orb color="copper" data-oid="4eh9ofq" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="j6bqssw">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid=":npswe0"
                >
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color" data-oid="j9lqose">
                  <span className="font-bold" data-oid="-xonpwm">
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
      <Pipeline data-oid="74xjv9k" />
      {/* <Testimonials /> */}
    </>
  );
}
