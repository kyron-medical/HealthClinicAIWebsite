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
        data-oid="rfq8n_c"
      >
        <Link
          href={`/resources/blog/${id}`}
          className="relative block aspect-[37/22] w-full"
          data-oid="xnddp00"
        >
          <Image
            src={mainImage}
            alt="image"
            layout="intrinsic"
            width={800}
            height={500}
            data-oid="u4_.73q"
          />
        </Link>
        <div
          className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"
          data-oid="mn-nlmf"
        >
          <h3 data-oid="at_m6ds">
            <Link
              href={`/resources/blog/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              data-oid="ttdbim4"
            >
              {title}
            </Link>
          </h3>

          <p
            className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
            data-oid="0-a5pcj"
          >
            {content}
          </p>
          <div className="flex items-center" data-oid="6etlevd">
            <div
              className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"
              data-oid="7r_3oq."
            >
              <div className="mr-4" data-oid="nnpy08_"></div>
              <div className="w-full" data-oid="pdqu2-s">
                <h4
                  className="mb-1 text-sm font-medium text-dark dark:text-white"
                  data-oid="tigmwu4"
                >
                  By {author}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2" data-oid="ew76350">
              <div className="inline-block" data-oid="d1mr.1p">
                <p className="text-xs text-body-color" data-oid="ssyq3kx">
                  {createdAt.toLocaleDateString()}
                </p>
              </div>
              <div className="ml-auto" data-oid="pqieso5">
                <Image
                  src={""} // The logo URL you want to use
                  alt="Logo"
                  className="h-8 w-auto" // Adjust size as needed
                  width={32}
                  height={32}
                  data-oid="1kqtfri"
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
