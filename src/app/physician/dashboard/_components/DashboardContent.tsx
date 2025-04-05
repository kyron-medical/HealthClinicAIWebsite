"use client";

import { User } from "@clerk/nextjs/server";
import DashboardTabs from "./DashboardTabs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

interface DashboardContentProps {
  userPromise: Promise<User | null>;
}

export function DashboardContent() {
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

  return (
    <section
      className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
      data-oid="o3wuayi"
    >
      <div className="container" data-oid="kn72vrd">
        <h1 className="mb-6 text-2xl font-bold" data-oid="b4xook9">
          Physician Dashboard
        </h1>
        <DashboardTabs data-oid=":0cixnw" />
      </div>
    </section>
  );
}
