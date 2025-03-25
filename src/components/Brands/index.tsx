import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16" data-oid="q.pflv1">
      <div className="container" data-oid="g2f53u6">
        <div className="-mx-4 flex flex-wrap" data-oid="wi.zr3q">
          <div className="w-full px-4" data-oid="9._5n6m">
            <div
              className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-oid="fpgjpy0"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} data-oid="u.i.trs" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div
      className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
      data-oid="b_1ts_j"
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
        data-oid="rx.7vu:"
      >
        {imageLight && (
          <Image
            src={imageLight}
            alt={name}
            fill
            className="hidden dark:block"
            data-oid="e_9pt6w"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="block dark:hidden"
            data-oid="lj:73po"
          />
        )}
      </a>
    </div>
  );
};
