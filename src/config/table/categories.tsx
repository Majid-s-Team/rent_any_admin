import { Avatar } from "antd";
import { Dispatch } from "react";

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
  // {
  //   title: "Subcategories",
  //   dataIndex: "subcategories",
  // },
  {
    title: "Actions",
    dataIndex: "Actions",
    render: (_: string, record: any) => (
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
        <img
          onClick={() => handleDelete(record._id)}
          className="w-[30px] cursor-pointer"
          src="/icons/delete.png"
          alt=""
        />
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
