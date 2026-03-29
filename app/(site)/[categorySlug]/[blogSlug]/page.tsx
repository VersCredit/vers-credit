import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BlogContent from "./blogContent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogBySlugQuery, blogsQuery } from "@/sanity/lib/query";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { BlogBySlugQueryResult, BlogsQueryResult } from "@/sanity.types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; blogSlug: string }>;
}): Promise<Metadata> {
  const { blogSlug, categorySlug } = await params;

  const { data: blog } = await sanityFetch<NonNullable<BlogBySlugQueryResult>>({
    query: blogBySlugQuery,
    params: { blogSlug },
  });

  if (!blog) {
    return notFound();
  }

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/blog/${categorySlug}/${blogSlug}`,
    },
  };
}

const BlogPage = async ({
  params,
}: {
  params: Promise<{ categorySlug: string; blogSlug: string }>;
}) => {
  const { blogSlug } = await params;

  const { data: blog } = await sanityFetch<NonNullable<BlogBySlugQueryResult>>({
    query: blogBySlugQuery,
    params: { blogSlug },
  });

  return (
    <div className="pt-16.75 ">
      <div className="py-6! font-medium max-width-container padding-container">
        <div className="flex items-center gap-2 text-gray-500">
          <Link href="/" className="duration-300 hover:text-gray-700">
            Home
          </Link>
          <ChevronRight size={24} className="min-w-6" />
          <Link href={`/${blog.category.slug.current}`}>
            <div className="text-gray-500 hover:text-gray-700 ">
              {blog.category.label}
            </div>
          </Link>
          <ChevronRight size={24} className="min-w-6" />
          <div className="text-gray-700 truncate">{blog.title}</div>
        </div>
      </div>
      <BlogContent blog={blog} />
      {/* <RecommandedBlogs blogs={randomBlogs}/> */}
    </div>
  );
};

export default BlogPage;

export async function generateStaticParams() {
  const data = await client.fetch<NonNullable<BlogsQueryResult>>(blogsQuery);

  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.map((blog) => ({
    categorySlug: blog.category.slug.current,
    blogSlug: blog.slug.current,
  }));
}
