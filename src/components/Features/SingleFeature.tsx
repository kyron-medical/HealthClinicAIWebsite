import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full" data-oid="916g:xo">
      <div className="wow fadeInUp" data-wow-delay=".15s" data-oid="sbb.nuy">
        <div
          className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
          data-oid="mj8o-di"
        >
          {icon}
        </div>
        <h3
          className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          data-oid="t.lo-7f"
        >
          {title}
        </h3>
        <p
          className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
          data-oid="hm6k:00"
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
