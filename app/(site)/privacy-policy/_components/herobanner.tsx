import { PrivacyPolicyPageQueryResult } from "@/sanity.types";

const Herobanner = ({
  data,
}: {
  data: NonNullable<PrivacyPolicyPageQueryResult>;
}) => {
  return (
    <div className="bg-bright-royal-blue">
      <div className="max-width-container padding-container min-h-60">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {data.herobannerTitle}
        </h1>
      </div>
    </div>
  );
};

export default Herobanner;
