import { Avatar, Switch } from "antd";

export const subscriptionColumns = [
  {
    title: "Package Icon",
    dataIndex: "package_icon",
    render: (text: string) => <Avatar size={50} src={text} alt="" />,
  },
  {
    title: "Number of Ads",
    dataIndex: "number_of_ads",
  },
  {
    title: "Duration",
    dataIndex: "duration",
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
        <Switch />
      </div>
    ),
  },
];

export const subscriptions = [
  {
    category_id: 1,
    package_icon: "/icons/category1.png",
    duration: "7 days",
    number_of_ads: 4,
  },
  {
    category_id: 2,
    package_icon: "/icons/category2.png",
    duration: "7 days",
    number_of_ads: 4,
  },
  {
    category_id: 3,
    package_icon: "/icons/category3.png",
    duration: "7 days",
    number_of_ads: 4,
  },
  {
    category_id: 4,
    package_icon: "/icons/category4.png",
    duration: "7 days",
    number_of_ads: 4,
  },
];
