import RichText from "@/components/ui/rich-text";
import { PrivacyPolicyPageQueryResult } from "@/sanity.types";

const About = ({
  data,
}: {
  data: NonNullable<PrivacyPolicyPageQueryResult>;
}) => {
  return (
    <div className="max-width-container padding-container">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl text-tuatara leading-[115%] font-semibold">
          {data.privacyPolicyTitle}
        </h2>
        <RichText
          content={data.privacyPolicyContent}
          className="prose-p:text-tuatara prose-strong:text-tuatara"
        />
      </div>
    </div>
  );
};

export default About;
