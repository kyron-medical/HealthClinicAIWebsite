import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
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
        data-oid="uni0vhz"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="dyfzpyv">
        <div className="container" data-oid="_.wzyfe">
          {/* Main FAQ Container */}
          <div className="mx-auto max-w-4xl" data-oid="_ol1cy_">
            {/* FAQ Categories */}
            <div
              className="mb-12 flex flex-wrap justify-center gap-4"
              data-oid="1h7d3ta"
            >
              <Link href={"#general"} data-oid="x8o:4vd">
                <button
                  className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  data-oid="fluopb0"
                >
                  General
                </button>
              </Link>
              <Link href={"#technology"} data-oid="q3nnp8:">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="i91uh:b"
                >
                  Technology
                </button>
              </Link>
              <Link href={"#implementation"} data-oid="hxm772t">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="sziv:qu"
                >
                  Implementation
                </button>
              </Link>
              <Link href={"#pricing"} data-oid=".d3k3xi">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="9_uq:z9"
                >
                  Pricing
                </button>
              </Link>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6" data-oid="kvqpy5o">
              {/* General Questions Section */}
              <div className="mb-10" id="general" data-oid="2.0o_f1">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="11m_una"
                >
                  General Questions
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="vebo.0u"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="v24gesl"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="r:yt3ia"
                    >
                      What is Kyron Medical?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="q9ys0ed"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="ds2u1r4"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="wj1qp9o"
                  >
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="n28t4ts"
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
                  data-oid="0pb2xjt"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="xljpak6"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="88khof3"
                    >
                      How does Kyron differ from other healthcare technology
                      solutions?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="2q:qpnu"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="1qu-0v5"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="t51ixpm"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="6xb_uz0"
                    >
                      Kyron stands apart from traditional healthcare technology
                      solutions in several key ways:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="cwrhnia"
                    >
                      <li data-oid="2_m9x1q">
                        <strong data-oid="cc26xrf">AI-First Approach:</strong>{" "}
                        Our platform is built from the ground up with artificial
                        intelligence at its core, not as an afterthought.
                      </li>
                      <li data-oid="yhdkbq_">
                        <strong data-oid=".2-wmh.">
                          End-to-End Integration:
                        </strong>{" "}
                        Kyron offers a comprehensive solution that addresses the
                        entire revenue cycle, eliminating the need for multiple
                        disconnected systems.
                      </li>
                      <li data-oid="6yzkk7:">
                        <strong data-oid="p-thz1l">Adaptive Learning:</strong>{" "}
                        Our AI continuously learns from your practice&apos;s
                        data, becoming more effective over time.
                      </li>
                      <li data-oid="evus:8u">
                        <strong data-oid="6h3tjwv">
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
                  data-oid="p_achou"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="uxq7zj-"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="ogi.jyu"
                    >
                      What types of healthcare providers can benefit from Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="_98jqu1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="s_i6w7n"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="s2slfni"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="3dbm_3m"
                    >
                      Kyron&apos;s solutions are designed to benefit a wide
                      range of healthcare providers, including:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid="fhez47y"
                    >
                      <li data-oid="0e0:qea">
                        Independent physician practices
                      </li>
                      <li data-oid="vx0qg1x">Multi-specialty groups</li>
                      <li data-oid="o:xmhmc">Hospitals and health systems</li>
                      <li data-oid="zf_r_6p">Ambulatory surgery centers</li>
                      <li data-oid="nlcuf61">Behavioral health providers</li>
                      <li data-oid="7v6kgmk">Physical therapy practices</li>
                      <li data-oid="i1i.ryh">Dental practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology Section */}
              <div className="mb-10" id="technology" data-oid="ji24840">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="fp9qq0r"
                >
                  Our Technology
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="zb8zgg-"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="cmtxdae"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="r7:0pyo"
                    >
                      How does Kyron&apos;s AI technology work?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="w5uth:h"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid=":uroove"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="x2rw3u5"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="8n7_8dr"
                    >
                      Kyron&apos;s AI technology works through a sophisticated
                      combination of machine learning algorithms, natural
                      language processing, and predictive analytics. Our system:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="_iabi:5"
                    >
                      <li data-oid="ente7.z">
                        <strong data-oid="zu4alkh">Analyzes patterns</strong> in
                        your billing data, claim submissions, and payer
                        responses
                      </li>
                      <li data-oid="--sm-4u">
                        <strong data-oid="yr8wyd:">
                          Identifies potential issues
                        </strong>{" "}
                        before claims are submitted
                      </li>
                      <li data-oid="c-2sj1j">
                        <strong data-oid="rgktnck">
                          Recommends optimizations
                        </strong>{" "}
                        to improve clean claims rates and reduce denials
                      </li>
                      <li data-oid="yku9za_">
                        <strong data-oid="my03o-z">
                          Automates routine tasks
                        </strong>{" "}
                        like eligibility verification and prior authorization
                      </li>
                      <li data-oid="ealmc7n">
                        <strong data-oid="6c2_qah">Continuously learns</strong>{" "}
                        from outcomes to improve future performance
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="scb0chr"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="txt76_-"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="mmtznh6"
                    >
                      Can Kyron integrate with my existing EHR/PM system?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="k4rds8s"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="0ijya7x"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="exr45-m"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="45i27qg"
                    >
                      Yes, Kyron is designed to integrate seamlessly with most
                      major Electronic Health Record (EHR) and Practice
                      Management (PM) systems. We support integration with Epic,
                      Cerner, Allscripts, eClinicalWorks, NextGen, Athenahealth,
                      and many others.
                    </p>
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="gaq2esp"
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
              <div className="mb-10" id="implementation" data-oid="0gi:5qq">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="e65m8td"
                >
                  Implementation
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="wfw.a_f"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="3_6gytd"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="ndm6ooa"
                    >
                      What does the implementation process look like?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="gzqh9d9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="9cwv:27"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="y4o9sqr"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="m69tlei"
                    >
                      Our implementation process is designed to be thorough yet
                      efficient, typically taking 4-6 weeks from start to
                      finish. Here&apos;s what you can expect:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="4y8unml"
                    >
                      <li data-oid="hf-mawt">
                        <strong data-oid="7r13x1o">
                          Discovery & Planning:
                        </strong>{" "}
                        We conduct a thorough assessment of your current
                        workflows, systems, and pain points.
                      </li>
                      <li data-oid="_:f9-0g">
                        <strong data-oid="r2qmg97">System Integration:</strong>{" "}
                        Our technical team establishes secure connections with
                        your existing systems.
                      </li>
                      <li data-oid=":u6ol3g">
                        <strong data-oid="_t_3:q1">
                          Configuration & Customization:
                        </strong>{" "}
                        We configure the Kyron platform to match your specific
                        workflows and requirements.
                      </li>
                      <li data-oid="403wo.p">
                        <strong data-oid="7_fs00i">
                          Training & Education:
                        </strong>{" "}
                        We provide comprehensive training for your staff.
                      </li>
                      <li data-oid="0q9w3g.">
                        <strong data-oid="b:f5nik">
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
                  data-oid="be04pmf"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="wve3yf0"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="twhc:hs"
                    >
                      How quickly can I see results after implementing Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="jo3rof_"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="yvur8rz"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="2ltfquq"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="2elohm-"
                    >
                      Most clients begin seeing measurable improvements within
                      the first 30-60 days of implementation. These initial
                      results typically include:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid="2u6s9ph"
                    >
                      <li data-oid="vr65kai">Reduction in claim denials</li>
                      <li data-oid="woeabg6">Faster payment processing</li>
                      <li data-oid="rlco05z">
                        Decreased administrative workload
                      </li>
                      <li data-oid="hpx2inh">Improved clean claims rate</li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="25o6n9_"
                    >
                      The full benefits of Kyron&apos;s AI-driven optimization
                      continue to grow over time as our system learns from your
                      practice&apos;s specific patterns and challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div id="pricing" data-oid="az07uf8">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="8vut-zf"
                >
                  Pricing & Billing
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="tw8qf5a"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="dnc50t5"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="::a26n0"
                    >
                      How is Kyron priced?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="rar-wz."
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="tbpk6sa"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="12la-6-"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid=":rjo07x"
                    >
                      Kyron offers flexible pricing models designed to align
                      with your practice&apos;s needs and goals:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="47:xya6"
                    >
                      <li data-oid="u314y1n">
                        <strong data-oid="kudndyf">Subscription Model:</strong>{" "}
                        Fixed monthly fee based on your practice size and
                        volume, with all features included.
                      </li>
                      <li data-oid="9z1frun">
                        <strong data-oid="zz.trox">Performance-Based:</strong>{" "}
                        We share in your success with pricing tied to measurable
                        improvements in your revenue cycle.
                      </li>
                      <li data-oid="tyz5stx">
                        <strong data-oid="q_692k3">Hybrid Model:</strong>{" "}
                        Combines a reduced base fee with performance incentives
                        for maximum flexibility.
                      </li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="5.q4qf3"
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
              data-oid="k8dr:u5"
            >
              <h3
                className="mb-4 text-2xl font-bold text-white"
                data-oid="9oq4dc5"
              >
                Still have questions?
              </h3>
              <p className="mb-6 text-blue-100" data-oid="jfuh0m2">
                Our team is ready to help you find the right solution for your
                healthcare practice.
              </p>
              <Link
                href="https://form.typeform.com/to/zstMkPH7"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                data-oid="9fq4vuc"
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
