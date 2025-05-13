import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const requestColumns = (
  handleRequest: (id: string, approve: boolean) => void
) => {
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
    // {
    //   title: "Owner Name",
    //   dataIndex: "owner_name",
    // },
    {
      title: "Profile",
      dataIndex: "profile",
      render: (_: string, record: any) => (
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
      render: (_: string, record: any) => (
        <div className="flex items-center gap-2">
          <Button
            onClick={() => handleRequest(record?._id, true)}
            className="bg-[#4A7ABC] hover:!bg-[#4A7ABC] text-white hover:!text-white rounded-[6px] border-none"
          >
            Approve
          </Button>
          <Button
            onClick={() => handleRequest(record?._id, false)}
            className="rounded-[6px]"
          >
            Disapprove
          </Button>
        </div>
      ),
    },
  ];
};

export const requestData = [
  {
    business_name: "ABC Corporation",
    email: "info@abccorp.com",
    mobile_no: "1234567890",
    owner_name: "John Doe",
    profile: "https://example.com/profile/1",
    action: "Approved",
  },
  {
    business_name: "XYZ Inc.",
    email: "contact@xyzinc.com",
    mobile_no: "9876543210",
    owner_name: "Jane Smith",
    profile: "https://example.com/profile/2",
    action: "Pending",
  },
  {
    business_name: " DEF Enterprises",
    email: "def@enterprises.com",
    mobile_no: "5551234567",
    owner_name: "Bob Johnson",
    profile: "https://example.com/profile/3",
    action: "Rejected",
  },
  // Add more data here...
];
