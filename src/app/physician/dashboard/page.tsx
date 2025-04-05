import { DashboardContent } from "@/app/physician/dashboard/_components/DashboardContent";

const Dashboard = () => {
  // This leverages Next.js automatic promise unwrapping for data fetching

  // Next.js will automatically handle the promise and suspend rendering until resolved
  return <DashboardContent data-oid="bmriigl" />;
};

export default Dashboard;
