import { Button } from "antd";

export const boostRequestColumns = [
  {
    title: "View Request",
    dataIndex: "_id",
    render: (text: string) => (
      <p className="text-[#4D4D4D] text-[14px]">#{text?.slice(0, 5)}</p>
    ),
  },
  {
    title: "View advertisement",
    dataIndex: "duration",
    render: (text: string) => (
      <p className="text-[#4D4D4D] text-[14px]">{text} days</p>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    render: () => (
      <div className="flex items-center gap-2">
        <Button className="bg-[#4A7ABC] hover:!bg-[#4A7ABC] text-white hover:!text-white rounded-[6px] border-none">
          Approve
        </Button>
        <Button className=" rounded-[6px]">Disapprove</Button>
      </div>
    ),
  },
];

export const boostRequests = [
  {
    _id: "Request 1",
    duration: "7 days",
  },
  {
    _id: "Request 2",
    duration: "7 days",
  },
  {
    _id: "Request 3",
    duration: "7 days",
  },
  {
    _id: "Request 4",
    duration: "7 days",
  },
  {
    _id: "Request 5",
    duration: "7 days",
  },
];
