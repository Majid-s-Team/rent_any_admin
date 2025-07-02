import { Popconfirm } from "antd";
import { Advertisement } from "../../types";

export const adsColumns = (handleDelete: (id: string) => void) => {
  return [
    {
      title: "Product Name",
      dataIndex: "title",
    },
    {
      title: "Location",
      dataIndex: "address",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Owner Name",
      dataIndex: "owner_name",
      render: (_: string, record: Advertisement) => <p>{record?.user?.name}</p>,
    },
    {
      title: "Rent",
      dataIndex: "price_per_day",
      render: (text: string) => (
        <p className="text-[#4D4D4D] text-[14px]">
          {text}
          {/* {text ? parseFloat(text).toFixed(2) : 0} */}
        </p>
      ),
    },
    {
      title: "Status",
      dataIndex: "ad_status",
      render: (text: string) => (
        <p className="text-white text-[14px] py-1 w-[100px] bg-[#00B69B] text-center rounded-[40px]">
          {text}
        </p>
      ),
    },
    // {
    //   title: "View advertisement",
    //   dataIndex: "",
    //   render: (_: string, record: Advertisement) => (
    //     <Link
    //       to={`/product-ads/${record?.user?._id}`}
    //       className="bg-[#4A7ABC] hover:!bg-[#4A7ABC] text-white hover:!text-white rounded-[6px] border-none"
    //     >
    //       Preview
    //     </Link>
    //   ),
    // },
    {
      title: "Actions",
      dataIndex: "Actions",

      render: (_: string, record: Advertisement) => (
        <div>
          {/* <Switch
        // onChange={(checked) => handleRequest(record?._id as string, checked)}
        // defaultValue={record?.is_admin_approved}
        /> */}

          <Popconfirm
            title="Delete this ads?"
            description="Are you sure to delete this ads?"
            onConfirm={() => handleDelete(record?._id as string)}
            okText="Yes"
            cancelText="No"
          >
            <img
              className="w-[25px] cursor-pointer"
              src="/icons/delete.png"
              alt=""
            />
          </Popconfirm>
        </div>
      ),
    },
  ];
};
