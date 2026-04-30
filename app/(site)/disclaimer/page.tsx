import { sanityFetch } from "@/sanity/lib/live";
import { disclaimerPageQuery } from "@/sanity/lib/query";
import Herobanner from "./_components/herobanner";
import About from "./_components/disclaimer";
import { DisclaimerPageQueryResult } from "@/sanity.types";

const AboutUsPage = async () => {
  const { data } = await sanityFetch<NonNullable<DisclaimerPageQueryResult>>({
    query: disclaimerPageQuery,
  });
  return (
    <div>
      <Herobanner data={data} />
      <About data={data} />
    </div>
  );
};

export default AboutUsPage;
