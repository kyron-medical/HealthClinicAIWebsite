import { getBlogPosts } from "@/server/db";
import { currentUser, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { BlogPostForm } from "./_components/BlogPostForm";

export const dynamic = 'force-dynamic';

export default async function PostBlogPage() {
  const data = await auth();
  const user = await currentUser();

  if (!data) {
    redirect("/sign-in");
  }

  // Check if user is admin
  if (data.sessionClaims?.role !== "admin") {
    redirect("/");
  }

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[800px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">
              Welcome, {user.firstName}
            </h1>
            <BlogPostForm />
          </div>
        </div>
      </div>
    </section>
  );
}

