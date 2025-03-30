import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16" data-oid="frhk3et">
      <div className="container" data-oid="tepf.2f">
        <div className="-mx-4 flex flex-wrap" data-oid="i3aocs_">
          <div className="w-full px-4" data-oid="p4gl3np">
            <div
              className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-oid="xog_sr-"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} data-oid="x6.ryg4" />
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
      data-oid="hskm124"
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
        data-oid="jvfiajc"
      >
        {imageLight && (
          <Image
            src={imageLight}
            alt={name}
            fill
            className="hidden dark:block"
            data-oid="15d8wnj"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="block dark:hidden"
            data-oid="up:h.-."
          />
        )}
      </a>
    </div>
  );
};
