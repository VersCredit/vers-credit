"use client";

import Title from "@/components/common/title";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useState } from "react";
import CategoriesGroupCard from "./categoriesGroupCard";
import { CarouselItem } from "@/components/ui/carousel";
import CardCarousel from "../../../../../components/common/cardCarousel";
import { HomePageQueryResult } from "@/sanity.types";

const Group = ({
  group,
}: {
  group: NonNullable<HomePageQueryResult>["categoryGroup"][number];
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    | NonNullable<HomePageQueryResult>["categoryGroup"][number]["categories"][number]
    | undefined
  >(group.categories[0]);
  return (
    <>
      <div className="max-width-container padding-container">
        <div className="flex flex-col gap-6">
          <Title title={group.title} />
          <div className="flex flex-wrap items-center gap-4">
            {group.categories.map((category) => (
              <div key={category._id}>
                <Button
                  variant="outline"
                  className={cn(
                    category.label === selectedCategory?.label &&
                      "border-deep-bright-red text-deep-bright-red",
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.label}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {selectedCategory && (
          <CardCarousel>
            {selectedCategory.blogs.map((blog) => (
              <CarouselItem
                key={blog._id}
                className="basis-2/3 sm:basis-2/5 md:basis-2/7"
              >
                <CategoriesGroupCard blog={blog} />
              </CarouselItem>
            ))}
          </CardCarousel>
        )}
      </div>
    </>
  );
};

export default Group;
