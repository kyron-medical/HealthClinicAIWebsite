import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import whitepapersData from "./data/whitepapers-data";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa6";

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
        data-oid="9.jqsql"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="oq5_5g2">
        <div className="container" data-oid=".pu5iw:">
          <h2
            className="self-centerleading-tight mb-8 flex items-center justify-center text-3xl font-bold text-black dark:text-white sm:text-4xl sm:leading-tight"
            data-oid="9r5azi-"
          >
            Whitepapers
          </h2>
          {/* Make a grid of whitepapers, 3 col  */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {whitepapersData.map((whitepaper) => (
              <div
                key={whitepaper.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                {/* PDF icon */}
                <div className="overflow-hidden pl-8 pt-8">
                  <FaFilePdf className="text-2xl text-blue-500" />
                </div>

                <div className="flex h-full flex-col p-6">
                  <h3 className="line-clamp-1 mb-4 text-xl font-bold text-gray-900 dark:text-white ">
                    {whitepaper.title}
                  </h3>

                  <div className="min-h-[4.5rem]">
                    <p className="line-clamp-3 text-lg text-gray-600 dark:text-gray-300">
                      {whitepaper.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-4">
                    <hr className="mb-4" />
                    <Link href={whitepaper.link}>
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

export default Whitepapers;
