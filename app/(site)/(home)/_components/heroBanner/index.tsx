import { HomePageQueryResult } from "@/sanity.types";
import HeroLeft from "./heroLeft";
import HeroRight from "./heroRight";

const HeroBanner = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div className="max-width-container padding-container">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <HeroLeft homePage={homePage} />
        </div>
        <HeroRight homePage={homePage} />
      </div>
    </div>
  );
};

export default HeroBanner;
