import { useEffect } from "react";
import { BlogPostForm } from "./BlogPostForm";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";

export const DashboardContent = () => {
  const { user, isLoaded } = useUser();

  const router = useRouter();

  // Move navigation to useEffect
  useEffect(() => {
    // Only check user after Clerk has loaded
    if (!isLoaded) return;

    // Redirect if not authenticated
    if (!user) {
      router.push("/sign-in");
      return;
    }

    // Role check - REVERSED from your original code
    // Only allow physicians on this page
    if (user.publicMetadata.role !== "physician") {
      console.log(user.publicMetadata.role);
      router.push("/");
    }
  }, [user, isLoaded, router]);

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section
      className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
      data-oid="3f09xtv"
    >
      <div className="container" data-oid="wqcwjvt">
        <div className="w-full px-4" data-oid="i2wc-.:">
          <div
            className="mx-auto max-w-[800px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]"
            data-oid=".wuegb6"
          >
            <h1
              className="mb-8 text-3xl font-bold text-black dark:text-white"
              data-oid="8a3oa0f"
            >
              Welcome, {user.firstName}
            </h1>
            <BlogPostForm data-oid="5yv-dt5" />
          </div>
        </div>
      </div>
    </section>
  );
};
