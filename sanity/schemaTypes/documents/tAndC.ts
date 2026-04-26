import { Handshake } from "lucide-react";
import { defineField, defineType } from "sanity";

export const TAndC = defineType({
  name: "tAndC",
  title: "Terms & Condition",
  type: "document",
  icon: Handshake,
  fields: [
    defineField({
      name: "tAndCTitle",
      title: "Term & Condition Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tAndCContent",
      title: "Terms And Condition Content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
