import { BookUser } from "lucide-react";
import { defineField, defineType } from "sanity";

const aboutUs = defineType({
  name: "aboutUs",
  title: "About Us",
  type: "document",
  icon: BookUser,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "hero", title: "Hero" },
    { name: "about", title: "Abou" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "Seo",
      type: "seo",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "herobannerTitle",
      title: "Herobanner Title",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutTitle",
      title: "About Title",
      type: "string",
      group: "about",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutContent",
      title: "About Content",
      type: "blockContent",
      group: "about",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default aboutUs;
