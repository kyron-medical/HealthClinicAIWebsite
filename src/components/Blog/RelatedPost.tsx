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
    <div className="flex items-center lg:block xl:flex" data-oid="7rfa8qw">
      <div className="mr-5 lg:mb-3 xl:mb-0" data-oid=".qyc9k3">
        <div
          className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
          data-oid="6pix:3m"
        >
          <Image src={image} alt={title} fill data-oid="1l6wwl0" />
        </div>
      </div>
      <div className="w-full" data-oid="bx.3qhj">
        <h5 data-oid="v:53mv_">
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            data-oid="ngu-mfe"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color" data-oid=".h6ji4m">
          {date}
        </p>
      </div>
    </div>
  );
};

export default RelatedPost;
