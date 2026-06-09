import { defineType, defineField } from "sanity";
import {TagIcon} from '@sanity/icons'

export const propertyType = defineType({
  name: "propertytype",
  title: "Property Type",
  type: "document",
  icon: TagIcon,
  fieldsets: [
    {
      name: "name",
      title: "Property Name",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Property Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "namefr",
      title: "Property Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "namefr" },
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});
