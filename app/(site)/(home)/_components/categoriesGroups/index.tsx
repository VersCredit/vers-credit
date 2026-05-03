import { BlogsQueryResult, HomePageQueryResult } from "@/sanity.types";
import Group from "./group";

const CategoriesGroup = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <div>
      {homePage.categoryGroup.map((group) => (
        <div key={group._key}>
          <Group group={group} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesGroup;
