import { Popconfirm } from "antd";
import { FaqsType } from "../../types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedRecord: Dispatch<SetStateAction<FaqsType | null>>;
  handleDelete: (id: string) => void;
};

export const faqsColumns = ({
  setOpen,
  setSelectedRecord,
  handleDelete,
}: Props) => [
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
    render: (_: string, record: FaqsType) => (
      <div className="flex items-center gap-5">
        <img
          onClick={() => {
            setOpen(true);
            setSelectedRecord(record);
          }}
          className="w-[30px] cursor-pointer"
          src="/icons/edit.png"
          alt=""
        />
        <Popconfirm
          title="Are you sure you want to delete this faq?"
          onConfirm={() => handleDelete(record?._id as string)}
        >
          <img
            // onClick={() => handleDelete(record?._id as string)}
            className="w-[30px] cursor-pointer"
            src="/icons/delete.png"
            alt=""
          />
        </Popconfirm>
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
