import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, publishDate, link, logoUrl } = blog;
  return (
    <>
      <div
        className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
        data-oid="8aeff:_"
      >
        <Link
          href={link}
          className="relative block aspect-[37/22] w-full"
          data-oid="_k3_4u2"
        >
          <Image
            src={image}
            alt="image"
            layout="intrinsic"
            width={800}
            height={500}
            data-oid="pf.o06a"
          />
        </Link>
        <div
          className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"
          data-oid="-urrqm_"
        >
          <h3 data-oid="ztsvq2y">
            <Link
              href={link}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              data-oid="tg4u:4v"
            >
              {title}
            </Link>
          </h3>

          <p
            className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
            data-oid="1a50pv."
          >
            {paragraph}
          </p>
          <div className="flex items-center" data-oid="rr:0u_8">
            <div
              className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"
              data-oid="fb2gtwe"
            >
              <div className="mr-4" data-oid="r4rrgc9"></div>
              <div className="w-full" data-oid="x:-1g9k">
                <h4
                  className="mb-1 text-sm font-medium text-dark dark:text-white"
                  data-oid="mn7zd2z"
                >
                  By {author.name}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2" data-oid="b:4yubs">
              <div className="inline-block" data-oid="-wqzryt">
                <p className="text-xs text-body-color" data-oid="ej0m.57">
                  {publishDate}
                </p>
              </div>
              <div className="ml-auto" data-oid="iuk5_te">
                <Image
                  src={logoUrl} // The logo URL you want to use
                  alt="Logo"
                  className="h-8 w-auto" // Adjust size as needed
                  width={32}
                  height={32}
                  data-oid="w:vda8a"
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
