export default {
  name: "productRow",
  title: "Row",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Row Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
  ],
};
