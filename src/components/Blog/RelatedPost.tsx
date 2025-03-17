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
    <div className="flex items-center lg:block xl:flex" data-oid=":wfhth_">
      <div className="mr-5 lg:mb-3 xl:mb-0" data-oid="b-3s_5q">
        <div
          className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          data-oid="r4asl3l"
        >
          <Image src={image} alt={title} fill data-oid="zmep5b-" />
        </div>
      </div>
      <div className="w-full" data-oid="mb33ngp">
        <h5 data-oid="1wfe0of">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            data-oid="qohl1_2"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color" data-oid="h-6pdis">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
