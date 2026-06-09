import { defineType, defineField } from "sanity";
import { MarkerIcon } from "@sanity/icons";

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
      title: "Position French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "position",
    }),
    defineField({
      name: "positionen",
      title: "Position English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "position",
    }),
    defineField({
      name: "whatsapp",
      title: "Whatsapp Number",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
    
  ],
});
