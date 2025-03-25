import { getBlogPost } from "@/server/db";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { SocialShareButtons } from "./_components/SocialShareButtons";
import { AuthorInfo } from "./_components/AuthorInfo";
import { RelatedPosts } from "./_components/RelatedPosts";
import { NewsletterSignup } from "./_components/NewsletterSignup";
import { TableOfContents } from "./_components/TableOfContents";

const sampleHeadings = [
  "Introduction",
  "The Challenge in Healthcare",
  "How AI is Transforming Medical Billing",
  "Benefits for Healthcare Providers",
  "Implementation Strategies",
  "Future Outlook",
];

const author = {
  name: "Dr. Sarah Johnson",
  role: "Healthcare Technology Specialist",
  avatar: "/images/blog/author.jpg",
};

export default async function BlogPost({
  params: { id: blogPostId },
}: {
  params: { id: string };
}) {
  const post = await getBlogPost(blogPostId);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Blog Post Not Found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The blog post you`&apos;`re looking for doesn`&apos;`t exist.
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
                src={post.mainImage}
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
                    Healthcare
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.createdAt.toLocaleDateString("en-US", {
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
            {/* Table of Contents Sidebar */}
            <div className="hidden lg:block">
              <TableOfContents headings={sampleHeadings} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none dark:prose-invert">
                <p>{post.content}</p>
                {/* Add more content sections as needed */}
              </article>

              {/* Related Posts */}
              <RelatedPosts currentPostId={blogPostId} />

              {/* Newsletter Signup */}
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

