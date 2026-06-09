import { defineType, defineField } from "sanity";
import {MarkerIcon} from '@sanity/icons'

export const agent = defineType({
  name: "agent",
  title: "Agent",
  type: "document",
  icons: MarkerIcon,
  fields: [
    defineField
  ]
})