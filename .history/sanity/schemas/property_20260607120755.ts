import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  icon: HomeIcon,
  fieldsets: [
    {
      name: "keydetails",
      title: "Key Details",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(3)
          .max(96)
          .error("Property Name should be between 3 - 96 characters."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "transaction",
      title: "Transaction",
      type: "reference",
      to: [
        {
          type: "transaction",
        },
      ],
      validation: (rule) =>
        rule.required().error("Please select a type of transaction"),
    }),
    defineField({
      name: "propertytype",
      title: "Property Type",
      type: "reference",
      to: [
        {
          type: "propertytype",
        },
      ],
      validation: (rule) =>
        rule.required().error("Please select a property type"),
    }),
    defineField({
      name: "price",
      title: "Price (FCFA)",
      type: "number",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "rentpricing",
      title: "Rent Pricing",
      type: "string",
      options: {
        list: [
          {
            title: "Per Day",
            value: "perday",
          },
          {
            title: "Per Week",
            value: "perweek",
          },
          {
            title: "Per Month",
            value: "permonth",
          },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "city",
      title: "City",
      type: "reference",
      to: [
        {
          type: "location",
        },
      ],
      validation: (rule) =>
        rule.required().error("Please select a city location."),
    }),
    defineField({
      name: "quarter",
      title: "Location Quarter",
      type: "string",
      validation: (rule) =>
        rule.required().error("Please enter a quarter location."),
    }),
    defineField({
      name: "room",
      title: "Rooms",
      type: "number",
      fieldset: "keydetails",
    }),
    defineField({
      name: "bath",
      title: "Baths",
      type: "number",
      fieldset: "keydetails",
    }),
    defineField({
      name: "parlour",
      title: "Parlours",
      type: "number",
      fieldset: "keydetails",
    }),
    defineField({
      name: "area",
      title: "Surface Area (m2)",
      type: "number",
      fieldset: "keydetails",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "mainimage",
      title: "Property Image",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
        },
      ],
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "heroimages",
      title: "Hero Images", // Updated to plural
      type: "array", // 1. Change type to array
      of: [
        // 2. Define what the array holds
        {
          type: "image",
          fields: [
            {
              type: "string",
              name: "alt",
              title: "Alt",
            },
          ],
        },
      ],
      validation: (rule) =>
        rule
          .required()
          .max(5) // 3. Set the maximum limit to 5
          .error("You must provide between 1 and 5 images"),
    }),

    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "overviewen",
              title: "Overview English",
              type: "text",
              validation: (rule) => rule.required().error("Required"),
            },
            {
              name: "overviewfr",
              title: "Overview French",
              type: "text",
              validation: (rule) => rule.required().error("Required"),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "otherdetails",
      title: "Other Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "otheren",
              title: "Other Details Engish",
              type: "string",
              validation: (rule) => rule.required().error("Required"),
            },
            {
              name: "otherfr",
              title: "Other Details French",
              type: "string",
              validation: (rule) => rule.required().error("Required"),
            },
          ],
        },
      ],
    }),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            { name: "caption", title: "Caption", type: "string" },
            { name: "aspectRatio", title: "Aspect Ratio", type: "string" },
          ],
        },
        {
          type: "file",
          title: "Video MP4",
          options: { accept: "video/mp4" },
          fields: [
            { name: "caption", title: "Caption", type: "string" },
            { name: "aspectRatio", title: "Aspect Ratio", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
