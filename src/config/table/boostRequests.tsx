import { Button } from "antd";

export const boostRequestColumns = [
  {
    title: "View Request",
    dataIndex: "view_request",
  },
  {
    title: "View advertisement",
    dataIndex: "view_advertisement",
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
    view_request: "Request 1",
    view_advertisement: "7 days",
  },
  {
    view_request: "Request 2",
    view_advertisement: "7 days",
  },
  {
    view_request: "Request 3",
    view_advertisement: "7 days",
  },
  {
    view_request: "Request 4",
    view_advertisement: "7 days",
  },
  {
    view_request: "Request 5",
    view_advertisement: "7 days",
  },
];
