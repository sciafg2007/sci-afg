import { defineType, defineField } from "sanity";
import {MarkerIcon} from '@sanity/icons'

export const agent = defineType({
  name: "agent",
  title: "Agent",
  type: "document",
  icon: MarkerIcon,
  fieldsets: [
    {
      name: "position",
      title: "Agent Position",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Agent Name",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "positionfr",
      title: "Transaction Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
  ]
})