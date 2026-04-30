import { sanityFetch } from "@/sanity/lib/live";
import { tAndCPageQuery } from "@/sanity/lib/query";
import Herobanner from "./_components/herobanner";
import About from "./_components/tAndC";
import { TAndCPageQueryResult } from "@/sanity.types";

const AboutUsPage = async () => {
  const { data } = await sanityFetch<NonNullable<TAndCPageQueryResult>>({
    query: tAndCPageQuery,
  });
  return (
    <div>
      <Herobanner data={data} />
      <About data={data} />
    </div>
  );
};

export default AboutUsPage;
