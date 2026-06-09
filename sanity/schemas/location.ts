import { defineType, defineField } from "sanity";
import {MarkerIcon} from '@sanity/icons'

export const location = defineType({
  name: "location",
  title: "Location",
  type: "document",
  icon: MarkerIcon,
  fields: [
    defineField({
      name: "cityname",
      title: "City Name",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "cityname" },
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});
