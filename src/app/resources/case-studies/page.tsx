import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Case Studies | Kyron",
  description: "Case Studies Page for Kyron",
};

const CaseStudies = async () => {
  return (
    <>
      <Breadcrumb
        pageName="Insights & Resources"
        description="Explore the latest healthcare technology trends, insights, and best practices to transform your practice and improve patient outcomes."
        data-oid="45w6i-g"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="res_7q1">
        <div className="container" data-oid="37kwva5">
          <h2
            className="mb-8 text-3xl flex justify-center items-center self-center font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight"
            data-oid="ptcm_gy"
          >
            Coming soon...
          </h2>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
