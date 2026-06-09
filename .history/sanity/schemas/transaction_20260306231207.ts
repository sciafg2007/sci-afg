import { defineType, defineField } from "sanity";
import { TransferIcon } from "@sanity/icons";

export const transaction = defineType({
  name: "transaction",
  title: "Transaction",
  type: "document",
  icon: TransferIcon,
  fieldsets: [
    {
      name: "name",
      title: "Transaction Name",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Transaction Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "namefr",
      title: "Transaction Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "nameen" },
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});
