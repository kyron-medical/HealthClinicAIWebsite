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
    <div className="flex items-center lg:block xl:flex" data-oid="qijs_8k">
      <div className="mr-5 lg:mb-3 xl:mb-0" data-oid="27a:d0w">
        <div
          className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          data-oid="dl7t1hl"
        >
          <Image src={image} alt={title} fill data-oid="hu:gwx6" />
        </div>
      </div>
      <div className="w-full" data-oid="pplcep4">
        <h5 data-oid="gbomz5v">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            data-oid="wo.2rjb"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color" data-oid=".ztd.f1">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
