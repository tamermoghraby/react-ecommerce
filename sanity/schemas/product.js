export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "storage",
      title: "Storage",
      type: "string",
    },
    {
      name: "screenSize",
      title: "Screen Size",
      type: "string",
    },
  ],
};
