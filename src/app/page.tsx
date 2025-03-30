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
    <section id="prototype" className="my-8 text-center" data-oid="ghpx4ae">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="4qe769r"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="maow93d"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="5z20hil"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="gg19cn0"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="e__kwbc"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          <span
            className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
            data-oid="hwmwq3x"
          >
            Email
            <span className="text-sm text-red-700" data-oid="ljq_2jv">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
            data-oid="h0o-d:s"
          />

          <div className="mt-8" data-oid="6.3gbrs">
            <TestDrive handleSubmit={handleSubmit} data-oid="zx0ttcs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="pjuv2we" />
      <Landing data-oid="a93derd" />
      <section id="prototype" className="my-8 text-center" data-oid="b2j2xq9">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="4snlt8k"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="yejfn0."
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid=":9tpzh:"
            >
              Our Physician Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="0cp4rgf"
              >
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p
              className="text-base text-body-color md:text-lg"
              data-oid="o21yytb"
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
            data-oid="t22spvb"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="l:0y7xv"
      >
        <div className="container" data-oid="ee0uzpl">
          <h3 data-oid="_3gw13_">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid="9uq1afx"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="52i3y52"
          >
            <Link href="/news" data-oid="imm--70">
              <InfiniteCarousel data-oid="kyce1xw">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="6_n_vs7"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="f2zdx6q"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="2eiwb.c"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="sdyxjxf"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="ebgezfg"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="q9q00rb"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="dybn9o2"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="j.cwb64"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="-z.4:3:"
      >
        <div className="container" data-oid="blij0qk">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="w958:9s"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="i2f1tqk"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="2tywdkm"
            >
              <div className="mb-6" data-oid="c3eeg6k">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="imn6-u2"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="6ppw.et"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="9vqvcy-"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="ftmg2l7"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid=".t8.e4r"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="39w148g">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="89u_p14"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="uzxstc:"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="hr7dv7l"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid="1hartqt"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="x9-p2er"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="cka21s0"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="022t_k1"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="8wst:hg"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="1mp9p3-"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="lvz60o0"
            >
              <div className="mb-6" data-oid="56vmu9h">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="g9.awk:"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="htsla28"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="cocqmmb"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="6ak6xcy"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="_es63zb"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="5cfw9zv"
            >
              <div className="mb-6" data-oid="b0-7-u_">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="y8ocp2f"
                >
                  <div className="relative h-12 w-12" data-oid="ffbip2k">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="_0x.f4q"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="lf89s1u"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="k0.yf_t"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="zzkg:il"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="nt09xg."
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="fzficeb"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="uzx64i."
          >
            <div className="text-center text-white" data-oid="4-bdxcq">
              <h4 className="mb-2 text-4xl font-bold" data-oid="id6obqv">
                98%
              </h4>
              <p className="text-blue-100" data-oid="9ishd3f">
                First Pass Resolution Rate
              </p>
            </div>
            <div className="text-center text-white" data-oid="mzdt7xg">
              <h4 className="mb-2 text-4xl font-bold" data-oid="unk:9f.">
                3x
              </h4>
              <p className="text-blue-100" data-oid="v8:fhc_">
                Faster Processing Time
              </p>
            </div>
            <div className="text-center text-white" data-oid="3ij-1af">
              <h4 className="mb-2 text-4xl font-bold" data-oid="i4nytdo">
                $2.1M
              </h4>
              <p className="text-blue-100" data-oid="zrlf2np">
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="o9l1nsc"
      >
        <div className="container" data-oid="jqq-y2s">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="snj1io7"
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="p-2ns:y"
            >
              <Orb color="pink" data-oid="yvqzw27" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="eml-yt9">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="gdphlzn"
                >
                  Denials Management
                </h3>
                <p className="text-left text-body-color" data-oid="4zp3-tl">
                  <span className="text-left font-bold" data-oid="hlysqzt">
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
              data-oid="d7:d_yn"
            >
              <Orb color="green" data-oid="ab0ocfn" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="ybve54-">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="3c_r3fl"
                >
                  Claims Management
                </h3>
                <p className="text-left text-body-color" data-oid="dqz67vs">
                  <span className="font-bold" data-oid="_fzs:1n">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="6ehxvf2"
            >
              <Orb color="pearl" data-oid=":r_aqzj" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="gtm5e2i">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid=":fb_3k8"
                >
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color" data-oid="_ev418z">
                  <span className="font-bold" data-oid="c3c79_o">
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
              data-oid="f4a76wj"
            >
              <Orb color="orange" data-oid="cnmqqpc" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid=".2epdus">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="yrq_p0e"
                >
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color" data-oid="sbc6e5g">
                  <span className="font-bold" data-oid="sepnyei">
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
              data-oid="wv8h40l"
            >
              <Orb color="gold" data-oid="rxsne_q" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="7w8oiq_">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="s-n0wcm"
                >
                  Payment Posting
                </h3>
                <p className="text-left text-body-color" data-oid="-4:-jyr">
                  <span className="font-bold" data-oid="l0xp2fw">
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
              data-oid="t7v7ti_"
            >
              <Orb color="copper" data-oid="u766.t0" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="a47s0q_">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="3c6h6jo"
                >
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color" data-oid="dd:vb8j">
                  <span className="font-bold" data-oid="2ju.j68">
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
      <Pipeline data-oid="b-0a:tm" />
      {/* <Testimonials /> */}
    </>
  );
}
