import type { BlogPost } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: BlogPost }) => {
  const {
    createdAt,
    id,
    title,
    author,
    tagline,
    content,
    mainImage,
    imageUrls,
    updatedAt,
  } = blog;
  return (
    <>
      <div
        className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
        data-oid="k8u-9pa"
      >
        <Link
          href={`/resources/blog/${id}`}
          className="relative block aspect-[37/22] w-full"
          data-oid="0nyf.ur"
        >
          <Image
            src={mainImage}
            alt="image"
            layout="intrinsic"
            width={800}
            height={500}
            data-oid="-.f:7ky"
          />
        </Link>
        <div
          className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"
          data-oid="dx-cbs4"
        >
          <h3 data-oid="l5i1fqi">
            <Link
              href={`/resources/blog/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              data-oid="cksgesc"
            >
              {title}
            </Link>
          </h3>

          <p
            className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
            data-oid="79z5eqq"
          >
            {content}
          </p>
          <div className="flex items-center" data-oid="j24enh7">
            <div
              className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"
              data-oid="kp.yypf"
            >
              <div className="mr-4" data-oid="puzkqhu"></div>
              <div className="w-full" data-oid=":boyn2_">
                <h4
                  className="mb-1 text-sm font-medium text-dark dark:text-white"
                  data-oid="s8sydyu"
                >
                  By {author}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2" data-oid="4c2w5gu">
              <div className="inline-block" data-oid="5h0wm6k">
                <p className="text-xs text-body-color" data-oid="ui1ii1n">
                  {createdAt.toLocaleDateString()}
                </p>
              </div>
              <div className="ml-auto" data-oid="e2oh-sr">
                <Image
                  src={""} // The logo URL you want to use
                  alt="Logo"
                  className="h-8 w-auto" // Adjust size as needed
                  width={32}
                  height={32}
                  data-oid="t99zifs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
