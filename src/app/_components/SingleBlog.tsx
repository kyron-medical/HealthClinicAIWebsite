import { BlogPost } from "@prisma/client";
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
        data-oid="oom0vr7"
      >
        <Link
          href={`/resources/blog/${id}`}
          className="relative block aspect-[37/22] w-full"
          data-oid="c6hkaym"
        >
          <Image
            src={mainImage}
            alt="image"
            layout="intrinsic"
            width={800}
            height={500}
            data-oid="l39yh8c"
          />
        </Link>
        <div
          className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"
          data-oid="zgbrhsw"
        >
          <h3 data-oid="gzcg2hy">
            <Link
              href={`/resources/blog/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              data-oid="ejg5rdf"
            >
              {title}
            </Link>
          </h3>

          <p
            className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
            data-oid="gc120am"
          >
            {content}
          </p>
          <div className="flex items-center" data-oid="nn_ntnj">
            <div
              className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"
              data-oid="yaopzxf"
            >
              <div className="mr-4" data-oid="466fjhm"></div>
              <div className="w-full" data-oid="u1vsjq9">
                <h4
                  className="mb-1 text-sm font-medium text-dark dark:text-white"
                  data-oid="us2d1s4"
                >
                  By {author}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2" data-oid="x.elug9">
              <div className="inline-block" data-oid="vkpge5f">
                <p className="text-xs text-body-color" data-oid="z.-uv79">
                  {createdAt.toLocaleDateString()}
                </p>
              </div>
              <div className="ml-auto" data-oid="imrpg_p">
                <Image
                  src={""} // The logo URL you want to use
                  alt="Logo"
                  className="h-8 w-auto" // Adjust size as needed
                  width={32}
                  height={32}
                  data-oid="k1_x-eq"
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
