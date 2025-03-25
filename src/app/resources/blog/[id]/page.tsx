"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

// Social share buttons component
const SocialShareButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="rounded-full bg-blue-600 p-2 text-white transition-transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      </button>
      <button className="rounded-full bg-blue-800 p-2 text-white transition-transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
      </button>
      <button className="rounded-full bg-blue-500 p-2 text-white transition-transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </button>
      <button className="rounded-full bg-green-500 p-2 text-white transition-transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </button>
    </div>
  );
};

// Author info component
const AuthorInfo = ({ author }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <Image
          src={author.avatar || "/images/blog/author-placeholder.jpg"}
          alt={author.name}
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          {author.name}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {author.role}
        </p>
      </div>
    </div>
  );
};

// Related posts component
const RelatedPosts = ({ currentPostId }) => {
  // Get 3 random posts that are not the current one
  const relatedPosts = blogData
    .filter((post) => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="mt-16">
      <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        Related Articles
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            href={`/resources/blog/${post.id}`}
            key={post.id}
            className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={225}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-300">
                {post.paragraph}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Newsletter signup component
const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="mb-4 text-2xl font-bold text-white">
          Subscribe to our newsletter
        </h3>
        <p className="mb-6 text-blue-100">
          Get the latest healthcare technology insights delivered to your inbox
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-0 bg-white/90 px-4 py-3 text-gray-800 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 sm:max-w-md"
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

// Table of contents component
const TableOfContents = ({ headings }) => {
  return (
    <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#heading-${index}`}
              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the blog post with the matching ID
    const foundPost = blogData.find((post) => post.id.toString() === params.id);

    if (foundPost) {
      setPost(foundPost);
    }

    setLoading(false);
  }, [params.id]);

  // Sample headings for the table of contents
  const sampleHeadings = [
    "Introduction",
    "The Challenge in Healthcare",
    "How AI is Transforming Medical Billing",
    "Benefits for Healthcare Providers",
    "Implementation Strategies",
    "Future Outlook",
  ];

  // Sample author data
  const author = {
    name: "Dr. Sarah Johnson",
    role: "Healthcare Technology Specialist",
    avatar: "/images/blog/author.jpg",
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Blog Post Not Found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          href="/resources/blog"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        pageName={post.title}
        description="Insights and perspectives on healthcare technology and innovation"
      />

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Post Header */}
            <div className="mb-12">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {post.tags?.[0] || "Healthcare"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <SocialShareButtons />
              </div>

              <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <AuthorInfo author={author} />
            </div>
          </div>

          {/* Content Area with Sidebar */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Table of Contents Sidebar (Desktop) */}
            <div className="hidden lg:block">
              <TableOfContents headings={sampleHeadings} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none dark:prose-invert">
                {/* Introduction */}
                <h2 id="heading-0" className="scroll-mt-24">
                  Introduction
                </h2>
                <p>{post.paragraph}</p>
                <p>
                  The healthcare industry is undergoing a significant
                  transformation, driven by technological advancements and the
                  need for more efficient processes. As medical practices face
                  increasing administrative burdens, innovative solutions are
                  emerging to streamline operations and improve patient care.
                </p>

                {/* The Challenge in Healthcare */}
                <h2 id="heading-1" className="scroll-mt-24">
                  The Challenge in Healthcare
                </h2>
                <p>
                  Healthcare providers face numerous challenges in today's
                  complex medical landscape. From managing patient records to
                  navigating insurance claims, the administrative workload can
                  be overwhelming. According to recent studies, medical
                  professionals spend nearly 20% of their time on paperwork and
                  administrative tasks, taking away valuable time that could be
                  spent on patient care.
                </p>
                <blockquote>
                  <p>
                    "The administrative burden on healthcare providers has
                    reached unsustainable levels. We need innovative solutions
                    that allow medical professionals to focus on what they do
                    best: caring for patients."
                  </p>
                </blockquote>

                {/* How AI is Transforming Medical Billing */}
                <h2 id="heading-2" className="scroll-mt-24">
                  How AI is Transforming Medical Billing
                </h2>
                <p>
                  Artificial intelligence is revolutionizing medical billing
                  processes, offering unprecedented accuracy and efficiency. By
                  automating routine tasks and providing intelligent insights,
                  AI-powered solutions are helping healthcare providers optimize
                  their revenue cycles and reduce administrative overhead.
                </p>
                <p>Key benefits of AI in medical billing include:</p>
                <ul>
                  <li>Automated claim submission and processing</li>
                  <li>Intelligent denial management</li>
                  <li>Predictive analytics for revenue forecasting</li>
                  <li>Real-time eligibility verification</li>
                  <li>Enhanced coding accuracy</li>
                </ul>

                {/* Benefits for Healthcare Providers */}
                <h2 id="heading-3" className="scroll-mt-24">
                  Benefits for Healthcare Providers
                </h2>
                <p>
                  The implementation of advanced billing solutions offers
                  numerous benefits for healthcare providers. By streamlining
                  administrative processes, these technologies enable medical
                  practices to focus more on patient care while improving their
                  financial performance.
                </p>
                <div className="not-prose my-8 overflow-hidden rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20">
                  <h3 className="mb-4 text-xl font-bold text-blue-800 dark:text-blue-300">
                    Key Benefits at a Glance
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Increased Revenue
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Optimize billing processes to capture more billable
                        services and reduce claim denials.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Reduced Overhead
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Automate routine tasks to decrease administrative costs
                        and improve staff efficiency.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Improved Compliance
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Stay up-to-date with changing regulations and reduce
                        compliance-related risks.
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Enhanced Patient Experience
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Provide more transparent billing and reduce patient
                        confusion about medical costs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Implementation Strategies */}
                <h2 id="heading-4" className="scroll-mt-24">
                  Implementation Strategies
                </h2>
                <p>
                  Implementing new billing technologies requires careful
                  planning and execution. Healthcare providers should consider
                  the following strategies to ensure a successful transition:
                </p>
                <ol>
                  <li>
                    <strong>Assess current workflows:</strong> Evaluate existing
                    billing processes to identify pain points and opportunities
                    for improvement.
                  </li>
                  <li>
                    <strong>Define clear objectives:</strong> Establish specific
                    goals for the implementation, such as reducing denial rates
                    or accelerating payment cycles.
                  </li>
                  <li>
                    <strong>Invest in staff training:</strong> Ensure that your
                    team is properly trained on the new system to maximize its
                    benefits.
                  </li>
                  <li>
                    <strong>Start with a phased approach:</strong> Implement
                    changes gradually to minimize disruption to your practice.
                  </li>
                  <li>
                    <strong>Monitor and optimize:</strong> Continuously evaluate
                    the performance of your billing system and make adjustments
                    as needed.
                  </li>
                </ol>

                {/* Future Outlook */}
                <h2 id="heading-5" className="scroll-mt-24">
                  Future Outlook
                </h2>
                <p>
                  The future of healthcare billing looks promising, with
                  continued advancements in technology driving further
                  improvements in efficiency and accuracy. As artificial
                  intelligence and machine learning capabilities evolve, we can
                  expect even more sophisticated solutions that adapt to the
                  changing healthcare landscape.
                </p>
                <p>
                  Forward-thinking healthcare providers who embrace these
                  innovations will be well-positioned to thrive in an
                  increasingly competitive environment, delivering better
                  patient care while maintaining strong financial performance.
                </p>
              </article>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {[
                  "Healthcare Technology",
                  "Medical Billing",
                  "AI in Healthcare",
                  "Revenue Cycle Management",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author Bio (Mobile) */}
              <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 lg:hidden">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  About the Author
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {author.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {author.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Dr. Johnson specializes in healthcare technology integration
                  and has over 15 years of experience working with medical
                  practices to optimize their operations through innovative
                  solutions.
                </p>
              </div>

              {/* Related Posts */}
              <RelatedPosts currentPostId={post.id} />

              {/* Newsletter Signup */}
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import { getBlogPost } from "@/server/db";
import Image from "next/image";

export default async function BlogPostPage({
  params: { id: blogPostId },
}: {
  params: { id: string };
}) {
  const blogPost = await getBlogPost(blogPostId);

  return (
    <>
      <section
        className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
        data-oid="qz7..fg"
      >
        <div className="container" data-oid="__si3tr">
          <h2 data-oid="xvbr1c5">{blogPost.title}</h2>
          <p data-oid="xn0t_52">{blogPost.author}</p>
          <Image
            src={blogPost.mainImage}
            alt={""}
            width={800}
            height={500}
            data-oid="p0r1keg"
          />

          <p data-oid="1q6:o5s">{blogPost.tagline}</p>
          <p data-oid="g925h_-">{blogPost.content}</p>
        </div>
      </section>
    </>
  );
}
