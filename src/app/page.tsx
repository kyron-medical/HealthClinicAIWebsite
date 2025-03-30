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
    <section id="prototype" className="my-8 text-center" data-oid="0qdo2x-">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="v4:8jpx"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="7uxnykn"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="xxoodss"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="1xikspl"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="282q1fc"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          <span
            className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
            data-oid="hyrgcdy"
          >
            Email
            <span className="text-sm text-red-700" data-oid="pq4q-4n">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
            data-oid="djlxi:5"
          />

          <div className="mt-8" data-oid="gy_qri_">
            <TestDrive handleSubmit={handleSubmit} data-oid="k-bm643" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="a4md5xo" />
      <Landing data-oid="zw.tyxv" />
      <section id="prototype" className="my-8 text-center" data-oid="kwd1pfo">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="vsp63wl"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="vj0u3rs"
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid="0eag00k"
            >
              Our Physician Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="54v1ydk"
              >
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p
              className="text-base text-body-color md:text-lg"
              data-oid="_ks_f3p"
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
            data-oid="ar..onr"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="id4o-86"
      >
        <div className="container" data-oid="33obp5l">
          <h3 data-oid="f68xok.">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid="kylprq6"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="syk8_.4"
          >
            <Link href="/news" data-oid="xhkdhwb">
              <InfiniteCarousel data-oid="ala8kyq">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="d5xvl7c"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="hg37fnm"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="4-zb.c5"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="hh48egs"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="bmhj73k"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="kox61xu"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="o_.8x1z"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="ekbl0y."
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="70p53-_"
      >
        <div className="container" data-oid="7sc_8h6">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="qkuw1ap"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="o1ewg73"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="1wx-mph"
            >
              <div className="mb-6" data-oid="pi-fp1l">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="acoj:_7"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="-gf1d2l"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="mbbimwk"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="l8dho70"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="9x_y.ne"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="evos2y6">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="gd2:ra3"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="2mx9-44"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="ysb.0_o"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid=":igmvdc"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="g8_w7k."
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="cdbhbv_"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="v-9kc_l"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="1cfy8y5"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="je5bo8g"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="6m1oua2"
            >
              <div className="mb-6" data-oid="wgihla2">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="kx64g7-"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="8rui_cv"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="bh5-:th"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="h1azlhe"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="3.9qhjh"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="6bg_agv"
            >
              <div className="mb-6" data-oid="_i-r8uh">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="zh5varu"
                >
                  <div className="relative h-12 w-12" data-oid="u4hb6nt">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="dzw27.6"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="d8b7:nr"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="3qd_qcd"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="7tn39e7"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="0se_yuf"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="zpclh_r"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="vf1xo6f"
          >
            <div className="text-center text-white" data-oid="k59tepw">
              <h4 className="mb-2 text-4xl font-bold" data-oid="zaklysy">
                98%
              </h4>
              <p className="text-blue-100" data-oid="09qme67">
                First Pass Resolution Rate
              </p>
            </div>
            <div className="text-center text-white" data-oid="_ttsgt5">
              <h4 className="mb-2 text-4xl font-bold" data-oid="_3fvant">
                3x
              </h4>
              <p className="text-blue-100" data-oid="q:aa1am">
                Faster Processing Time
              </p>
            </div>
            <div className="text-center text-white" data-oid="g.3t3b2">
              <h4 className="mb-2 text-4xl font-bold" data-oid="0alkva2">
                $2.1M
              </h4>
              <p className="text-blue-100" data-oid="62a6e-m">
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="vnqqwwr"
      >
        <div className="container" data-oid=".ynu-g-">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="t9xy16k"
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="1-m.-ni"
            >
              <Orb color="pink" data-oid="28j2lbn" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="w6t1o07">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="-bx2yjk"
                >
                  Denials Management
                </h3>
                <p className="text-left text-body-color" data-oid="wly-iis">
                  <span className="text-left font-bold" data-oid="ej1e55d">
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
              data-oid="sgf-mg3"
            >
              <Orb color="green" data-oid="_:xyqlw" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="g_exmw-">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="8i4pano"
                >
                  Claims Management
                </h3>
                <p className="text-left text-body-color" data-oid="4:6o.c3">
                  <span className="font-bold" data-oid="9wk61e1">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="qsip9dw"
            >
              <Orb color="pearl" data-oid="vieyck0" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="74-bd2_">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="9mpnd_y"
                >
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color" data-oid="ec.vmlp">
                  <span className="font-bold" data-oid=":4sws.u">
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
              data-oid="om3-sju"
            >
              <Orb color="orange" data-oid="44ksyba" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="vf5-b3b">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="kieqrg7"
                >
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color" data-oid="sd2kb2k">
                  <span className="font-bold" data-oid="cy7npyx">
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
              data-oid="saze0xr"
            >
              <Orb color="gold" data-oid="f9ek6nl" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="s9u7lt5">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="860_rt_"
                >
                  Payment Posting
                </h3>
                <p className="text-left text-body-color" data-oid="zyf.-8x">
                  <span className="font-bold" data-oid="ky0t20v">
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
              data-oid="lv4vunm"
            >
              <Orb color="copper" data-oid="uxq2vjo" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="q02ng7s">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid=".tk59sz"
                >
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color" data-oid="qu.uj0b">
                  <span className="font-bold" data-oid="1smwh53">
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
      <Pipeline data-oid="18pasta" />
      {/* <Testimonials /> */}
    </>
  );
}
