import { Avatar, Popconfirm } from "antd";
import { Dispatch, SetStateAction } from "react";
import { BoostPackage } from "../../types";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedRecord: Dispatch<SetStateAction<BoostPackage | null>>;
  // setSelectedRecord: Dispatch<React.SetStateAction<any>>;
  handleDelete: (id: string) => void;
};

export const subscriptionColumns = ({
  setOpen,
  setSelectedRecord,
  handleDelete,
}: Props) => [
  {
    title: "Package Icon",
    dataIndex: "image_url",
    render: (text: string) => <Avatar size={50} src={text} alt="" />,
  },
  {
    title: "Package Name",
    dataIndex: "name",
  },
  {
    title: "Duration",
    dataIndex: "duration",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Actions",
    dataIndex: "Actions",
    render: (_: string, record: Record<string, any>) => (
      <div className="flex items-center gap-5">
        <img
          onClick={() => {
            setOpen(true);
            setSelectedRecord(record as BoostPackage);
          }}
          className="w-[30px] cursor-pointer"
          src="/icons/edit.png"
          alt=""
        />
        <Popconfirm
          title="Are you sure to delete this package?"
          onConfirm={() => handleDelete(record?._id as string)}
        >
          <img
            className="w-[30px] cursor-pointer"
            src="/icons/delete.png"
            alt=""
          />
        </Popconfirm>
        {/* <Switch /> */}
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
