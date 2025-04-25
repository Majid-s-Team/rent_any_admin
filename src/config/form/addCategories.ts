export const addCategories = [
  {
    title: "Category Name",
    name: "name",
    rules: [{ required: true, message: "Please input your Category Name!" }],
    type: "text",
  },
  {
    title: "Parent",
    name: "parent",
    rules: [{ required: true, message: "Please select your Parent!" }],
    type: "select",
  },
];
