import { getBlogPosts } from "@/server/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BlogPostForm } from "./_components/BlogPostForm";

export default async function ProtectedPage() {
  const user = await currentUser();
  const blogPosts = await getBlogPosts();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
              <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">
                Welcome, {user?.firstName}
              </h1>

              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
                  Recent Blog Posts
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="rounded-lg border border-gray-200 p-6 dark:border-gray-700"
                    >
                      <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                        {post.title}
                      </h3>
                      <p className="text-body-color dark:text-body-color-dark">
                        {post.tagline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
                <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
                  Create New Blog Post
                </h2>
                <BlogPostForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
