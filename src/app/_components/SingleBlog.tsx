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
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/resources/blog/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <Image
            src={mainImage}
            alt="image"
            layout="intrinsic"
            width={800}
            height={500}
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/resources/blog/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>

          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {content}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4"></div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-block">
                <p className="text-xs text-body-color">
                  {createdAt.toLocaleDateString()}
                </p>
              </div>
              <div className="ml-auto">
                <Image
                  src={""} // The logo URL you want to use
                  alt="Logo"
                  className="h-8 w-auto" // Adjust size as needed
                  width={32}
                  height={32}
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
