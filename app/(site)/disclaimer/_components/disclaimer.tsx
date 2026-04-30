import RichText from "@/components/ui/rich-text";
import { DisclaimerPageQueryResult } from "@/sanity.types";

const About = ({ data }: { data: NonNullable<DisclaimerPageQueryResult> }) => {
  return (
    <div className="max-width-container padding-container">
      <div className="flex flex-col gap-4">
        <RichText
          content={data.disclaimerContent}
          className="prose-p:text-tuatara prose-strong:text-tuatara"
        />
      </div>
    </div>
  );
};

export default About;
