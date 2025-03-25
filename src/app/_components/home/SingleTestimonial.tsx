import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    className="fill-current"
    data-oid="aka6q2e"
  >
    <path
      d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"
      data-oid="x9w6:im"
    />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons: JSX.Element[] = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow" data-oid="os5cme7">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full" data-oid="f1ps9zd">
      <div
        className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
        data-oid="6lsg0o9"
      >
        <div className="mb-5 flex items-center space-x-1" data-oid=".l8on:w">
          {ratingIcons}
        </div>
        <p
          className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white"
          data-oid="dqz83ev"
        >
          “{content}
        </p>
        <div className="flex items-center" data-oid="xgno_8m">
          <div
            className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full"
            data-oid="7noxrzg"
          >
            <Image src={image} alt={name} fill data-oid="q087kg2" />
          </div>
          <div className="w-full" data-oid="w2y_mle">
            <h3
              className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg"
              data-oid="dvtx94c"
            >
              {name}
            </h3>
            <p className="text-sm text-body-color" data-oid="ndm7-bd">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
