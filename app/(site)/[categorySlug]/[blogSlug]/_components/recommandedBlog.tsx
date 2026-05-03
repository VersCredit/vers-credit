import BlogHeader from "@/components/common/blogHeader";
import CardCarousel from "@/components/common/cardCarousel";
import { SanityImage } from "@/components/common/sanityImage";
import Title from "@/components/common/title";
import { CarouselItem } from "@/components/ui/carousel";
import { formatDate } from "@/lib/utils";
import { BlogBySlugQueryResult } from "@/sanity.types";
import Link from "next/link";

const RecommandedBlogs = ({
  blogs,
}: {
  blogs: NonNullable<BlogBySlugQueryResult>["recommended"];
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="w-full max-width-container padding-container pb-0!">
          <Title title="Read Other Articles" />
        </div>
        <CardCarousel>
          {blogs.map((blog) => (
            <CarouselItem
              key={blog._id}
              className="basis-2/3 sm:basis-2/5 md:basis-2/7"
            >
              <Link
                href={`/${blog.category.slug.current}/${blog.slug.current}`}
                className="duration-300 group"
              >
                <div className="w-full mb-4 md:mb-6">
                  <SanityImage
                    src={blog.heroImage}
                    alt={blog.heroImage.alt}
                    width={100}
                    height={100}
                    className="object-cover w-full h-auto rounded-xl"
                  />
                </div>
                <BlogHeader
                  author={blog.author.authorName}
                  date={formatDate(blog.uploadedAt || blog._updatedAt)}
                  category={blog.category.label}
                  title={blog.title}
                  titleClassname="group-hover:text-deep-bright-red"
                />
              </Link>
            </CarouselItem>
          ))}
        </CardCarousel>
      </div>
    </div>
  );
};

export default RecommandedBlogs;
