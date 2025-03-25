import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full" data-oid="t8h8_ed">
      <div className="wow fadeInUp" data-wow-delay=".15s" data-oid="wev9:mm">
        <div
          className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
          data-oid="e-u2z8."
        >
          {icon}
        </div>
        <h3
          className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          data-oid="4_8zwua"
        >
          {title}
        </h3>
        <p
          className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
          data-oid="fq_8wcd"
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
