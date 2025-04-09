import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physician Dashboard | Kyron",
  description: "Dashboard Page for Kyron",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
