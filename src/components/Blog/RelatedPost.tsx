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
    <div className="flex items-center lg:block xl:flex" data-oid="2qzqi-l">
      <div className="mr-5 lg:mb-3 xl:mb-0" data-oid="75rq1s5">
        <div
          className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          data-oid="6kdp.ez"
        >
          <Image src={image} alt={title} fill data-oid="7_:n:--" />
        </div>
      </div>
      <div className="w-full" data-oid="cg:eg08">
        <h5 data-oid=".:yng3s">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            data-oid=".yw9y5c"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color" data-oid="nbloduk">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
