import { Metadata } from "next";
import { DashboardContent } from "./_components/DashboardContent";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Kyron",
  description: "Dashboard Page for Kyron",
};

export default function Dashboard() {
  const user = currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <DashboardContent />;
      </div>
    </section>
  );
}
