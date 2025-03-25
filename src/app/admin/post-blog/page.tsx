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
      <section
        className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
        data-oid="r8_.odz"
      >
        <div className="container" data-oid="jgp60.h">
          <div className="w-full px-4" data-oid="n5r9gha">
            <div
              className="mx-auto max-w-[800px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]"
              data-oid="pvvq79n"
            >
              <h1
                className="mb-8 text-3xl font-bold text-black dark:text-white"
                data-oid="dat-.28"
              >
                Welcome, {user?.firstName}
              </h1>

              <div className="mb-12" data-oid=":g4t61o">
                <h2
                  className="mb-6 text-2xl font-semibold text-black dark:text-white"
                  data-oid="ihrj243"
                >
                  Recent Blog Posts
                </h2>
                <div
                  className="grid grid-cols-1 gap-6 md:grid-cols-2"
                  data-oid="g5njv4."
                >
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="rounded-lg border border-gray-200 p-6 dark:border-gray-700"
                      data-oid="nopbspb"
                    >
                      <h3
                        className="mb-3 text-xl font-semibold text-black dark:text-white"
                        data-oid="_pc1m2a"
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-body-color dark:text-body-color-dark"
                        data-oid="o:htji0"
                      >
                        {post.tagline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="border-t border-gray-200 pt-8 dark:border-gray-700"
                data-oid="ik2p9qv"
              >
                <h2
                  className="mb-6 text-2xl font-semibold text-black dark:text-white"
                  data-oid="k_nbwcl"
                >
                  Create New Blog Post
                </h2>
                <BlogPostForm data-oid="hxo2sk_" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
