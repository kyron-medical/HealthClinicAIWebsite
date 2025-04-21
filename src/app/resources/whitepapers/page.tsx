"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

import resourcesData from "../data/resource-data";
import Link from "next/link";
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
        data-oid="9.jqsql"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="oq5_5g2">
        <div className="container" data-oid=".pu5iw:">
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
                  <h3 className="mb-4 line-clamp-1 text-xl font-bold text-gray-900 dark:text-white ">
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
                    <button
                      onClick={() => {
                        setCurrentResource({
                          url: whitepaper.link,
                          title: whitepaper.title,
                        });
                        setModalOpen(true);
                      }}
                      className="inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
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
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitepapers;
