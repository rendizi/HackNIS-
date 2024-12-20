import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="mt-[50px] md:pt-8">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center rounded-sm">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
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
    <div className="flex items-center w-[50%] sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 sm:h-1/2 md:h-[80px] lg:h-1/3 xl:h-[50px] justify-center my-[2px] px-[5px] md:mt-10">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-[80px] w-full opacity-80 transition hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
