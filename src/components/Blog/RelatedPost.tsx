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
    <div className="flex items-center lg:block xl:flex" data-oid="t6x09ff">
      <div className="mr-5 lg:mb-3 xl:mb-0" data-oid="jcvq7gs">
        <div
          className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          data-oid="w9ljnii"
        >
          <Image src={image} alt={title} fill data-oid="gf8kqsz" />
        </div>
      </div>
      <div className="w-full" data-oid="wlke7._">
        <h5 data-oid="hzg_npn">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            data-oid="cholpd7"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color" data-oid="cpslubx">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
