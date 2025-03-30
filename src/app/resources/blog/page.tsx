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
        data-oid="xpf.f7f"
      />

      <section className="pb-[120px] pt-[120px]" data-oid=".0bus1o">
        <div className="container" data-oid=":itwg:t">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="l.zaxpz"
          >
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                data-oid="x0ajr25"
              >
                <SingleBlog blog={blog} data-oid="r.c6m9k" />
              </div>
            ))}
          </div>

          <div
            className="-mx-4 flex flex-wrap"
            data-wow-delay=".15s"
            data-oid="8grc8be"
          >
            <div className="w-full px-4" data-oid="_726533">
              <ul
                className="flex items-center justify-center pt-8"
                data-oid="bo..v6i"
              >
                <li className="mx-1" data-oid=":ejs5-a">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="-mqg:kj"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1" data-oid="vq18kmu">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="h4n_fmw"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1" data-oid="vm.3slc">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="3aia112"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1" data-oid="sme41e_">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="eb-msv:"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1" data-oid="y:jxtne">
                  <span
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                    data-oid="0_lpjas"
                  >
                    ...
                  </span>
                </li>
                <li className="mx-1" data-oid="xk:mwfg">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="br6j73i"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1" data-oid="2s7or.p">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    data-oid="cqbxc4s"
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
