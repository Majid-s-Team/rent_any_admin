import { Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { ReportAds } from "../../types";

export const reportAdsColumns = (handleDelete: (id: string) => void) => {
  return [
    {
      title: "Product Name",
      dataIndex: "title",
      render: (_: string, record: ReportAds) => (
        <p>{record?.advertisement?.title}</p>
      ),
    },
    {
      title: "Location",
      dataIndex: "address",
      render: (_: string, record: ReportAds) => (
        <p className="w-[200px] truncate">{record?.advertisement?.address}</p>
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      render: (_: string, record: ReportAds) => (
        <p>{record?.advertisement?.brand}</p>
      ),
    },
    {
      title: "Owner Name",
      dataIndex: "owner_name",
      render: (_: string, record: ReportAds) => <p>{record?.user?.name}</p>,
    },
    {
      title: "Note",
      dataIndex: "note",
      render: (text: string) => <p className="w-[200px] truncate">{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "report_status",
      render: (text: string) => (
        <p className="text-white text-[14px] py-1 w-[100px] bg-red-500 text-center rounded-[40px] capitalize">
          {text}
        </p>
      ),
    },
    {
      title: "View advertisement",
      dataIndex: "",
      render: (_: string, record: ReportAds) => (
        <Link
          to={`/report-ads/${record?._id}`}
          className="!bg-[#4A7ABC] py-2 px-4 text-white hover:!text-white rounded-[6px] border-none"
        >
          Preview
        </Link>
      ),
    },
    {
      title: "Actions",
      dataIndex: "Actions",

      render: (_: string, record: ReportAds) => (
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
      ),
    },
  ];
};
