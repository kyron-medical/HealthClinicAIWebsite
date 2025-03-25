import SingleBlog from "@/app/_components/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { getBlogPosts } from "@/server/db";

export const metadata: Metadata = {
  title: "Blog | Kyron",
  description: "Blog Page for Kyron",
};

const Blog = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <Breadcrumb
        pageName="Insights & Resources"
        description="Explore the latest healthcare technology trends, insights, and best practices to transform your practice and improve patient outcomes."
        data-oid="em020cq"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="hqwsoff">
        <div className="container" data-oid=".x66je_">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="obum1q2"
          >
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                data-oid="sgn8ypa"
              >
                <SingleBlog blog={blog} data-oid="dbsf471" />
              </div>
            ))}
          </div>

          <div
            className="-mx-4 flex flex-wrap"
            data-wow-delay=".15s"
            data-oid="e5b0b0v"
          >
            <div className="w-full px-4" data-oid="q2su.nj">
              <ul
                className="flex items-center justify-center pt-8"
                data-oid="1815jlf"
              >
                <li className="mx-1" data-oid="6::q94h">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid=".jp251e"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1" data-oid="_eck6n5">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="_vvn8ez"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1" data-oid="qoay-8r">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="lf4_766"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1" data-oid="h6i9flb">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="cnjh_vd"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1" data-oid="uxfywi6">
                  <span
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                    data-oid="7wf_li-"
                  >
                    ...
                  </span>
                </li>
                <li className="mx-1" data-oid="dvr4np3">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="fe.dqvp"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1" data-oid="f8lpuzj">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="1vt8ue."
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
