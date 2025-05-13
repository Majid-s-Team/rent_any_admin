export const addCategories = [
  {
    title: "Category Name",
    name: "name",
    rules: [{ required: true, message: "Please input your Category Name!" }],
    type: "text",
  },
  {
    title: "Arabic Name",
    name: "arabic_name",
    rules: [{ required: true, message: "Please input your Category Name!" }],
    type: "text",
  },
  {
    title: "Parent",
    name: "parent",
    rules: [{ required: true, message: "Please select your Parent!" }],
    type: "select",
  },
  // {
  //   title: "Children",
  //   name: "has_children",
  //   rules: [{ required: true, message: "Please select yes or no!" }],
  //   type: "select",
  //   options: [
  //     {
  //       label: "Yes",
  //       value: true,
  //     },
  //     {
  //       label: "No",
  //       value: false,
  //     },
  //   ],
  // },
];
