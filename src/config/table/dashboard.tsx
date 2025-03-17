export const dashboardcolumns = [
  {
    title: "Product Name",
    dataIndex: "product_name",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Date - Time",
    dataIndex: "date",
  },
  {
    title: "Owner Name",
    dataIndex: "owner_name",
  },
  {
    title: "Rent",
    dataIndex: "rent",
    // render: (text: string) => (
    //   <p className="text-[#4D4D4D] text-[14px]">
    //     {text ? parseFloat(text).toFixed(2) : 0}
    //   </p>
    // ),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text: string) => (
      <p className="text-white text-[14px] py-1 w-[100px] bg-[#00B69B] text-center rounded-[40px]">
        {text ? text : "Pending"}
      </p>
    ),
  },
];

export const dashboardData = [
  {
    product_name: "Product A",
    location: "New York",
    date: "2022-01-01 12:00:00",
    owner_name: "John Doe",
    rent: "$1000.50",
    status: "Available",
  },
  {
    product_name: "Product B",
    location: "Los Angeles",
    date: "2022-01-05 14:00:00",
    owner_name: "Jane Smith",
    rent: "$800.25",
    status: "Pending",
  },
  {
    product_name: "Product C",
    location: "Chicago",
    date: "2022-01-10 10:00:00",
    owner_name: "Bob Johnson",
    rent: "$1200.00",
    status: "Available",
  },
  {
    product_name: "Product D",
    location: "Houston",
    date: "2022-01-15 16:00:00",
    owner_name: "Alice Brown",
    rent: "$900.75",
    status: "Pending",
  },
  {
    product_name: "Product E",
    location: "Seattle",
    date: "2022-01-20 12:00:00",
    owner_name: "Mike Davis",
    rent: "$1100.50",
    status: "Available",
  },
];
