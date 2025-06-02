"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

import resourcesData from "../data/resource-data";
import { FaFilePdf } from "react-icons/fa6";
import ResourceModal from "../_components/ui/resource-modal";
import { useState } from "react";

const CaseStudies = () => {
  // Add state for the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentResource, setCurrentResource] = useState({
    url: "",
    title: "",
  });

  const caseStudiesData = resourcesData.filter((resource) => {
    return resource.resourceType === "Case Study";
  });
  return (
    <>
      <Breadcrumb
        pageName="Case Studies"
        description="Explore the latest healthcare technology trends, insights, and best practices to transform your practice and improve patient outcomes."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          {/* Make a grid of whitepapers, 3 col  */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudiesData.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                {/* pdf file icon */}
                <div className="overflow-hidden pl-8 pt-8 text-2xl text-blue-500">
                  <FaFilePdf />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 line-clamp-1 text-xl font-bold text-gray-900 dark:text-white">
                    {caseStudy.title}
                  </h3>
                  <p className="line-clamp-2 text-lg text-gray-600  dark:text-gray-300">
                    {caseStudy.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-4">
                    <hr className="mb-4" />
                    <button
                      onClick={() => {
                        setCurrentResource({
                          url: caseStudy.link,
                          title: caseStudy.title,
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

export default CaseStudies;
