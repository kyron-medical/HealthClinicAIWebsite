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
      data-oid="f7gvg2m"
    >
      <div className="container" data-oid="4uewx8p">
        <div className="w-full px-4" data-oid="bttb.c1">
          <div
            className="mx-auto max-w-[800px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]"
            data-oid="rcn1srr"
          >
            <h1
              className="mb-8 text-3xl font-bold text-black dark:text-white"
              data-oid="66g8bgg"
            >
              Welcome, {user.firstName}
            </h1>
            <BlogPostForm data-oid="69p33h6" />
          </div>
        </div>
      </div>
    </section>
  );
}
