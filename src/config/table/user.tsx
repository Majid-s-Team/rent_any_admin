import { Switch } from "antd";
import { useNavigate } from "react-router-dom";

export const userColumns = (path: string) => {
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
    //   title: "Total Ads",
    //   dataIndex: "Total Ads",
    // },
    {
      title: "Actions",
      dataIndex: "Actions",
      render: (_: string, record: any) => (
        <div className="flex items-center gap-5">
          <Switch />
          <img
            onClick={() =>
              navigate("/users/details/" + record?._id, {
                state: { path: path },
              })
            }
            className="w-[20px] cursor-pointer"
            src="/icons/eye.png"
            alt=""
          />
        </div>
      ),
    },
  ];
};

export const userData = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile_no: "123-456-7890",
    "Total Ads": 10,
    Actions: "View/Edit/Delete",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile_no: "987-654-3210",
    "Total Ads": 5,
    Actions: "View/Edit/Delete",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    mobile_no: "555-123-4567",
    "Total Ads": 8,
    Actions: "View/Edit/Delete",
  },
  {
    name: "Alice Brown",
    email: "alice.brown@example.com",
    mobile_no: "901-234-5678",
    "Total Ads": 12,
    Actions: "View/Edit/Delete",
  },
  {
    name: "Mike Davis",
    email: "mike.davis@example.com",
    mobile_no: "111-222-3333",
    "Total Ads": 15,
    Actions: "View/Edit/Delete",
  },
];
