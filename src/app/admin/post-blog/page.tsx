import { getBlogPosts } from "@/server/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BlogPostForm } from "./_components/BlogPostForm";

export const dynamic = "force-dynamic";

export default async function PostBlogPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Check if user is admin using publicMetadata
  if (user.publicMetadata.role !== "admin") {
    redirect("/");
  }

  return (
    <section
      className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
      data-oid="mz2212w"
    >
      <div className="container" data-oid="cz71lr:">
        <div className="w-full px-4" data-oid="gx15lnp">
          <div
            className="mx-auto max-w-[800px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]"
            data-oid="mweh7yi"
          >
            <h1
              className="mb-8 text-3xl font-bold text-black dark:text-white"
              data-oid="w23jsas"
            >
              Welcome, {user.firstName}
            </h1>
            <BlogPostForm data-oid="k99xh7a" />
          </div>
        </div>
      </div>
    </section>
  );
}
