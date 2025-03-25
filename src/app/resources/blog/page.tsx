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
        data-oid="u7ksxzj"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="mmpfo91">
        <div className="container" data-oid="ad0c7:a">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="w71rja."
          >
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                data-oid="sbz6rf2"
              >
                <SingleBlog blog={blog} data-oid="8icoa2t" />
              </div>
            ))}
          </div>

          <div
            className="-mx-4 flex flex-wrap"
            data-wow-delay=".15s"
            data-oid="vejosz2"
          >
            <div className="w-full px-4" data-oid="gzwrozz">
              <ul
                className="flex items-center justify-center pt-8"
                data-oid="t7oee9:"
              >
                <li className="mx-1" data-oid="xry3iwp">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="7y_ywo."
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1" data-oid="ca12.bf">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="si-yxan"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1" data-oid="hjh:55w">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid=".afdahf"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1" data-oid="6j0p7pm">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="birgn60"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1" data-oid="1k5e0kw">
                  <span
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                    data-oid="m2.75pc"
                  >
                    ...
                  </span>
                </li>
                <li className="mx-1" data-oid="8r65o_8">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="clz0b58"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1" data-oid="q2_3rgh">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="kk1mthf"
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
