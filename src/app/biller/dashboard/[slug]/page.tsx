
import DashboardContent from "./_components/server/DashboardContent";

const Dashboard = () => {
  // This leverages Next.js automatic promise unwrapping for data fetching

  // Next.js will automatically handle the promise and suspend rendering until resolved
  console.log(process.env.DATABASE_URL);
  return (
    <section className="pb-[120px] pt-[120px]" data-oid="mp6-t_t">
      <div className="container" data-oid="7e:v6vr">
        <DashboardContent data-oid="u.3w2un" />
      </div>
    </section>
  );
};

export default Dashboard;
