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
    <section id="prototype" className="my-8 text-center" data-oid="0-3p0r_">
      <div
        className="flex flex-col items-center justify-center md:flex-row "
        data-oid="goa__b0"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="x5qpfti"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="5y.ouqp"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="gmi8gep"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="7lf6g4f"
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
          <div className="mt-8" data-oid="6z_2nnr">
            <GetStarted data-oid="g0s0k-l" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="vbl9hm." />
      <Landing data-oid="wzurgp8" />
      <section id="prototype" className="my-8 text-center" data-oid="x88wxhe">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="lhdxiz:"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="ln14aoe"
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid="0kyahc9"
            >
              Our Admin Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="cou1tl8"
              >
                Full Control
              </span>{" "}
              Over Your Claim Denials
            </h2>
            <p
              className="text-justify text-base text-body-color md:text-lg"
              data-oid="4kftzwc"
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
            data-oid="-ksiwxj"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="exn22m1"
      >
        <div className="container" data-oid="vqiqxqx">
          <h3 data-oid="9q1:ybt">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid="8aslr4_"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="80083t_"
          >
            <Link href="/news" data-oid="1wgc3dp">
              <InfiniteCarousel data-oid="6ms.xvg">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="21j2xgy"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="xjzz_8p"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="zk:j_71"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="3y9h32."
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid=":d5s7sa"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="pw8qu4-"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="2_-ci92"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="0noqu_v"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="9o2enre"
      >
        <div className="container" data-oid="o28.63c">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="5kmu65c"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="cvmenn3"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="s_wmc0s"
            >
              <div className="mb-6" data-oid="_3lgtpj">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="oq.eqpe"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="0u4k:7:"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="hbs4nn_"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="5ct7..5"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="n00rddu"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="qmgwpbm">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="g9vn749"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="lzif6u8"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="z25:rb4"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid="vt3ix4a"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="v7k3suc"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="t84um5x"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="p_kb527"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="x3:6:n0"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid=":dypah_"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="5.v-k6k"
            >
              <div className="mb-6" data-oid="wt2jus9">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="gakbcok"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="gpjmrf1"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="fjd3-wr"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="n2r1w8w"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="9x1rg2-"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="ygmp6j_"
            >
              <div className="mb-6" data-oid="7jjano0">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="ou937yv"
                >
                  <div className="relative h-12 w-12" data-oid="1cdiupo">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="y0bx76k"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="23u3dbj"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="97hf:bh"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="qeka6qn"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="-fl-0bo"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="cjlw8qs"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="kwzkxwx"
          >
            <div className="text-center text-white" data-oid="l_o9_pg">
              <h4 className="mb-2 text-4xl font-bold" data-oid="diwdco4">
                &lt; 10s
              </h4>
              <p className="text-blue-100" data-oid="l446.1s">
                Time for Appeal Drafting
              </p>
            </div>
            <div className="text-center text-white" data-oid="jfbfjov">
              <h4 className="mb-2 text-4xl font-bold" data-oid="huo0pim">
                &gt; 99%
              </h4>
              <p className="text-blue-100" data-oid="fnmsdft">
                Possible Appeals Submitted
              </p>
            </div>
            <div className="text-center text-white" data-oid="6z.m35p">
              <h4 className="mb-2 text-4xl font-bold" data-oid="uz20gyk">
                &gt; 100 hours
              </h4>
              <p className="text-blue-100" data-oid="4ltq7an">
                Call Time Saved per Biller per Year
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="j44999z"
      >
        <div className="container" data-oid="qzdhr72">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid=":qzxc.5"
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="3k_kvzt"
            >
              <Orb color="pink" data-oid="9h-hs7n" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="moye3db">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="mgtxn8l"
                >
                  Denials Management
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="jdchybp"
                >
                  <span className="text-left font-bold" data-oid="ksl50qp">
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
              data-oid="9k05j8c"
            >
              <Orb color="green" data-oid="xmogl10" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="h871c1k">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="7q23:2-"
                >
                  Voice AI Agent
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="7u67bh_"
                >
                  <span className="font-bold" data-oid="68rx:nx">
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
              data-oid="u04rquo"
            >
              <Orb color="pearl" data-oid="lqvxz.1" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="_u2.3sc">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="0s5::pf"
                >
                  Prior Authorization
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="w1efyia"
                >
                  <span className="font-bold" data-oid="sf.sn.i">
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
              data-oid="u5squ4y"
            >
              <Orb color="orange" data-oid="3rk_2xh" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="xdxmnbo">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="2i6mnoz"
                >
                  Appeal Letter Generation
                </h3>
                <p
                  className="text-left text-body-color sm:text-justify"
                  data-oid="x-6hptu"
                >
                  <span className="font-bold" data-oid="-9caeq8">
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
      <Pipeline data-oid="p9dn7b8" />
      {/* <Testimonials /> */}
    </>
  );
}
