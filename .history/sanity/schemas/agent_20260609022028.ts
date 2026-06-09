import { defineType, defineField } from "sanity";
import {MarkerIcon} from '@sanity/icons'

export const agent = defineType({
  name: "agent",
  title: "Agent",
  type: "document",
  icon: MarkerIcon,
  fields: [
    defineField({
      name: "name",
      title: "Agent Name",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
  ]
})