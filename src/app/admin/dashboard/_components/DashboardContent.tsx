"use client";

import { useEffect } from "react";

import {  useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

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
    if (user.publicMetadata.role !== "admin") {
      console.log(user.publicMetadata.role);
      router.push("/");
    }
  }, [user, isLoaded, router]);

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

        </div>
      </div>
    </section>
  );
};
