import { TriangleAlert } from "lucide-react";
import { defineField, defineType } from "sanity";

export const disclaimer = defineType({
  name: "disclaimer",
  title: "Disclaimer",
  type: "document",
  icon: TriangleAlert,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "herobanner", title: "Herobanner" },
    { name: "disclaimer", title: "Disclaimer" },
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
      group: "herobanner",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "disclaimerContent",
      title: "Disclaimer Content",
      type: "blockContent",
      group: "disclaimer",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
