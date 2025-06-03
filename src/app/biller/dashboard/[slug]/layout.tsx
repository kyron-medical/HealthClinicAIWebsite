import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biller Dashboard | Kyron",
  description: "Dashboard Page for Kyron",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
