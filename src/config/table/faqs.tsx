export const faqsColumns = [
  {
    title: "Question",
    dataIndex: "question",
  },
  {
    title: "Answer",
    dataIndex: "answer",
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
    question: "Lorem Ipsum is simply dummy text ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
  {
    question: "Lorem Ipsum is simply dummy text ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
  {
    question: "Lorem Ipsum is simply dummy text ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
  {
    question: "Lorem Ipsum is simply dummy text ",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text  ",
  },
];
