import { Avatar, Popconfirm } from "antd";
import { Dispatch } from "react";
import { Category } from "../../types";

type Props = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  setSelectedRecord: Dispatch<React.SetStateAction<any>>;
  handleDelete: (id: string) => void;
};

export const categoriesColumns = ({
  setOpen,
  setSelectedRecord,
  handleDelete,
}: Props) => [
  {
    title: "Category ID",
    dataIndex: "_id",
    render: (text: string) => <p>#{text.slice(0, 5)}</p>,
  },
  {
    title: "Category Icon",
    dataIndex: "image_url",
    render: (text: string) => <Avatar size={50} src={text} alt="" />,
  },
  {
    title: "Category Name",
    dataIndex: "name",
  },
  {
    title: "Actions",
    dataIndex: "Actions",
    render: (_: string, record: Category) => (
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
          title="Are you sure to delete this category?"
          onConfirm={() => handleDelete(record?._id as string)}
        >
          <img
            className="w-[30px] cursor-pointer"
            src="/icons/delete.png"
            alt=""
          />
        </Popconfirm>
      </div>
    ),
  },
];

export const categoriesData = [
  {
    _id: 1,
    image_url: "/icons/category1.png",
    name: "Electronics",
    subcategories: 4,
  },
  {
    _id: 2,
    image_url: "/icons/category2.png",
    name: "Fashion",
    subcategories: 4,
  },
  {
    _id: 3,
    image_url: "/icons/category3.png",
    name: "Home & Kitchen",
    subcategories: 4,
  },
  {
    _id: 4,
    image_url: "/icons/category4.png",
    name: "Sports & Fitness",
    subcategories: 4,
  },
];
