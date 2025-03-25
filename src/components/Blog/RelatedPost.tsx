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
    <div className="flex items-center lg:block xl:flex" data-oid="j2iu:p.">
      <div className="mr-5 lg:mb-3 xl:mb-0" data-oid="2i:5rz8">
        <div
          className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          data-oid="7ayy5os"
        >
          <Image src={image} alt={title} fill data-oid="ibgub-a" />
        </div>
      </div>
      <div className="w-full" data-oid="90lg0mk">
        <h5 data-oid="0efywvm">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            data-oid="tcpo7u8"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color" data-oid="mr9637l">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
