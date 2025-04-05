import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Kyron",
  description:
    "Frequently Asked Questions about Kyron's AI-driven healthcare solutions",
};

// FAQ Category component

export default function FAQPage() {
  return (
    <>
      <Breadcrumb
        pageName="Frequently Asked Questions"
        description="Find answers to common questions about Kyron's AI-driven healthcare solutions"
        data-oid="-bq6o2c"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="q2-q21y">
        <div className="container" data-oid=".gix47u">
          {/* Main FAQ Container */}
          <div className="mx-auto max-w-4xl" data-oid="nhpzk8d">
            {/* FAQ Categories */}
            <div
              className="mb-12 flex flex-wrap justify-center gap-4"
              data-oid="kvm09rn"
            >
              <Link href={"#general"} data-oid="est6je7">
                <button
                  className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  data-oid="ip07kgp"
                >
                  General
                </button>
              </Link>
              <Link href={"#technology"} data-oid="n5fshrv">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="8bwhgfq"
                >
                  Technology
                </button>
              </Link>
              <Link href={"#implementation"} data-oid="8jr:z1c">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="hk-v1jd"
                >
                  Implementation
                </button>
              </Link>
              <Link href={"#pricing"} data-oid="gfqm-ij">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="036arul"
                >
                  Pricing
                </button>
              </Link>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6" data-oid="2eul_xf">
              {/* General Questions Section */}
              <div className="mb-10" id="general" data-oid=":enb8pd">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="ve.e97s"
                >
                  General Questions
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="e:y85l."
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="nld4g3f"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="p:zryvt"
                    >
                      What is Kyron Medical?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="8-k::ym"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="dfwv6pi"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="uriy03o"
                  >
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="_1eet9b"
                    >
                      Kyron Medical is a healthcare technology company that
                      leverages artificial intelligence to solve complex
                      challenges in medical billing, claims processing, and
                      revenue cycle management. Our platform helps healthcare
                      providers optimize their operations, reduce administrative
                      burden, and improve financial outcomes.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="j6pba5g"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="pskjc8q"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="ukzzp07"
                    >
                      How does Kyron differ from other healthcare technology
                      solutions?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="1tupel3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="krwqsof"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="8unmhv1"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="bjum8-8"
                    >
                      Kyron stands apart from traditional healthcare technology
                      solutions in several key ways:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="ul1nmc-"
                    >
                      <li data-oid="6k4-thv">
                        <strong data-oid="2hr_m0q">AI-First Approach:</strong>{" "}
                        Our platform is built from the ground up with artificial
                        intelligence at its core, not as an afterthought.
                      </li>
                      <li data-oid=":n4vv24">
                        <strong data-oid="eib0ir2">
                          End-to-End Integration:
                        </strong>{" "}
                        Kyron offers a comprehensive solution that addresses the
                        entire revenue cycle, eliminating the need for multiple
                        disconnected systems.
                      </li>
                      <li data-oid="v1yd2ea">
                        <strong data-oid="b13nkzp">Adaptive Learning:</strong>{" "}
                        Our AI continuously learns from your practice&apos;s
                        data, becoming more effective over time.
                      </li>
                      <li data-oid="tfm12uf">
                        <strong data-oid="3tov6fs">
                          Performance-Based Pricing:
                        </strong>{" "}
                        We align our success with yours through our innovative
                        pricing model.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="f1pr5xb"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="hmipr8w"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="0x_wio9"
                    >
                      What types of healthcare providers can benefit from Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="b28lor9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="e62z_sj"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="l80u2u1"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid=".vwflfl"
                    >
                      Kyron&apos;s solutions are designed to benefit a wide
                      range of healthcare providers, including:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid="ogb.jax"
                    >
                      <li data-oid="s19n3xw">
                        Independent physician practices
                      </li>
                      <li data-oid="4yo8mk0">Multi-specialty groups</li>
                      <li data-oid="uh63bd1">Hospitals and health systems</li>
                      <li data-oid="9czc6y4">Ambulatory surgery centers</li>
                      <li data-oid=".e7mq4p">Behavioral health providers</li>
                      <li data-oid="1d.pmst">Physical therapy practices</li>
                      <li data-oid="4kyhl14">Dental practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology Section */}
              <div className="mb-10" id="technology" data-oid="d4r:rip">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="m.b__nj"
                >
                  Our Technology
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="n:7_ja9"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="8_sanzv"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="8zh:w8s"
                    >
                      How does Kyron&apos;s AI technology work?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="o4.1uzx"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="uv-agke"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="_u:xg0s"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="md2bcwd"
                    >
                      Kyron&apos;s AI technology works through a sophisticated
                      combination of machine learning algorithms, natural
                      language processing, and predictive analytics. Our system:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="a:ps:z1"
                    >
                      <li data-oid="1pamnb8">
                        <strong data-oid="ex063ui">Analyzes patterns</strong> in
                        your billing data, claim submissions, and payer
                        responses
                      </li>
                      <li data-oid="d9.jh6j">
                        <strong data-oid="5ow0j8m">
                          Identifies potential issues
                        </strong>{" "}
                        before claims are submitted
                      </li>
                      <li data-oid="au85acq">
                        <strong data-oid="v2edt4-">
                          Recommends optimizations
                        </strong>{" "}
                        to improve clean claims rates and reduce denials
                      </li>
                      <li data-oid="u:gtygc">
                        <strong data-oid="e:vlp.f">
                          Automates routine tasks
                        </strong>{" "}
                        like eligibility verification and prior authorization
                      </li>
                      <li data-oid="4t5ylxr">
                        <strong data-oid="o6t1ry:">Continuously learns</strong>{" "}
                        from outcomes to improve future performance
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="ll75oh4"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid=".phtzi4"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="p:qqeke"
                    >
                      Can Kyron integrate with my existing EHR/PM system?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid=".59g2la"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="t9-ycg_"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="uegv5g:"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid=".62hs22"
                    >
                      Yes, Kyron is designed to integrate seamlessly with most
                      major Electronic Health Record (EHR) and Practice
                      Management (PM) systems. We support integration with Epic,
                      Cerner, Allscripts, eClinicalWorks, NextGen, Athenahealth,
                      and many others.
                    </p>
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="t7olk8w"
                    >
                      Our integration process is designed to be minimally
                      disruptive to your existing workflows. We use secure API
                      connections and HL7/FHIR standards to ensure reliable data
                      exchange while maintaining the integrity and security of
                      your patient information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Implementation Section */}
              <div className="mb-10" id="implementation" data-oid="vk.0:r1">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="cg3kr9m"
                >
                  Implementation
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="ue_k2bf"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="tg3lawk"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="hjo2don"
                    >
                      What does the implementation process look like?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="u7_ibp9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="4nbdn0r"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="nzdgjep"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="h5rky0t"
                    >
                      Our implementation process is designed to be thorough yet
                      efficient, typically taking 4-6 weeks from start to
                      finish. Here&apos;s what you can expect:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="bk9_0k7"
                    >
                      <li data-oid="ze-_02g">
                        <strong data-oid="-dc428h">
                          Discovery & Planning:
                        </strong>{" "}
                        We conduct a thorough assessment of your current
                        workflows, systems, and pain points.
                      </li>
                      <li data-oid="i_g:n65">
                        <strong data-oid="0ges2hy">System Integration:</strong>{" "}
                        Our technical team establishes secure connections with
                        your existing systems.
                      </li>
                      <li data-oid=".d8kpki">
                        <strong data-oid="a_c5lv_">
                          Configuration & Customization:
                        </strong>{" "}
                        We configure the Kyron platform to match your specific
                        workflows and requirements.
                      </li>
                      <li data-oid="db42y0t">
                        <strong data-oid="c.6i0k:">
                          Training & Education:
                        </strong>{" "}
                        We provide comprehensive training for your staff.
                      </li>
                      <li data-oid="29agxlz">
                        <strong data-oid=".vaq7tq">
                          Go-Live & Ongoing Support:
                        </strong>{" "}
                        We provide dedicated support during the transition
                        period.
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="05_q9jm"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="sfbl8_1"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="z-7w10s"
                    >
                      How quickly can I see results after implementing Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="mugad-c"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="zbwjcuq"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="e086_26"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid=".0mvta."
                    >
                      Most clients begin seeing measurable improvements within
                      the first 30-60 days of implementation. These initial
                      results typically include:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid="ef:52y1"
                    >
                      <li data-oid=":.oayok">Reduction in claim denials</li>
                      <li data-oid="h9_r96_">Faster payment processing</li>
                      <li data-oid="09a.v2-">
                        Decreased administrative workload
                      </li>
                      <li data-oid="s_qofyi">Improved clean claims rate</li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="iyzjpk3"
                    >
                      The full benefits of Kyron&apos;s AI-driven optimization
                      continue to grow over time as our system learns from your
                      practice&apos;s specific patterns and challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div id="pricing" data-oid="r7mc2qa">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="q5kn94f"
                >
                  Pricing & Billing
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="2lgl40e"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="05qckzh"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="hlbnklk"
                    >
                      How is Kyron priced?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid=".d-9_ky"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="t6zv1mn"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="ldoe-xa"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="7cwj-pu"
                    >
                      Kyron offers flexible pricing models designed to align
                      with your practice&apos;s needs and goals:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="qd8arzy"
                    >
                      <li data-oid="dow6zd.">
                        <strong data-oid="04ax5bw">Subscription Model:</strong>{" "}
                        Fixed monthly fee based on your practice size and
                        volume, with all features included.
                      </li>
                      <li data-oid="0r7fsmw">
                        <strong data-oid="q3r_eqd">Performance-Based:</strong>{" "}
                        We share in your success with pricing tied to measurable
                        improvements in your revenue cycle.
                      </li>
                      <li data-oid="b1dawz6">
                        <strong data-oid="v2gd0iv">Hybrid Model:</strong>{" "}
                        Combines a reduced base fee with performance incentives
                        for maximum flexibility.
                      </li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="navistx"
                    >
                      All pricing models include implementation, training, and
                      ongoing support. We work with each client to determine the
                      most advantageous pricing structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div
              className="mt-16 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center shadow-xl"
              data-oid="p25ogqr"
            >
              <h3
                className="mb-4 text-2xl font-bold text-white"
                data-oid="vx4lmfp"
              >
                Still have questions?
              </h3>
              <p className="mb-6 text-blue-100" data-oid="ptpro47">
                Our team is ready to help you find the right solution for your
                healthcare practice.
              </p>
              <Link
                href="https://form.typeform.com/to/zstMkPH7"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                data-oid="a_22kp3"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
