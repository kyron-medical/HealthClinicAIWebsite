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
        data-oid="le4wnh0"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="jwhwv9u">
        <div className="container" data-oid="3f30pti">
          {/* Main FAQ Container */}
          <div className="mx-auto max-w-4xl" data-oid="r0jkqt4">
            {/* FAQ Categories */}
            <div
              className="mb-12 flex flex-wrap justify-center gap-4"
              data-oid="tc:kt.6"
            >
              <Link href={"#general"} data-oid="xsqs6r6">
                <button
                  className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  data-oid="lz2400s"
                >
                  General
                </button>
              </Link>
              <Link href={"#technology"} data-oid="uzi:a59">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid=":cgtj-v"
                >
                  Technology
                </button>
              </Link>
              <Link href={"#implementation"} data-oid="pe1873y">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="m49ovq9"
                >
                  Implementation
                </button>
              </Link>
              <Link href={"#pricing"} data-oid="nn7ack3">
                <button
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  data-oid="wm8ma60"
                >
                  Pricing
                </button>
              </Link>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6" data-oid="4itsno7">
              {/* General Questions Section */}
              <div className="mb-10" id="general" data-oid="yczu9zv">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="06ckdq."
                >
                  General Questions
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="lm0tmu5"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="n6n1p-r"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="7tgc3_u"
                    >
                      What is Kyron Medical?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="e68ozom"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="o1noiis"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="9u.z0ab"
                  >
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="uqbplw9"
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
                  data-oid="dw1i3yu"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="mv5qr2-"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="e1eofwn"
                    >
                      How does Kyron differ from other healthcare technology
                      solutions?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="rlji9n_"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="65yvb9w"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="ghos.4_"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="6luhyos"
                    >
                      Kyron stands apart from traditional healthcare technology
                      solutions in several key ways:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="mbuxwvd"
                    >
                      <li data-oid="swvq6zd">
                        <strong data-oid=".m8c-nm">AI-First Approach:</strong>{" "}
                        Our platform is built from the ground up with artificial
                        intelligence at its core, not as an afterthought.
                      </li>
                      <li data-oid="x9xtbqc">
                        <strong data-oid="esylah_">
                          End-to-End Integration:
                        </strong>{" "}
                        Kyron offers a comprehensive solution that addresses the
                        entire revenue cycle, eliminating the need for multiple
                        disconnected systems.
                      </li>
                      <li data-oid="tfwcmvd">
                        <strong data-oid="s6.ttsh">Adaptive Learning:</strong>{" "}
                        Our AI continuously learns from your practice&apos;s
                        data, becoming more effective over time.
                      </li>
                      <li data-oid="jb8g39q">
                        <strong data-oid=":.mwvg4">
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
                  data-oid="1q:7n60"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="1lh.fpi"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="lkdno4_"
                    >
                      What types of healthcare providers can benefit from Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="om090hc"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="peux292"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="roofso5"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="k:a5sch"
                    >
                      Kyron&apos;s solutions are designed to benefit a wide
                      range of healthcare providers, including:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid=".-6v_nr"
                    >
                      <li data-oid="w2mrzbg">
                        Independent physician practices
                      </li>
                      <li data-oid="jy9cbae">Multi-specialty groups</li>
                      <li data-oid="kwu.g:y">Hospitals and health systems</li>
                      <li data-oid="-wj00t2">Ambulatory surgery centers</li>
                      <li data-oid="hleevdx">Behavioral health providers</li>
                      <li data-oid="s9smuhh">Physical therapy practices</li>
                      <li data-oid="eex8.eq">Dental practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology Section */}
              <div className="mb-10" id="technology" data-oid=".ak5tcu">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="0czvqpl"
                >
                  Our Technology
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="vqi3icn"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="1wc3y-."
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid=".at5q.3"
                    >
                      How does Kyron&apos;s AI technology work?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="5qknjhf"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="9:yz6jj"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="rvdc.f:"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="v56zwnw"
                    >
                      Kyron&apos;s AI technology works through a sophisticated
                      combination of machine learning algorithms, natural
                      language processing, and predictive analytics. Our system:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="bl7t3yk"
                    >
                      <li data-oid="qdh1ytt">
                        <strong data-oid="l0uq79.">Analyzes patterns</strong> in
                        your billing data, claim submissions, and payer
                        responses
                      </li>
                      <li data-oid="x1mlrx:">
                        <strong data-oid="ctvy91t">
                          Identifies potential issues
                        </strong>{" "}
                        before claims are submitted
                      </li>
                      <li data-oid="u204_-8">
                        <strong data-oid="v80pb-_">
                          Recommends optimizations
                        </strong>{" "}
                        to improve clean claims rates and reduce denials
                      </li>
                      <li data-oid="vuq1wfo">
                        <strong data-oid="z2f5r.5">
                          Automates routine tasks
                        </strong>{" "}
                        like eligibility verification and prior authorization
                      </li>
                      <li data-oid="5lfgk90">
                        <strong data-oid="vrkx:g6">Continuously learns</strong>{" "}
                        from outcomes to improve future performance
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="anigv5x"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid=".mgwm3a"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="_:a0rge"
                    >
                      Can Kyron integrate with my existing EHR/PM system?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="e0.vrlo"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="nqoz.cn"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="q.two7u"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="5umh6m5"
                    >
                      Yes, Kyron is designed to integrate seamlessly with most
                      major Electronic Health Record (EHR) and Practice
                      Management (PM) systems. We support integration with Epic,
                      Cerner, Allscripts, eClinicalWorks, NextGen, Athenahealth,
                      and many others.
                    </p>
                    <p
                      className="text-gray-600 dark:text-gray-400"
                      data-oid="27c_v3u"
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
              <div className="mb-10" id="implementation" data-oid="_ia7_6r">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="cg:-q46"
                >
                  Implementation
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="ym:8bwe"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="ohlbdct"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="f4uq2nn"
                    >
                      What does the implementation process look like?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="h0rhfq6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="2g-2cql"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="fs8s6l9"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="j_f5sa4"
                    >
                      Our implementation process is designed to be thorough yet
                      efficient, typically taking 4-6 weeks from start to
                      finish. Here&apos;s what you can expect:
                    </p>
                    <ol
                      className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid=".yumw0j"
                    >
                      <li data-oid="o9lr05y">
                        <strong data-oid="bxecs26">
                          Discovery & Planning:
                        </strong>{" "}
                        We conduct a thorough assessment of your current
                        workflows, systems, and pain points.
                      </li>
                      <li data-oid="r-pfa-d">
                        <strong data-oid="woa6wzq">System Integration:</strong>{" "}
                        Our technical team establishes secure connections with
                        your existing systems.
                      </li>
                      <li data-oid="5f7r8nn">
                        <strong data-oid="8j9wo-x">
                          Configuration & Customization:
                        </strong>{" "}
                        We configure the Kyron platform to match your specific
                        workflows and requirements.
                      </li>
                      <li data-oid="zs3grk-">
                        <strong data-oid="sye4fzb">
                          Training & Education:
                        </strong>{" "}
                        We provide comprehensive training for your staff.
                      </li>
                      <li data-oid="kgbp5rp">
                        <strong data-oid="hbldqg1">
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
                  data-oid="dyi-hzb"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="kurl39t"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="ble19_w"
                    >
                      How quickly can I see results after implementing Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="_ek3g17"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="-zdjmqy"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid=".3:0lx."
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="wseg3al"
                    >
                      Most clients begin seeing measurable improvements within
                      the first 30-60 days of implementation. These initial
                      results typically include:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400"
                      data-oid="-lb12x1"
                    >
                      <li data-oid="4shgncl">Reduction in claim denials</li>
                      <li data-oid="t.elc3f">Faster payment processing</li>
                      <li data-oid="f_afsr5">
                        Decreased administrative workload
                      </li>
                      <li data-oid="d9vqgwi">Improved clean claims rate</li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="qfcvuyz"
                    >
                      The full benefits of Kyron&apos;s AI-driven optimization
                      continue to grow over time as our system learns from your
                      practice&apos;s specific patterns and challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div id="pricing" data-oid="_2j9f5d">
                <h2
                  className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
                  data-oid="g-cm0ub"
                >
                  Pricing & Billing
                </h2>

                {/* FAQ Item 1 */}
                <div
                  className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  data-oid="341p1_2"
                >
                  <button
                    className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-oid="8enp.03"
                  >
                    <h3
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      data-oid="vaziwm0"
                    >
                      How is Kyron priced?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="r3-ehgo"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="8e9soak"
                      />
                    </svg>
                  </button>
                  <div
                    className="bg-white px-6 py-4 dark:bg-gray-800"
                    data-oid="zbysda2"
                  >
                    <p
                      className="mb-4 text-gray-600 dark:text-gray-400"
                      data-oid="a476lkl"
                    >
                      Kyron offers flexible pricing models designed to align
                      with your practice&apos;s needs and goals:
                    </p>
                    <ul
                      className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400"
                      data-oid="iu0wn:q"
                    >
                      <li data-oid="zo3:.ef">
                        <strong data-oid="4ndta:2">Subscription Model:</strong>{" "}
                        Fixed monthly fee based on your practice size and
                        volume, with all features included.
                      </li>
                      <li data-oid="1ie:-t7">
                        <strong data-oid="_iey0vt">Performance-Based:</strong>{" "}
                        We share in your success with pricing tied to measurable
                        improvements in your revenue cycle.
                      </li>
                      <li data-oid="gz.vyuc">
                        <strong data-oid="na2gu8r">Hybrid Model:</strong>{" "}
                        Combines a reduced base fee with performance incentives
                        for maximum flexibility.
                      </li>
                    </ul>
                    <p
                      className="mt-4 text-gray-600 dark:text-gray-400"
                      data-oid="lgl5quc"
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
              data-oid="wg:zhr-"
            >
              <h3
                className="mb-4 text-2xl font-bold text-white"
                data-oid=":8te9m."
              >
                Still have questions?
              </h3>
              <p className="mb-6 text-blue-100" data-oid="k9hhsx1">
                Our team is ready to help you find the right solution for your
                healthcare practice.
              </p>
              <Link
                href="https://form.typeform.com/to/zstMkPH7"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                data-oid="-bhkj2z"
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
