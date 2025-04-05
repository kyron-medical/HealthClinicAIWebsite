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
        data-oid="77ujja3"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="ymc1qf5">
        <div className="container" data-oid="4g8eugt">
          <div
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
          </div>

          <div
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
