import { Table } from "antd";

export default function TableData({
  columns,
  data,
  input,
  title,
  onClick,
  pagination,
  onPaginationChange,
  loading,
}: any) {
  return (
    <div className="bg-[#fff] rounded-[14px] p-5 custom-shadow mt-8">
      <div className="lg:flex justify-between items-center mb-5">
        <p className="text-[#171717] text-[22px] red-bold lg:mb-0 mb-4">
          {title}
        </p>
        <div className="flex items-center gap-5">{input}</div>
      </div>
      <Table
        scroll={{ x: 800 }}
        columns={columns}
        dataSource={data}
        loading={loading}
        onRow={(row) => ({
          onClick: (event) => {
            const td = (event.target as HTMLElement).closest("td");
            if (td) {
              const cellIndex = td.parentNode
                ? Array.from(td.parentNode.children).indexOf(td)
                : -1;
              // console.log("cellIndex:", cellIndex);
              // console.log(
              //   "columns[cellIndex]?.dataIndex:",
              //   columns[cellIndex]?.dataIndex
              // );
              if (columns[cellIndex]?.dataIndex === "actions") {
                event.stopPropagation();
              } else {
                onClick(row);
              }
            }
          },
        })}
        pagination={pagination}
        onChange={onPaginationChange}
      />
    </div>
  );
}
