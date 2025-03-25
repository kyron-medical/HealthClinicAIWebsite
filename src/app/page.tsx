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
    <section id="prototype" className="my-8 text-center" data-oid="z4nmnbh">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="by4phec"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="8c8r.0t"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="6t4..t1"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="a31mtfh"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="01evrtu"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          <span
            className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
            data-oid="nx2ae4o"
          >
            Email
            <span className="text-sm text-red-700" data-oid="lxowten">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
            data-oid="mc2tygu"
          />

          <div className="mt-8" data-oid="s40s2fo">
            <TestDrive handleSubmit={handleSubmit} data-oid="9.9ywjn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="u8n0gms" />
      <Landing data-oid="zoz6p0i" />
      <section id="prototype" className="my-8 text-center" data-oid="bt9k3t8">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="zvsnlcp"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="h1291p."
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid="z-xsgfs"
            >
              Our Physician Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="9xya4gf"
              >
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p
              className="text-base text-body-color md:text-lg"
              data-oid="4mqt1nz"
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
            data-oid="pzldm05"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="d1lrjt."
      >
        <div className="container" data-oid="y8o:z8r">
          <h3 data-oid="lm6p7uz">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid="__lkzpy"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="dkstqeq"
          >
            <Link href="/news" data-oid="wr_82e1">
              <InfiniteCarousel data-oid=":5-jeo-">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="6n_56h2"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="ag8u0mr"
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="lfqx8zn"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="--g2tr6"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="8ffua4."
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="u3jz06f"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid=":axo27_"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="cnkx.qx"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="fdgkkv:"
      >
        <div className="container" data-oid="8gs61pz">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="cjq:2nc"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="m7s9c70"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="42c2i_:"
            >
              <div className="mb-6" data-oid="u:z923j">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="4f05jm1"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid=":7k:ncw"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid=":b:lkxk"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid=":.hwx78"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="e7xxx3o"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="dch61xa">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="4t30.aq"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid="r2l6ikj"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="yqngi95"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid=":bndeu5"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="sp0.w4s"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="6kpg41x"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="wt2_vy2"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="o3tw140"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="as8xj2q"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="ckjd_3g"
            >
              <div className="mb-6" data-oid="4g7x0zk">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="-m9fnbq"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="a.1o3pb"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="21je92j"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="40b0wbh"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="div.08f"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="d8an.as"
            >
              <div className="mb-6" data-oid="36p.ph-">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="-r4efg_"
                >
                  <div className="relative h-12 w-12" data-oid="62guk2d">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="nocunpv"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid=".ztlq89"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="ibfl6l3"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="v.sjcmb"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="rlwu0yo"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="a13juar"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="u_uve-f"
          >
            <div className="text-center text-white" data-oid="tgkq5oo">
              <h4 className="mb-2 text-4xl font-bold" data-oid="fmmvw1l">
                98%
              </h4>
              <p className="text-blue-100" data-oid="xrcml83">
                First Pass Resolution Rate
              </p>
            </div>
            <div className="text-center text-white" data-oid="2l_:7ai">
              <h4 className="mb-2 text-4xl font-bold" data-oid="it.nit2">
                3x
              </h4>
              <p className="text-blue-100" data-oid="9qpk0kc">
                Faster Processing Time
              </p>
            </div>
            <div className="text-center text-white" data-oid="93s23qx">
              <h4 className="mb-2 text-4xl font-bold" data-oid="ossdy:d">
                $2.1M
              </h4>
              <p className="text-blue-100" data-oid="t1o07.l">
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid=":qi5ps2"
      >
        <div className="container" data-oid="v-_i76o">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="2wfgzi."
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="e-kwhft"
            >
              <Orb color="pink" data-oid="uwmm5aj" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="plvltbg">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="d983cex"
                >
                  Denials Management
                </h3>
                <p className="text-left text-body-color" data-oid="4vrgkhi">
                  <span className="text-left font-bold" data-oid="c:_kumq">
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
              data-oid="5_ob6po"
            >
              <Orb color="green" data-oid="er.kf_8" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="sbmhkjp">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid=":pwwx73"
                >
                  Claims Management
                </h3>
                <p className="text-left text-body-color" data-oid="w:pjbya">
                  <span className="font-bold" data-oid="j2iy5iq">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="n4loxhy"
            >
              <Orb color="pearl" data-oid="vxk18u0" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="c6fbxbk">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="0icw73y"
                >
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color" data-oid="y1_z0vg">
                  <span className="font-bold" data-oid="_n0iz99">
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
              data-oid="zx:xyiu"
            >
              <Orb color="orange" data-oid="f6gwiaa" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="-unesas">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="ce-0t0b"
                >
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color" data-oid="qu4b.i_">
                  <span className="font-bold" data-oid="ekdfwws">
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
              data-oid="15u0nfr"
            >
              <Orb color="gold" data-oid="z89r9eg" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="niilc-d">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="9vh1q4x"
                >
                  Payment Posting
                </h3>
                <p className="text-left text-body-color" data-oid="4bcw_sc">
                  <span className="font-bold" data-oid="mc4usrb">
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
              data-oid="ioashnu"
            >
              <Orb color="copper" data-oid="l13:tf9" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="fcbgj2:">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="lg8hs:o"
                >
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color" data-oid="ytqd4g0">
                  <span className="font-bold" data-oid="kjin2im">
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
      <Pipeline data-oid="d_fwn7u" />
      {/* <Testimonials /> */}
    </>
  );
}
