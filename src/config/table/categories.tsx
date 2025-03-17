import { Avatar } from "antd";

export const categoriesColumns = [
  {
    title: "Category ID",
    dataIndex: "category_id",
  },
  {
    title: "Category Icon",
    dataIndex: "category_icon",
    render: (text: string) => <Avatar size={50} src={text} alt="" />,
  },
  {
    title: "Category Name",
    dataIndex: "category_name",
  },
  {
    title: "Subcategories",
    dataIndex: "subcategories",
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

export const categories = [
  {
    category_id: 1,
    category_icon: "/icons/category1.png",
    category_name: "Electronics",
    subcategories: 4,
  },
  {
    category_id: 2,
    category_icon: "/icons/category2.png",
    category_name: "Fashion",
    subcategories: 4,
  },
  {
    category_id: 3,
    category_icon: "/icons/category3.png",
    category_name: "Home & Kitchen",
    subcategories: 4,
  },
  {
    category_id: 4,
    category_icon: "/icons/category4.png",
    category_name: "Sports & Fitness",
    subcategories: 4,
  },
];
