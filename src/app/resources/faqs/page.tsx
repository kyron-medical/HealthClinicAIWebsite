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
        data-oid="2bcqtj0"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="uw3ik-u">
        <div className="container" data-oid="dg_r1eq">
          {/* Main FAQ Container */}
          <div className="mx-auto max-w-4xl" data-oid="1ph-.09">
            {/* FAQ Categories */}
            <div
              className="mb-12 flex flex-wrap justify-center gap-4"
              data-oid="fp-ru.3"
            >
              <Link href={"#general"}>
                <button
                  className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  data-oid="pa945ey"
                >
                  General
                </button>
              </Link>
              <Link href={"#technology"}>
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="fkv22h:"
                >
                  Technology
                </button>
              </Link>
              <Link href={"#implementation"}>
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="0000000"
                >
                  Implementation
                </button>
              </Link>
              <Link href={"#pricing"}>
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="fj3ytrr"
                >
                  Pricing
                </button>
              </Link>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6" data-oid="7sylmt:">
              {/* General Questions Section */}
              <div className="mb-10" id="general" data-oid="0w9q6ai">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="5rtz-ma"
                >
                  General Questions
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="j78q9qg"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="u10d9g2"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="_jbgzzx"
                    >
                      What is Kyron Medical?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="l8g772."
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid=".s2vc:t"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="woine03"
                  >
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="0dan-wi"
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
                  data-oid="oxq-mpw"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="f31hyk3"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="8a3j:q0"
                    >
                      How does Kyron differ from other healthcare technology
                      solutions?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="sfmi1wa"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="zleou_x"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="nk3mxgb"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="618.kg4"
                    >
                      Kyron stands apart from traditional healthcare technology
                      solutions in several key ways:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid=":7e9tng"
                    >
                      <li data-oid="i6chx2q">
                        <strong data-oid="daja0ir">AI-First Approach:</strong>{" "}
                        Our platform is built from the ground up with artificial
                        intelligence at its core, not as an afterthought.
                      </li>
                      <li data-oid="yg07hy4">
                        <strong data-oid="yspd62d">
                          End-to-End Integration:
                        </strong>{" "}
                        Kyron offers a comprehensive solution that addresses the
                        entire revenue cycle, eliminating the need for multiple
                        disconnected systems.
                      </li>
                      <li data-oid="0hxrm.l">
                        <strong data-oid=":piohyd">Adaptive Learning:</strong>{" "}
                        Our AI continuously learns from your practice&apos;s
                        data, becoming more effective over time.
                      </li>
                      <li data-oid="r4v_o3-">
                        <strong data-oid="n43ooig">
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
                  data-oid="32z-2.a"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="win.l9x"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="sv_-pgg"
                    >
                      What types of healthcare providers can benefit from Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="xnc7dm1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="8ry5cso"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="l-4gzgw"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="pzcbr45"
                    >
                      Kyron&apos;s solutions are designed to benefit a wide
                      range of healthcare providers, including:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid="8uyw8um"
                    >
                      <li data-oid="aizgchc">
                        Independent physician practices
                      </li>
                      <li data-oid="pn5v0it">Multi-specialty groups</li>
                      <li data-oid="ji1_vqp">Hospitals and health systems</li>
                      <li data-oid="amllsau">Ambulatory surgery centers</li>
                      <li data-oid="xf8h8:w">Behavioral health providers</li>
                      <li data-oid="dpv5v4m">Physical therapy practices</li>
                      <li data-oid="9ced3:r">Dental practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology Section */}
              <div className="mb-10" id="technology" data-oid=":law8zl">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="lac-p:9"
                >
                  Our Technology
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="yje8fe1"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="6e20aen"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="t1rsz8g"
                    >
                      How does Kyron&apos;s AI technology work?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="d9j6n-m"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="_rvnm.2"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="e8_8a5v"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="251475z"
                    >
                      Kyron&apos;s AI technology works through a sophisticated
                      combination of machine learning algorithms, natural
                      language processing, and predictive analytics. Our system:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="fuu6m2c"
                    >
                      <li data-oid="mofdb5a">
                        <strong data-oid="573qxxy">Analyzes patterns</strong> in
                        your billing data, claim submissions, and payer
                        responses
                      </li>
                      <li data-oid="atp0997">
                        <strong data-oid="i2u9ge:">
                          Identifies potential issues
                        </strong>{" "}
                        before claims are submitted
                      </li>
                      <li data-oid="6-tv:0j">
                        <strong data-oid="b-12oqj">
                          Recommends optimizations
                        </strong>{" "}
                        to improve clean claims rates and reduce denials
                      </li>
                      <li data-oid="32.0cmx">
                        <strong data-oid="rap8k_i">
                          Automates routine tasks
                        </strong>{" "}
                        like eligibility verification and prior authorization
                      </li>
                      <li data-oid="lelsgl4">
                        <strong data-oid="l_iqzwh">Continuously learns</strong>{" "}
                        from outcomes to improve future performance
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="-ava:zm"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="05gjnnw"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="6o.sx2:"
                    >
                      Can Kyron integrate with my existing EHR/PM system?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="3tk_2xi"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid=":raw8bu"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="pc0uwjt"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="d-tk00u"
                    >
                      Yes, Kyron is designed to integrate seamlessly with most
                      major Electronic Health Record (EHR) and Practice
                      Management (PM) systems. We support integration with Epic,
                      Cerner, Allscripts, eClinicalWorks, NextGen, Athenahealth,
                      and many others.
                    </p>
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="8zk6_j0"
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
              <div className="mb-10" id="implementation" data-oid="-h5ki93">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="1_:dfeq"
                >
                  Implementation
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="p1n9u10"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="b:el3xg"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="3d77w--"
                    >
                      What does the implementation process look like?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="1r49qmd"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="r5mp.et"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="pjnpf3f"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="o_:k-ya"
                    >
                      Our implementation process is designed to be thorough yet
                      efficient, typically taking 4-6 weeks from start to
                      finish. Here&apos;s what you can expect:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="f.wxex5"
                    >
                      <li data-oid="-c62_1a">
                        <strong data-oid="pdn5n_.">
                          Discovery & Planning:
                        </strong>{" "}
                        We conduct a thorough assessment of your current
                        workflows, systems, and pain points.
                      </li>
                      <li data-oid="okv6hcs">
                        <strong data-oid="vz_uh8i">System Integration:</strong>{" "}
                        Our technical team establishes secure connections with
                        your existing systems.
                      </li>
                      <li data-oid="23n5ff_">
                        <strong data-oid=".1l:mki">
                          Configuration & Customization:
                        </strong>{" "}
                        We configure the Kyron platform to match your specific
                        workflows and requirements.
                      </li>
                      <li data-oid="6svf2t2">
                        <strong data-oid="qt9dbn0">
                          Training & Education:
                        </strong>{" "}
                        We provide comprehensive training for your staff.
                      </li>
                      <li data-oid="7yd6416">
                        <strong data-oid="4qglqao">
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
                  data-oid="mhe-9fy"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="z42llem"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="6qr3ynl"
                    >
                      How quickly can I see results after implementing Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="6dty7-j"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="fc8mq36"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="on:amss"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="qj738pc"
                    >
                      Most clients begin seeing measurable improvements within
                      the first 30-60 days of implementation. These initial
                      results typically include:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid="hudrswf"
                    >
                      <li data-oid="hzxe6ig">Reduction in claim denials</li>
                      <li data-oid="fy1cf:0">Faster payment processing</li>
                      <li data-oid="ct.gd8:">
                        Decreased administrative workload
                      </li>
                      <li data-oid="i5q:ggc">Improved clean claims rate</li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="p:fyd6f"
                    >
                      The full benefits of Kyron&apos;s AI-driven optimization
                      continue to grow over time as our system learns from your
                      practice&apos;s specific patterns and challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div id="pricing" data-oid="kwns9fy">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="v4.q53n"
                >
                  Pricing & Billing
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="pmp4m.s"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="2a1c3xj"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="c47n_c."
                    >
                      How is Kyron priced?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="_pzwwlz"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="w_b2p.9"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="6f-xfmb"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="qv2uk7p"
                    >
                      Kyron offers flexible pricing models designed to align
                      with your practice&apos;s needs and goals:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="36:h:0c"
                    >
                      <li data-oid="uwvqkf5">
                        <strong data-oid="jxvw5r:">Subscription Model:</strong>{" "}
                        Fixed monthly fee based on your practice size and
                        volume, with all features included.
                      </li>
                      <li data-oid="m1qc2ao">
                        <strong data-oid="peshrze">Performance-Based:</strong>{" "}
                        We share in your success with pricing tied to measurable
                        improvements in your revenue cycle.
                      </li>
                      <li data-oid="716in6y">
                        <strong data-oid="_hqifsu">Hybrid Model:</strong>{" "}
                        Combines a reduced base fee with performance incentives
                        for maximum flexibility.
                      </li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="vj.907w"
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
              data-oid="2m_xgl_"
            >
              <h3
                className="mb-4 text-2xl font-bold text-white"
                data-oid="i26tg4a"
              >
                Still have questions?
              </h3>
              <p className="mb-6 text-blue-100" data-oid="5rk2r4s">
                Our team is ready to help you find the right solution for your
                healthcare practice.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                data-oid="1gdspxw"
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
