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
    <section id="prototype" className="my-8 text-center" data-oid="svypgyw">
      <div
        className="flex flex-col items-center justify-center md:flex-row"
        data-oid="ya3s51n"
      >
        <Image
          src="/images/demo.png"
          alt="Front-End Prototype"
          className="mx-auto w-full transform rounded-md shadow-lg transition-transform duration-500 hover:scale-105 md:w-1/2"
          width={500}
          height={400}
          data-oid="1cu8c.9"
        />

        <div
          className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
          data-oid="du.acl9"
        >
          <h2
            className="mb-4 text-2xl font-bold md:text-4xl"
            data-oid="jnz1fkk"
          >
            Access an Interactive Demo of Kyron
          </h2>
          <p
            className="text-base text-body-color md:text-lg"
            data-oid="n7uyh6k"
          >
            Experience Kyron&#39;s tailored solutions with our interactive demo.
          </p>

          <span
            className="-mb-[12px] ml-[2px] mt-4 block text-left text-sm text-body-color"
            data-oid="th95cqi"
          >
            Email
            <span className="text-sm text-red-700" data-oid="662up.n">
              *
            </span>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-md border border-gray-300 p-2 text-base text-body-color focus:border-blue-500 focus:outline-none md:text-lg"
            data-oid="ykvq39m"
          />

          <div className="mt-8" data-oid="x0c0qt-">
            <TestDrive handleSubmit={handleSubmit} data-oid=".09m_99" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <ScrollUp data-oid="3:v1vy3" />
      <Landing data-oid="0hzafla" />
      <section id="prototype" className="my-8 text-center" data-oid="xanusto">
        <div
          className="flex flex-col items-center justify-center md:flex-row "
          data-oid="umhotvs"
        >
          <div
            className="mx-auto w-full pl-4 text-left md:w-1/3 md:pl-16"
            data-oid="phk92w7"
          >
            <h2
              className="mb-4 text-2xl font-bold md:text-4xl"
              data-oid="4hoxmwb"
            >
              Our Physician Dashboard Gives You{" "}
              <span
                className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent"
                data-oid="hryxh4v"
              >
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p
              className="text-base text-body-color md:text-lg"
              data-oid="foccqne"
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
            data-oid="s28op3g"
          />
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-28"
        data-oid="ca_be-z"
      >
        <div className="container" data-oid="-mc2fx4">
          <h3 data-oid="0z-if.o">
            <span
              className="text-xl text-slate-700 md:text-2xl"
              data-oid=":6i3_:p"
            >
              As featured in...
            </span>
          </h3>

          <div
            className="mt-12 flex flex-wrap justify-center md:mt-24 "
            data-oid="fsp:b:n"
          >
            <Link href="/news" data-oid="qhxkt2c">
              <InfiniteCarousel data-oid="ivqampn">
                <Image
                  src={"/logos/news/brown-university.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="zk15rq-"
                />

                <Image
                  src={"/logos/news/warren-alpert.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="c5obb5."
                />

                <Image
                  src={"/logos/news/bdh.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="6pmgwm4"
                />

                <Image
                  src={"/logos/news/american-bazaar.jpg"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="ta_ueme"
                />

                <Image
                  src={"/logos/news/providence-journal.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="9lyiyao"
                />

                <Image
                  src={"/logos/news/usa-today.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="0ql2e9f"
                />

                <Image
                  src={"/logos/news/boston-globe.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="g694nd4"
                />

                <Image
                  src={"/logos/news/new-england-council.png"}
                  className=""
                  alt={""}
                  height={200}
                  width={300}
                  data-oid="mc0111a"
                />
              </InfiniteCarousel>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="-msl0f9"
      >
        <div className="container" data-oid="zr04z3j">
          <SectionTitle
            title="Why leading providers partner with Kyron Medical"
            paragraph="Trusted by healthcare leaders for comprehensive solutions that deliver results"
            center
            data-oid="x0717py"
          />

          <div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-oid="wfwt.6s"
          >
            {/* World Class Team */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="pb3g1y0"
            >
              <div className="mb-6" data-oid="4hmn9-r">
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="World Class Team"
                  width={60}
                  height={60}
                  className="mx-auto"
                  data-oid="qb_utvx"
                />
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="n2.w8ks"
              >
                World Class Team
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="u434kgz"
              >
                A white glove service team dedicated to your success
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="_25t5.w"
              ></div>
            </div>

            {/* Seamless Integration */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="bne19mq"
            >
              <div className="mb-6 grid grid-cols-3 gap-2" data-oid="2n1:g.0">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="gm002by"
                >
                  <Image
                    src="/images/icons/webpt.png"
                    alt="WebPT"
                    width={20}
                    height={20}
                    data-oid=":li3oh_"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="y.5_gb3"
                >
                  <Image
                    src="/images/icons/athena.png"
                    alt="Athena"
                    width={20}
                    height={20}
                    data-oid=":rjx:jx"
                  />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 dark:bg-blue-900/30"
                  data-oid="h9xud0x"
                >
                  <Image
                    src="/images/icons/epic.png"
                    alt="Epic"
                    width={20}
                    height={20}
                    data-oid="l8ck2rv"
                  />
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="2xhydd-"
              >
                Seamless Integration
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="prihq-o"
              >
                Integrating with all healthcare applications in the cloud and
                on-prem
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-green-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="uykf:2e"
              ></div>
            </div>

            {/* ROI Obsessed */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="3mj6met"
            >
              <div className="mb-6" data-oid="gygn9sr">
                <div
                  className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100 p-3 dark:bg-blue-900/30"
                  data-oid="e908zdi"
                >
                  <div
                    className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"
                    data-oid="12:wh6k"
                  ></div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="z0vd_58"
              >
                ROI Obsessed
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="musfykp"
              >
                Adding millions in revenue with our performance-driven
                contracts.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-purple-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="zyxe606"
              ></div>
            </div>

            {/* Vendor Consolidation */}
            <div
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
              data-oid="5_-h6zb"
            >
              <div className="mb-6" data-oid="d-v4d68">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  data-oid="476ps4m"
                >
                  <div className="relative h-12 w-12" data-oid="wmwp.1g">
                    <div
                      className="absolute bottom-0 h-8 w-8 rounded bg-blue-200 dark:bg-blue-900/30"
                      data-oid="9e-si9i"
                    ></div>
                    <div
                      className="absolute bottom-2 right-2 h-8 w-8 rounded bg-blue-300 dark:bg-blue-800/30"
                      data-oid="zpm6vcb"
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 h-8 w-8 rounded bg-blue-400 dark:bg-blue-700/30"
                      data-oid="wb:k56q"
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
                data-oid="-ie_9u1"
              >
                Vendor Consolidation
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300"
                data-oid="7bqrd0s"
              >
                One unified platform for every department—cutting your tool and
                vendor expenses.
              </p>
              <div
                className="absolute -right-12 -top-12 h-24 w-24 rotate-12 transform bg-blue-500/10 transition-transform duration-300 group-hover:rotate-45"
                data-oid="24lzauu"
              ></div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="mt-20 grid grid-cols-1 gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:grid-cols-3"
            data-oid="swr_shp"
          >
            <div className="text-center text-white" data-oid="qvr8m:2">
              <h4 className="mb-2 text-4xl font-bold" data-oid="e7j:ksa">
                98%
              </h4>
              <p className="text-blue-100" data-oid="wjes2tk">
                First Pass Resolution Rate
              </p>
            </div>
            <div className="text-center text-white" data-oid="ty-pc_h">
              <h4 className="mb-2 text-4xl font-bold" data-oid="ztkijle">
                3x
              </h4>
              <p className="text-blue-100" data-oid="qnme075">
                Faster Processing Time
              </p>
            </div>
            <div className="text-center text-white" data-oid="u5lxjo1">
              <h4 className="mb-2 text-4xl font-bold" data-oid="r-3af07">
                $2.1M
              </h4>
              <p className="text-blue-100" data-oid="s98ev18">
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="-pt-24 py-8 text-center md:py-16 md:py-20 lg:py-4"
        data-oid="qckectz"
      >
        <div className="container" data-oid="7y8uf67">
          <div
            className="mt-8 grid grid-cols-1 gap-4 pt-12 md:grid-cols-2 md:pt-24"
            data-oid="somq3de"
          >
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="-zy4vet"
            >
              <Orb color="pink" data-oid="kcuf521" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="rnr4.hv">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="qkqww8s"
                >
                  Denials Management
                </h3>
                <p className="text-left text-body-color" data-oid="_kzllec">
                  <span className="text-left font-bold" data-oid="6-5zzao">
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
              data-oid="ss3h:41"
            >
              <Orb color="green" data-oid="cu7_gl4" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid=".fkm:5c">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="0m3hr5:"
                >
                  Claims Management
                </h3>
                <p className="text-left text-body-color" data-oid="ri1.:i_">
                  <span className="font-bold" data-oid="9tpxi_i">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div
              className="flex transform flex-col items-center justify-center rounded-lg border p-3 shadow-lg transition-transform hover:scale-105 md:flex-row"
              data-oid="qw0usts"
            >
              <Orb color="pearl" data-oid="gtqlu3w" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="4ipod25">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="n1qme8u"
                >
                  Prior Authorization
                </h3>
                <p className="text-left text-body-color" data-oid="97czb0j">
                  <span className="font-bold" data-oid="mj:rq86">
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
              data-oid="s-sha_2"
            >
              <Orb color="orange" data-oid="uzhe-n1" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid=".-1q9kt">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="wo:3nnv"
                >
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color" data-oid="vr8835x">
                  <span className="font-bold" data-oid="k_ly.a6">
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
              data-oid="nruex20"
            >
              <Orb color="gold" data-oid="_ddt78v" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="56euavw">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="phh2pr_"
                >
                  Payment Posting
                </h3>
                <p className="text-left text-body-color" data-oid="2v:9fve">
                  <span className="font-bold" data-oid="ihyb-i_">
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
              data-oid="exs.q8q"
            >
              <Orb color="copper" data-oid="ki2_l30" />
              <div className="ml-0 mt-4 md:ml-4 md:mt-0" data-oid="3r79ttb">
                <h3
                  className="text-lg font-semibold md:text-xl"
                  data-oid="net7orw"
                >
                  Coding Notes and Review
                </h3>
                <p className="text-left text-body-color" data-oid="gcnar.x">
                  <span className="font-bold" data-oid="pq4.n1i">
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
      <Pipeline data-oid="a14i3by" />
      {/* <Testimonials /> */}
    </>
  );
}
