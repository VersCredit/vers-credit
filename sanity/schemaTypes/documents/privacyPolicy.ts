import { Siren } from "lucide-react";
import { defineField, defineType } from "sanity";

export const privacyPolicy = defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  icon: Siren,
  fields: [
    defineField({
      name: "privacyPolicyTitle",
      title: "Privacy Policy Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "privacyPolicyContent",
      title: "Privacy Policy Content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
