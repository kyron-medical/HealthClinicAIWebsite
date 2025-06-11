"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Landing from "./_components/home/Landing";
import Image from "next/image";
import Orb from "@/app/_components/ui/orb";
import { InfiniteCarousel } from "./news/_components/InfiniteCarousel";
import Link from "next/link";

import SectionTitle from "@/components/Common/SectionTitle";
import { useState } from "react";
import { toast } from "react-hot-toast";
import GetStarted from "./_components/ui/started-button";

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
    <section id="prototype" className="my-8 text-center" data-oid="h1zf6ib">
      <div
        className="flex flex-col items-center justify-center md:flex-row "
        data-oid="o6pm:4a"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="4s_pda7"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="h9o_6:i"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="9xm6wkd"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="soeox5e"
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
          <div className="mt-8" data-oid="ho8d7lu">
            <GetStarted data-oid="7.6xw-p" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="f4iw3:d" />
      <Landing data-oid="2jrrh-i" />
      <section id="prototype" className="my-8 text-center" data-oid="ab_px3k">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="wxl98lz"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="fqrmweb"
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid="5fsc4ge"
            >
              Our Admin Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="aku5sku"
              >
                Full Control
              </span>{" "}
              Over Your Claim Denials
            </h2>
            <p
              className="text-justify text-base text-body-color md:text-lg"
              data-oid="r9fpgyn"
            >
              Our admin dashboard is designed to give you full control over
              letters of appeal, phone calls to insurance, and denial
              management. You can easily automate every repetitive task you do
              not want to do.
            </p>
          </div>
          <Image
            src="/images/frontend-prototype.png"
            alt="Front-End Prototype"
            className="mx-auto w-full transform self-center rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
            width={500}
            height={400}
            data-oid="4w3-eyf"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="y7r1al."
      >
        <div className="container" data-oid="2_5l54e">
          <h3 data-oid="o9_hae6">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid=":om2rtd"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="0u1vx75"
          >
            <Link href="/news" data-oid="nx8n7gm">
              <InfiniteCarousel data-oid="9g:bop1">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="m18jiml"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="mjhd9tl"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="_jja5f:"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="a5d6mt2"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="912ccui"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="shk3xjc"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="arjmf2_"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid=".yq7h7b"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="duwv.nb"
      >
        <div className="container" data-oid="9n0v8fa">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid=":zfq1ks"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="2kho90h"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="4g95sf5"
            >
              <div className="mb-6" data-oid="_e6h44-">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="45p16q8"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="4r_w2c1"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="uzj8r7x"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="1ikxk:c"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="2a99d5x"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="7fj6y0f">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="37rvz_w"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="n-5s:qs"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="csn7x7."
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid="v_u:jg3"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="_4wiqc6"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="ezqwo:5"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="z:w_gkr"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="bf81kw8"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="h3g1mox"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="n12jyer"
            >
              <div className="mb-6" data-oid=":67fs3s">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="sc0oiww"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="._b0iy8"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="t6e2e-s"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="7_dwgq3"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="lv_.-ud"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="taw3qh1"
            >
              <div className="mb-6" data-oid="jo746u_">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="ae9bb-0"
                >
                  <div className="relative h-12 w-12" data-oid="kaehj._">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="9ypm._7"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="6pnap.t"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="o6o6.68"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="d8jugj2"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="g29idi9"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="qx1.dj6"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="phnamt8"
          >
            <div className="text-center text-white" data-oid="vvwy506">
              <h4 className="mb-2 text-4xl font-bold" data-oid="43apa24">
                &lt; 10s
              </h4>
              <p className="text-blue-100" data-oid=":jdsyzq">
                Time for Appeal Drafting
              </p>
            </div>
            <div className="text-center text-white" data-oid="u2ohojr">
              <h4 className="mb-2 text-4xl font-bold" data-oid="1tu9c17">
                &gt; 99%
              </h4>
              <p className="text-blue-100" data-oid="72g_dsf">
                Possible Appeals Submitted
              </p>
            </div>
            <div className="text-center text-white" data-oid="9t2rnc5">
              <h4 className="mb-2 text-4xl font-bold" data-oid="91axe_0">
                &gt; 100 hours
              </h4>
              <p className="text-blue-100" data-oid="fs5fwd_">
                Call Time Saved per Biller per Year
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="p83bzt8"
      >
        <div className="container" data-oid="y3md6up">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="4g5vrp:"
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid=".g5dy_c"
            >
              <Orb color="pink" data-oid="9ufqth2" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="wi7qy5q">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="qks_sb."
                >
                  Denials Management
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="g2x1n6a"
                >
                  <span className="text-left font-bold" data-oid="y62r3al">
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
              data-oid="oc6scn3"
            >
              <Orb color="green" data-oid="p749uil" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="7-v0u_9">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="o.24:1."
                >
                  Voice AI Agent
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="lexodu1"
                >
                  <span className="font-bold" data-oid="_5cd_16">
                    Capture every word, every nuance.
                  </span>{" "}
                  Our Voice AI Agent transcribes real-time conversations into
                  precise, actionable documentation—so your team can focus on
                  patient care without missing a beat.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="_2rht0r"
            >
              <Orb color="pearl" data-oid="g3tnrqt" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="gpg:3un">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="d4u:hjy"
                >
                  Prior Authorization
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="vzvmxkh"
                >
                  <span className="font-bold" data-oid="rgharjx">
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
              data-oid="m919.1j"
            >
              <Orb color="orange" data-oid="5gb2k0y" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="2r_20rc">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="z1r:qum"
                >
                  Appeal Letter Generation
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="lf4gc3b"
                >
                  <span className="font-bold" data-oid="4ppxg_h">
                    Transform denials into approvals with persuasive, automated
                    appeal letters.
                  </span>{" "}
                  Our AI drafts articulate, compliant appeals that streamline
                  your resubmission process, protecting revenue and reducing
                  administrative hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pipeline data-oid="o8wgevr" />
      {/* <Testimonials /> */}
    </>
  );
}
