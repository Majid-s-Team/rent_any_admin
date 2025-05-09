export const addSubscription = [
  {
    title: "Package Name",
    name: "name",
    rules: [{ required: true, message: "Please input your Package Name!" }],
    type: "text",
  },
  {
    title: "Duration",
    name: "duration",
    rules: [{ required: true, message: "Please input your Duration!" }],
    type: "number",
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
    rules: [{ required: true, message: "Please input your description!" }],
    type: "text",
  },
];
