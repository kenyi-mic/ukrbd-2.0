export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Products Name",
      validating: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validating: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Cover Image of the products",
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "rows",
      title: "Product Rows",
      type: "array",
      of: [{ type: "reference", to: [{ type: "productRow" }] }],
    },
  ],
};
