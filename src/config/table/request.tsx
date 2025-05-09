import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const requestColumns = () => {
  const navigate = useNavigate();
  return [
    {
      title: "Business Name",
      dataIndex: "business_name",
      render: (_: string, record: any) => (
        <p className="text-[#4D4D4D] text-[14px]">{record?.vendor?.name}</p>
      ),
    },
    {
      title: "Business Email",
      dataIndex: "email",
      render: (_: string, record: any) => (
        <p className="text-[#4D4D4D] text-[14px]">{record?.vendor?.email}</p>
      ),
    },
    {
      title: "Contact Number",
      dataIndex: "mobile_no",
      render: (_: string, record: any) => (
        <p className="text-[#4D4D4D] text-[14px]">
          {record?.vendor?.mobile_no}
        </p>
      ),
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
            navigate("/users/details/" + record?.vendor?._id, {
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
