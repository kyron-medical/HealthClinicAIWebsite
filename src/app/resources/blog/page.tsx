"use client";

import SingleBlog from "@/app/_components/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { getBlogPosts } from "@/server/db";
import Link from "next/link";
import { TbLogs } from "react-icons/tb";
import resourcesData from "../data/resource-data";
import Image from "next/image";
import { useState } from "react";
import ResourceModal from "../_components/ui/resource-modal";

const Blog = () => {
  // Add state for the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentResource, setCurrentResource] = useState({
    url: "",
    title: "",
  });

  const blogData = resourcesData.filter((resource) => {
    return resource.resourceType === "Blog";
  });

  return (
    <>
      <Breadcrumb
        pageName="Blogs"
        description="Explore the latest healthcare technology trends, insights, and best practices to transform your practice and improve patient outcomes."
        data-oid="77ujja3"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="ymc1qf5">
        <div className="container" data-oid="4g8eugt">
          {/* <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="dzthi4m"
          >
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                data-oid="-ony8ex"
              >
                <SingleBlog blog={blog} data-oid="d9.xoc2" />
              </div>
            ))}
          </div> */}

          {/* Make a grid of whitepapers, 3 col  */}
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            data-oid="81jk218"
          >
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                data-oid="81jk218"
              >
                {/* pdf file icon */}
                <div
                  className="overflow-hidden pl-8 pt-8 text-2xl text-blue-500"
                  data-oid=".7sazt4"
                >
                  <TbLogs />
                </div>
                <div className="p-6" data-oid="pcccapk">
                  <h3
                    className="mb-4 line-clamp-1 text-xl font-bold text-gray-900 dark:text-white"
                    data-oid="d66izyb"
                  >
                    {blog.title}
                  </h3>
                  <p
                    className="line-clamp-1 text-lg text-gray-600  dark:text-gray-300"
                    data-oid="5eyvu2z"
                  >
                    {blog.description}
                  </p>

                  <div className="mb-4 mt-4 aspect-[16/6] overflow-hidden rounded-lg">
                    <Image
                      src={blog.image!}
                      alt={blog.title}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Footer */}
                  <div className="mt-4">
                    <hr className="mb-4" />
                    <button
                      onClick={() => {
                        setCurrentResource({
                          url: blog.link,
                          title: blog.title,
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

            <ResourceModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              resourceUrl={currentResource.url}
              resourceTitle={currentResource.title}
            />
          </div>

          {/* <div
            className="-mx-4 flex flex-wrap"
            data-wow-delay=".15s"
            data-oid="go_fwz9"
          >
            <div className="w-full px-4" data-oid="85_8hai">
              <ul
                className="flex items-center justify-center pt-8"
                data-oid="bdprl14"
              >
                <li className="mx-1" data-oid=".sycw76">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="aq2axjp"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1" data-oid="my6b_95">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="lk4q8g_"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1" data-oid="vspvj8l">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="r7ydrmx"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1" data-oid="gkb26hf">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="ssgfe1-"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1" data-oid=":b_j1f-">
                  <span
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                    data-oid="ihl96oi"
                  >
                    ...
                  </span>
                </li>
                <li className="mx-1" data-oid="xajq44_">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="a.xr:jp"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1" data-oid="cp0sg-d">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="_xpmp2j"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
