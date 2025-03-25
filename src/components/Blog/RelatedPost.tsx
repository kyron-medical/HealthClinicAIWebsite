import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex" data-oid="3g:d4cs">
      <div className="mr-5 lg:mb-3 xl:mb-0" data-oid="sc6zx_c">
        <div
          className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          data-oid="_nd8iw4"
        >
          <Image src={image} alt={title} fill data-oid="ym38nyk" />
        </div>
      </div>
      <div className="w-full" data-oid="-2s4n7-">
        <h5 data-oid="09tzv3c">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            data-oid="7.hfpsa"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color" data-oid="w0uq-:b">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
