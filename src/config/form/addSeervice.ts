export const addServiceFields = [
  {
    title: "Service Name",
    name: "name",
    rules: [{ required: true, message: "Please input your Service Name!" }],
    type: "text",
  },
  {
    title: "Select Category",
    name: "category",
    rules: [{ required: true, message: "Please select your Category!" }],
    type: "select",
    options: [
      {
        label: "Category 1",
        value: "category1",
      },
      {
        label: "Category 2",
        value: "category2",
      },
      {
        label: "Category 3",
        value: "category3",
      },
    ],
  },
  {
    title: "Price",
    name: "price",
    rules: [{ required: true, message: "Please input your Price!" }],
    type: "number",
  },
  {
    title: "Description",
    name: "description",
    rules: [{ required: true, message: "Please input your Description!" }],
    type: "text",
  },
];
