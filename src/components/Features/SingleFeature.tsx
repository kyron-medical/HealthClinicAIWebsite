import type { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full" data-oid="c2::q2w">
      <div className="wow fadeInUp" data-wow-delay=".15s" data-oid="b:esi-5">
        <div
          className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
          data-oid="akwsrs2"
        >
          {icon}
        </div>
        <h3
          className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          data-oid="shbf.dw"
        >
          {title}
        </h3>
        <p
          className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
          data-oid="sgt_nud"
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
