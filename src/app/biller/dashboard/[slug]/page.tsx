import DashboardContent from "./_components/server/DashboardContent";

const Dashboard = () => {
  // This leverages Next.js automatic promise unwrapping for data fetching

  // Next.js will automatically handle the promise and suspend rendering until resolved
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <DashboardContent />
      </div>
    </section>
  );
};

export default Dashboard;
