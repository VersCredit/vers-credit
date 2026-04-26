import { Trophy } from "lucide-react";
import { defineField, defineType } from "sanity";

export const Achivements = defineType({
  name: "achivements",
  title: "Achivements",
  type: "document",
  icon: Trophy,
  fields: [
    defineField({
      name: "achivementsTitle",
      title: "AchivementsTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "achivementsContent",
      title: "Achivements Content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
