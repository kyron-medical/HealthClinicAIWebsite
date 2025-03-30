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
        data-oid="jlm50fw"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="98vzxom">
        <div className="container" data-oid=":8ms3ln">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="j3zm364"
          >
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                data-oid="ztr6zfk"
              >
                <SingleBlog blog={blog} data-oid="zst.ijs" />
              </div>
            ))}
          </div>

          <div
            className="-mx-4 flex flex-wrap"
            data-wow-delay=".15s"
            data-oid=".zx3a4z"
          >
            <div className="w-full px-4" data-oid="uvi55ux">
              <ul
                className="flex items-center justify-center pt-8"
                data-oid="w.a7:0t"
              >
                <li className="mx-1" data-oid="ghn497p">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="nn2rfdh"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1" data-oid="szf44r8">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="msqfuxv"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1" data-oid="-q2690n">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="5lcr0ej"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1" data-oid="8bewb7b">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="neib0r7"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1" data-oid="uzyqhad">
                  <span
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                    data-oid="fvczuy3"
                  >
                    ...
                  </span>
                </li>
                <li className="mx-1" data-oid="e7mm3m4">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="jv33_pv"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1" data-oid="2b0c74:">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="et61-e5"
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
