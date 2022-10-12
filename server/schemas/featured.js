export default {
  name: "featured",
  title: "Featured Products Category",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Name",
      validating: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validating: (Rule) => Rule.max(200),
    },

    {
      name: "products",
      title: "Products",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [{ type: "reference", to: [{ type: "products" }] }],
    },
  ],
};
