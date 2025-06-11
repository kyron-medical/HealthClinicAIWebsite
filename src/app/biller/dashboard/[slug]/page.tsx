import DashboardContent from "./_components/server/DashboardContent";

const Dashboard = () => {
  // This leverages Next.js automatic promise unwrapping for data fetching

  // Next.js will automatically handle the promise and suspend rendering until resolved
  console.log(process.env.DATABASE_URL);
  return (
    <section className="pb-[120px] pt-[120px]" data-oid=":g4potu">
      <div className="container" data-oid="w3:.ccc">
        <DashboardContent data-oid="tfcwa5:" />
      </div>
    </section>
  );
};

export default Dashboard;
