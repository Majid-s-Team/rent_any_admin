import { Switch } from "antd";
import { useNavigate } from "react-router-dom";

export const userColumns = (path: string) => {
  const navigate = useNavigate();

  console.log(path, "path");

  return [
    {
      title: "Full Name",
      dataIndex: "Full Name",
    },
    {
      title: "Email Address",
      dataIndex: "Email Address",
    },
    {
      title: "Phone Number",
      dataIndex: "Phone Number",
    },
    {
      title: "Total Ads",
      dataIndex: "Total Ads",
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      render: () => (
        <div className="flex items-center gap-5">
          <Switch />
          <img
            onClick={() =>
              navigate("/users/details/" + "12121", { state: { path: path } })
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
    "Full Name": "John Doe",
    "Email Address": "john.doe@example.com",
    "Phone Number": "123-456-7890",
    "Total Ads": 10,
    Actions: "View/Edit/Delete",
  },
  {
    "Full Name": "Jane Smith",
    "Email Address": "jane.smith@example.com",
    "Phone Number": "987-654-3210",
    "Total Ads": 5,
    Actions: "View/Edit/Delete",
  },
  {
    "Full Name": "Bob Johnson",
    "Email Address": "bob.johnson@example.com",
    "Phone Number": "555-123-4567",
    "Total Ads": 8,
    Actions: "View/Edit/Delete",
  },
  {
    "Full Name": "Alice Brown",
    "Email Address": "alice.brown@example.com",
    "Phone Number": "901-234-5678",
    "Total Ads": 12,
    Actions: "View/Edit/Delete",
  },
  {
    "Full Name": "Mike Davis",
    "Email Address": "mike.davis@example.com",
    "Phone Number": "111-222-3333",
    "Total Ads": 15,
    Actions: "View/Edit/Delete",
  },
];
