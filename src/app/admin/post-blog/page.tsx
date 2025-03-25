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
        data-oid="gn51ugq"
      >
        <div className="container" data-oid="89ixxlb">
          <div className="w-full px-4" data-oid="kjbpohk">
            <div
              className="mx-auto max-w-[800px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]"
              data-oid="ee_xe48"
            >
              <h1
                className="mb-8 text-3xl font-bold text-black dark:text-white"
                data-oid="pns8igx"
              >
                Welcome, {user?.firstName}
              </h1>

              <div className="mb-12" data-oid="mv:-dxh">
                <h2
                  className="mb-6 text-2xl font-semibold text-black dark:text-white"
                  data-oid="7kdko59"
                >
                  Recent Blog Posts
                </h2>
                <div
                  className="grid grid-cols-1 gap-6 md:grid-cols-2"
                  data-oid="ke41k.j"
                >
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="rounded-lg border border-gray-200 p-6 dark:border-gray-700"
                      data-oid="zxp.u.z"
                    >
                      <h3
                        className="mb-3 text-xl font-semibold text-black dark:text-white"
                        data-oid="cqst0tj"
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-body-color dark:text-body-color-dark"
                        data-oid="6j293o9"
                      >
                        {post.tagline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="border-t border-gray-200 pt-8 dark:border-gray-700"
                data-oid="ndt_ju4"
              >
                <h2
                  className="mb-6 text-2xl font-semibold text-black dark:text-white"
                  data-oid="dg9ktmj"
                >
                  Create New Blog Post
                </h2>
                <BlogPostForm data-oid="vkha0h." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
