"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

import resourcesData from "../data/resource-data";
import { FaFilePdf } from "react-icons/fa6";
import { useState } from "react";
import ResourceModal from "../_components/ui/resource-modal";

const Whitepapers = () => {
  // Add state for the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentResource, setCurrentResource] = useState({
    url: "",
    title: "",
  });

  const whitepapersData = resourcesData.filter((resource) => {
    return resource.resourceType === "Whitepaper";
  });
  return (
    <>
      <Breadcrumb
        pageName="Whitepapers"
        description="Explore the latest healthcare technology trends, insights, and best practices to transform your practice and improve patient outcomes."
        data-oid="w-o51ki"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="n1c6f3-">
        <div className="container" data-oid="j8nwaij">
          {/* Make a grid of whitepapers, 3 col  */}
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            data-oid="68-5e0:"
          >
            {whitepapersData.map((whitepaper) => (
              <div
                key={whitepaper.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                data-oid="ds:eb7x"
              >
                {/* PDF icon */}
                <div className="overflow-hidden pl-8 pt-8" data-oid="9wrjpas">
                  <FaFilePdf
                    className="text-2xl text-blue-500"
                    data-oid="npgayto"
                  />
                </div>

                <div className="flex h-full flex-col p-6" data-oid="wd_jp.o">
                  <h3
                    className="mb-4 line-clamp-1 text-xl font-bold text-gray-900 dark:text-white "
                    data-oid="-1g1919"
                  >
                    {whitepaper.title}
                  </h3>

                  <div className="min-h-[4.5rem]" data-oid="m9.3nzz">
                    <p
                      className="line-clamp-3 text-lg text-gray-600 dark:text-gray-300"
                      data-oid="8yk-t:0"
                    >
                      {whitepaper.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-4" data-oid="2ojiwkx">
                    <hr className="mb-4" data-oid="o5pe067" />
                    <button
                      onClick={() => {
                        setCurrentResource({
                          url: whitepaper.link,
                          title: whitepaper.title,
                        });
                        setModalOpen(true);
                      }}
                      className="inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                      data-oid="ty27m7d"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add the modal at the bottom of your component */}
            <ResourceModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              resourceUrl={currentResource.url}
              resourceTitle={currentResource.title}
              data-oid="aw-nj6s"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitepapers;
