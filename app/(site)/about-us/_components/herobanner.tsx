import { SanityImage } from "@/components/common/sanityImage";
import { AboutUspageQueryResult } from "@/sanity.types";

const Herobanner = ({
  data,
}: {
  data: NonNullable<AboutUspageQueryResult>;
}) => {
  return (
    <div className="relative ">
      <SanityImage
        src={data.herobannerImage}
        alt={data.herobannerImage.alt}
        fill
        className="object-cover -z-1"
      />
      <div className="flex items-end max-width-container padding-container min-h-100">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {data.herobannerTitle}
        </h1>
      </div>
    </div>
  );
};

export default Herobanner;
