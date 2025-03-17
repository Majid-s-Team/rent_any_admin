export const queriesColumns = [
  {
    title: "User Name",
    dataIndex: "user_name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text: string) => (
      <p className="text-white text-[14px] py-1 w-[100px] bg-[#00B69B] text-center rounded-[40px]">
        {text}
      </p>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    render: () => (
      <img className="w-[20px] cursor-pointer" src="/icons/dots.png" alt="" />
    ),
  },
];

export const queriesData = [
  {
    user_name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    action: "", // This will be rendered as an image
  },
  {
    user_name: "Jane Doe",
    email: "jane.doe@example.com",
    status: "Inactive",
    action: "", // This will be rendered as an image
  },
  {
    user_name: "Bob Smith",
    email: "bob.smith@example.com",
    status: "Pending",
    action: "", // This will be rendered as an image
  },
  {
    user_name: "Alice Johnson",
    email: "alice.johnson@example.com",
    status: "Active",
    action: "", // This will be rendered as an image
  },
  {
    user_name: "Mike Brown",
    email: "mike.brown@example.com",
    status: "Inactive",
    action: "", // This will be rendered as an image
  },
];
