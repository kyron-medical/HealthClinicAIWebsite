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
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          {/* Main FAQ Container */}
          <div className="mx-auto max-w-4xl">
            {/* FAQ Categories */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Link href={"#general"}>
                <button className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                  General
                </button>
              </Link>
              <Link href={"#technology"}>
                <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                  Technology
                </button>
              </Link>
              <Link href={"#implementation"}>
                <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                  Implementation
                </button>
              </Link>
              <Link href={"#pricing"}>
                <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                  Pricing
                </button>
              </Link>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {/* General Questions Section */}
              <div className="mb-10" id="general">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  General Questions
                </h2>

                {/* FAQ Item 1 */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      What is Kyron Medical?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-400">
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
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      How does Kyron differ from other healthcare technology
                      solutions?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Kyron stands apart from traditional healthcare technology
                      solutions in several key ways:
                    </p>
                    <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                      <li>
                        <strong>AI-First Approach:</strong> Our platform is
                        built from the ground up with artificial intelligence at
                        its core, not as an afterthought.
                      </li>
                      <li>
                        <strong>End-to-End Integration:</strong> Kyron offers a
                        comprehensive solution that addresses the entire revenue
                        cycle, eliminating the need for multiple disconnected
                        systems.
                      </li>
                      <li>
                        <strong>Adaptive Learning:</strong> Our AI continuously
                        learns from your practice&apos;s data, becoming more
                        effective over time.
                      </li>
                      <li>
                        <strong>Performance-Based Pricing:</strong> We align our
                        success with yours through our innovative pricing model.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      What types of healthcare providers can benefit from Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Kyron&apos;s solutions are designed to benefit a wide
                      range of healthcare providers, including:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Independent physician practices</li>
                      <li>Multi-specialty groups</li>
                      <li>Hospitals and health systems</li>
                      <li>Ambulatory surgery centers</li>
                      <li>Behavioral health providers</li>
                      <li>Physical therapy practices</li>
                      <li>Dental practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology Section */}
              <div className="mb-10" id="technology">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Our Technology
                </h2>

                {/* FAQ Item 1 */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      How does Kyron&apos;s AI technology work?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Kyron&apos;s AI technology works through a sophisticated
                      combination of machine learning algorithms, natural
                      language processing, and predictive analytics. Our system:
                    </p>
                    <ol className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400">
                      <li>
                        <strong>Analyzes patterns</strong> in your billing data,
                        claim submissions, and payer responses
                      </li>
                      <li>
                        <strong>Identifies potential issues</strong> before
                        claims are submitted
                      </li>
                      <li>
                        <strong>Recommends optimizations</strong> to improve
                        clean claims rates and reduce denials
                      </li>
                      <li>
                        <strong>Automates routine tasks</strong> like
                        eligibility verification and prior authorization
                      </li>
                      <li>
                        <strong>Continuously learns</strong> from outcomes to
                        improve future performance
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Can Kyron integrate with my existing EHR/PM system?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Yes, Kyron is designed to integrate seamlessly with most
                      major Electronic Health Record (EHR) and Practice
                      Management (PM) systems. We support integration with Epic,
                      Cerner, Allscripts, eClinicalWorks, NextGen, Athenahealth,
                      and many others.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
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
              <div className="mb-10" id="implementation">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Implementation
                </h2>

                {/* FAQ Item 1 */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      What does the implementation process look like?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Our implementation process is designed to be thorough yet
                      efficient, typically taking 4-6 weeks from start to
                      finish. Here&apos;s what you can expect:
                    </p>
                    <ol className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400">
                      <li>
                        <strong>Discovery & Planning:</strong> We conduct a
                        thorough assessment of your current workflows, systems,
                        and pain points.
                      </li>
                      <li>
                        <strong>System Integration:</strong> Our technical team
                        establishes secure connections with your existing
                        systems.
                      </li>
                      <li>
                        <strong>Configuration & Customization:</strong> We
                        configure the Kyron platform to match your specific
                        workflows and requirements.
                      </li>
                      <li>
                        <strong>Training & Education:</strong> We provide
                        comprehensive training for your staff.
                      </li>
                      <li>
                        <strong>Go-Live & Ongoing Support:</strong> We provide
                        dedicated support during the transition period.
                      </li>
                    </ol>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      How quickly can I see results after implementing Kyron?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Most clients begin seeing measurable improvements within
                      the first 30-60 days of implementation. These initial
                      results typically include:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Reduction in claim denials</li>
                      <li>Faster payment processing</li>
                      <li>Decreased administrative workload</li>
                      <li>Improved clean claims rate</li>
                    </ul>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      The full benefits of Kyron&apos;s AI-driven optimization
                      continue to grow over time as our system learns from your
                      practice&apos;s specific patterns and challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div id="pricing">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Pricing & Billing
                </h2>

                {/* FAQ Item 1 */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <button className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      How is Kyron priced?
                    </h3>
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="bg-white px-6 py-4 dark:bg-gray-800">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Kyron offers flexible pricing models designed to align
                      with your practice&apos;s needs and goals:
                    </p>
                    <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                      <li>
                        <strong>Subscription Model:</strong> Fixed monthly fee
                        based on your practice size and volume, with all
                        features included.
                      </li>
                      <li>
                        <strong>Performance-Based:</strong> We share in your
                        success with pricing tied to measurable improvements in
                        your revenue cycle.
                      </li>
                      <li>
                        <strong>Hybrid Model:</strong> Combines a reduced base
                        fee with performance incentives for maximum flexibility.
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      All pricing models include implementation, training, and
                      ongoing support. We work with each client to determine the
                      most advantageous pricing structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center shadow-xl">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Still have questions?
              </h3>
              <p className="mb-6 text-blue-100">
                Our team is ready to help you find the right solution for your
                healthcare practice.
              </p>
              <Link
                href="https://form.typeform.com/to/zstMkPH7"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
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
