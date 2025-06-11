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
        data-oid="qcraya9"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="f3i4hvf">
        <div className="container" data-oid="bb4mxgl">
          {/* Make a grid of whitepapers, 3 col  */}
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            data-oid="j_i4qwr"
          >
            {caseStudiesData.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                data-oid=":pm_48s"
              >
                {/* pdf file icon */}
                <div
                  className="overflow-hidden pl-8 pt-8 text-2xl text-blue-500"
                  data-oid="0:aewlt"
                >
                  <FaFilePdf data-oid="7j1:6xh" />
                </div>
                <div className="p-6" data-oid="oh22fsl">
                  <h3
                    className="mb-4 line-clamp-1 text-xl font-bold text-gray-900 dark:text-white"
                    data-oid="o960wab"
                  >
                    {caseStudy.title}
                  </h3>
                  <p
                    className="line-clamp-2 text-lg text-gray-600  dark:text-gray-300"
                    data-oid=":lwtn8r"
                  >
                    {caseStudy.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-4" data-oid="t312v:m">
                    <hr className="mb-4" data-oid="ibj_ryt" />
                    <button
                      onClick={() => {
                        setCurrentResource({
                          url: caseStudy.link,
                          title: caseStudy.title,
                        });
                        setModalOpen(true);
                      }}
                      className="inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                      data-oid="xxi2v.m"
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
              data-oid="70vgnh:"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
