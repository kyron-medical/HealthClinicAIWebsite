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
        data-oid="6uryj51"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="ux9jgmu">
        <div className="container" data-oid=".sazeax">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="y:6yk0v"
          >
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                data-oid="x:m8-ro"
              >
                <SingleBlog blog={blog} data-oid=".zx:8w1" />
              </div>
            ))}
          </div>

          <div
            className="-mx-4 flex flex-wrap"
            data-wow-delay=".15s"
            data-oid="w_d9hhl"
          >
            <div className="w-full px-4" data-oid="1yoz58l">
              <ul
                className="flex items-center justify-center pt-8"
                data-oid="dch0lgm"
              >
                <li className="mx-1" data-oid="sdv4aly">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="svv1oxu"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1" data-oid="hlt-ume">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="v7s4bfw"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1" data-oid="mg2vd.s">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="3dx:emh"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1" data-oid="95rpc0c">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="znh0zxu"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1" data-oid="fkpit81">
                  <span
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                    data-oid="s0f2rqg"
                  >
                    ...
                  </span>
                </li>
                <li className="mx-1" data-oid="4q52b1a">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="b:dp8fm"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1" data-oid="gggwesu">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="-ojy5jh"
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
