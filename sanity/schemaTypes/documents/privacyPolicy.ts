import { Siren } from "lucide-react";
import { defineField, defineType } from "sanity";

export const privacyPolicy = defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  icon: Siren,
  groups: [
    { name: "seo", title: "Seo" },
    { name: "herobanner", title: "Herobanner" },
    { name: "policy", title: "Policy" },
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
      name: "privacyPolicyTitle",
      title: "Privacy Policy Title",
      type: "string",
      group: "policy",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "privacyPolicyContent",
      title: "Privacy Policy Content",
      type: "blockContent",
      group: "policy",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
