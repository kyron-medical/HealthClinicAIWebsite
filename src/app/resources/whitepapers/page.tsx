import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepapers | Kyron",
  description: "Whitepapers Page for Kyron",
};

const Whitepapers = async () => {
  return (
    <>
      <Breadcrumb
        pageName="Insights & Resources"
        description="Explore the latest healthcare technology trends, insights, and best practices to transform your practice and improve patient outcomes."
        data-oid="80pdtr3"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="j-n:wtj">
        <div className="container" data-oid="7ak67_a">
          <h2
            className="self-centerleading-tight mb-8 flex items-center justify-center text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight"
            data-oid="jv6h.c7"
          >
            Coming soon...
          </h2>
        </div>
      </section>
    </>
  );
};

export default Whitepapers;
