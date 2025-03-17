export const faqsColumns = [
  {
    title: "View FAQs",
    dataIndex: "faqs",
  },
  {
    title: "Actions",
    dataIndex: "Actions",
    render: () => (
      <div className="flex items-center gap-5">
        <img className="w-[30px] cursor-pointer" src="/icons/edit.png" alt="" />
        <img
          className="w-[30px] cursor-pointer"
          src="/icons/delete.png"
          alt=""
        />
      </div>
    ),
  },
];

export const faqs = [
  {
    faqs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
  {
    faqs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
  {
    faqs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
  {
    faqs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
  {
    faqs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
];
