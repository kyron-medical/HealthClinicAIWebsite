import { Metadata } from "next";
import { DashboardContent } from "./_components/DashboardContent";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Kyron",
  description: "Dashboard Page for Kyron",
};

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (user.publicMetadata.role !== "admin") {
    redirect("/");
  }

  return (
    <section
      className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
      data-oid=".b1u_w0"
    >
      <div className="container" data-oid="74_awx_">
        <DashboardContent data-oid="_mt16tu" />
      </div>
    </section>
  );
}
