import { sanityFetch } from "@/sanity/lib/live";
import { privacyPolicyPageQuery } from "@/sanity/lib/query";
import Herobanner from "./_components/herobanner";
import About from "./_components/policy";
import { PrivacyPolicyPageQueryResult } from "@/sanity.types";

const AboutUsPage = async () => {
  const { data } = await sanityFetch<NonNullable<PrivacyPolicyPageQueryResult>>(
    {
      query: privacyPolicyPageQuery,
    },
  );
  return (
    <div>
      <Herobanner data={data} />
      <About data={data} />
    </div>
  );
};

export default AboutUsPage;
