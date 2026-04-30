import HeroBanner from "./_components/heroBanner";
import CategoriesGroup from "./_components/categoriesGroups";
import NewsBlogs from "./_components/newsBlogs";
import { sanityFetch } from "@/sanity/lib/live";
import {
  blogsQuery,
  calculatorsQuery,
  homePageQuery,
} from "@/sanity/lib/query";
import { notFound } from "next/navigation";
import CalculatorCarousel from "./_components/calculatorCarousel";
import {
  BlogsQueryResult,
  CalculatorsQueryResult,
  HomePageQueryResult,
} from "@/sanity.types";
import AdBanner from "@/components/common/adSense/adbanners";

export const generateMetadata = async () => {
  const { data: homePage } = await sanityFetch<
    NonNullable<HomePageQueryResult>
  >({
    query: homePageQuery,
  });

  if (!homePage) {
    return notFound();
  }

  return {
    title: homePage.seo.seoTitle,
    description: homePage.seo.seoDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
    },
  };
};

const HomePage = async () => {
  const { data: homePage } = await sanityFetch<
    NonNullable<HomePageQueryResult>
  >({
    query: homePageQuery,
  });

  const { data: blogsData } = await sanityFetch<NonNullable<BlogsQueryResult>>({
    query: blogsQuery,
  });

  const { data: calculators } = await sanityFetch<
    NonNullable<CalculatorsQueryResult>
  >({ query: calculatorsQuery });

  return (
    <div>
      <HeroBanner homePage={homePage} blogData={blogsData} />
      <div className="max-width-container padding-container">
        <AdBanner slot="5430829843" />
      </div>
      <CategoriesGroup homePage={homePage} blogData={blogsData} />
      <div className=" max-width-container padding-container">
        <AdBanner slot="5430829843" />
      </div>
      <CalculatorCarousel calculators={calculators} />
      <div className=" max-width-container padding-container">
        <AdBanner slot="1301479151" />
      </div>
      <NewsBlogs homePage={homePage} />
      <div className=" max-width-container padding-container">
        <AdBanner slot="5430829843" />
      </div>
    </div>
  );
};

export default HomePage;
