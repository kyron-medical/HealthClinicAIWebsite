import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    className="fill-current"
    data-oid="9_nmr2h"
  >
    <path
      d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"
      data-oid="i2b.en."
    />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons: JSX.Element[] = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow" data-oid="dyqq0iy">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full" data-oid="dbal1l2">
      <div
        className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
        data-oid=".7xpppu"
      >
        <div className="mb-5 flex items-center space-x-1" data-oid="titnd:k">
          {ratingIcons}
        </div>
        <p
          className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white"
          data-oid="4z_s-t0"
        >
          “{content}
        </p>
        <div className="flex items-center" data-oid="cqypwvh">
          <div
            className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full"
            data-oid="mj4fjov"
          >
            <Image src={image} alt={name} fill data-oid="tq.3tcq" />
          </div>
          <div className="w-full" data-oid="gdna1mo">
            <h3
              className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg"
              data-oid="uxxc:6m"
            >
              {name}
            </h3>
            <p className="text-sm text-body-color" data-oid="-h2jh94">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
