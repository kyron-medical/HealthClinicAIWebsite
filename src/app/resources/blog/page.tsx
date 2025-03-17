import SingleBlog from "@/app/news/_components/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Kyron",
  description: "Blog Page for Kyron",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Insights & Resources"
        description="Explore the latest healthcare technology trends, insights, and best practices to transform your practice and improve patient outcomes."
        data-oid="529qpwi"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="z1m7kd_">
        <div className="container" data-oid="uakn26.">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="5w-:uyx"
          >
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                data-oid="8p6v1ld"
              >
                <SingleBlog blog={blog} data-oid="l02nye8" />
              </div>
            ))}
          </div>

          <div
            className="-mx-4 flex flex-wrap"
            data-wow-delay=".15s"
            data-oid="f7nhsnw"
          >
            <div className="w-full px-4" data-oid="v2xvy-2">
              <ul
                className="flex items-center justify-center pt-8"
                data-oid="8:sqr7h"
              >
                <li className="mx-1" data-oid="v7.yq66">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="0zwtrsj"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1" data-oid="4h6gpz1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="i:f4pj4"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1" data-oid="4vww:65">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="ds4h7ag"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1" data-oid="66ogo:w">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="_y2vwsl"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1" data-oid="7tjzmts">
                  <span
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                    data-oid="hk7ivb8"
                  >
                    ...
                  </span>
                </li>
                <li className="mx-1" data-oid="kwjx0x6">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="2kb:2w0"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1" data-oid="7pmx3:h">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="0civc9m"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
