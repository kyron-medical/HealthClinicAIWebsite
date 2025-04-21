import DashboardContent from "./_components/server/DashboardContent";

const Dashboard = () => {
  // This leverages Next.js automatic promise unwrapping for data fetching

  // Next.js will automatically handle the promise and suspend rendering until resolved
  return (
    <section className="pb-[120px] pt-[120px]" data-oid="oq5_5g2">
      <div className="container" data-oid=".pu5iw:">
        <DashboardContent data-oid="bmriigl" />
        
      </div>
    </section>
  );
};

export default Dashboard;
