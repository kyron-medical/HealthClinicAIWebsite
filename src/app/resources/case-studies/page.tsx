import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import caseStudiesData from "./data/case-studies-data";
import { FaFilePdf } from "react-icons/fa6";

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
        data-oid="9.jqsql"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="oq5_5g2">
        <div className="container" data-oid=".pu5iw:">
          <h2
            className="self-centerleading-tight mb-8 flex items-center justify-center text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight"
            data-oid="9r5azi-"
          >
            Case Studies
          </h2>
          {/* Make a grid of whitepapers, 3 col  */}
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            data-oid="81jk218"
          >
            {caseStudiesData.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                data-oid="81jk218"
              >
                {/* pdf file icon */}
                <div
                  className="overflow-hidden pl-8 pt-8 text-2xl text-blue-500"
                  data-oid=".7sazt4"
                >
                  <FaFilePdf />
                </div>
                <div className="p-6" data-oid="pcccapk">
                  <h3
                    className="mb-4 line-clamp-1 text-xl font-bold text-gray-900 dark:text-white"
                    data-oid="d66izyb"
                  >
                    {caseStudy.title}
                  </h3>
                  <p
                    className="line-clamp-2 text-lg text-gray-600  dark:text-gray-300"
                    data-oid="5eyvu2z"
                  >
                    {caseStudy.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-4">
                    <hr className="mb-4" />
                    <Link href={caseStudy.link}>
                      <button className="inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
