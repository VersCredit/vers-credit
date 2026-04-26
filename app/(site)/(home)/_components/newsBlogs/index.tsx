import NewsCard from "./newsCard";
import { CarouselItem } from "@/components/ui/carousel";
import BlogCardCarousel from "@/components/common/cardCarousel";
import Title from "@/components/common/title";
import { HomePageQueryResult } from "@/sanity.types";

const NewsBlogs = ({
  homePage,
}: {
  homePage: NonNullable<HomePageQueryResult>;
}) => {
  return (
    <>
      <div className="max-width-container padding-container pb-4! md:pb-6!">
        <Title title={homePage.newsTitle} />
      </div>
      <div>
        <BlogCardCarousel>
          {homePage.newsBlogs.map((blog) => (
            <CarouselItem
              key={blog._id}
              className="basis-2/3 sm:basis-2/5 md:basis-2/7 lg:basis-4/13"
            >
              <NewsCard blog={blog} />
            </CarouselItem>
          ))}
        </BlogCardCarousel>
      </div>
    </>
  );
};

export default NewsBlogs;
