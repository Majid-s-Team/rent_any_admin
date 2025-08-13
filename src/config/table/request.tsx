import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../types";

type Props = {
  handleRequest: (id: string, approve: boolean) => void;
  handleDisapprove: (record: UserType) => void;
};

export const requestColumns = ({ handleRequest, handleDisapprove }: Props) => {
  const navigate = useNavigate();
  return [
    {
      title: "Full Name",
      dataIndex: "name",
    },
    {
      title: "Email Address",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "mobile_no",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_: string, record: UserType) => (
        <p className="text-white text-[14px] py-1 w-[100px] bg-[#00B69B] text-center rounded-[40px]">
          {record?.is_admin_approved ? "Approved" : "Pending"}
        </p>
      ),
    },
    {
      title: "Profile",
      dataIndex: "profile",
      render: (_: string, record: UserType) => (
        <Button
          onClick={() =>
            navigate("/users/details/" + record?._id, {
              state: { path: "Business" },
            })
          }
          className="bg-[#4A7ABC] hover:!bg-[#4A7ABC] text-white hover:!text-white rounded-[6px] border-none"
        >
          Preview
        </Button>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: string, record: UserType) => (
        <div className="flex items-center gap-2">
          <Button
            disabled={
              record.is_admin_approved === true && record?.is_admin_approved
            }
            onClick={() => handleRequest(record?._id as string, true)}
            className="!bg-[#4A7ABC] !text-white rounded-[6px] border-none"
          >
            Approve
          </Button>
          <Button
            disabled={
              record.is_admin_approved === true && record?.is_admin_approved
            }
            onClick={() => handleDisapprove(record)}
            className="rounded-[6px]"
          >
            Disapprove
          </Button>
        </div>
      ),
    },
  ];
};
