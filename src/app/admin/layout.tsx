import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Kyron",
  description: "Admin Dashboard Page for Kyron",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
