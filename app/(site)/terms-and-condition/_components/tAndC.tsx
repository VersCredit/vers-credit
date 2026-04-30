import RichText from "@/components/ui/rich-text";
import { TAndCPageQueryResult } from "@/sanity.types";

const About = ({ data }: { data: NonNullable<TAndCPageQueryResult> }) => {
  return (
    <div className="max-width-container padding-container">
      <div className="flex flex-col gap-4">
        <RichText
          content={data.tAndCContent}
          className="prose-p:text-tuatara prose-strong:text-tuatara"
        />
      </div>
    </div>
  );
};

export default About;
