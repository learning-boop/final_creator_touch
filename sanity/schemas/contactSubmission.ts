import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactSubmission",
  title: "Contact Submissions",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "needs",
      title: "Needs",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Website", value: "Website" },
          { title: "Marketing", value: "Marketing" },
          { title: "SEO", value: "SEO" },
          { title: "Branding", value: "Branding" },
          { title: "E-commerce", value: "E-commerce" },
          { title: "Automation", value: "Automation" },
        ],
      },
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});
