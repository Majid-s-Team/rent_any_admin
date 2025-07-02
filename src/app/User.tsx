import { useEffect, useState } from "react";
import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { Select } from "antd";
import { userColumns } from "../config";
import { useRequest } from "../hooks/useRequest";
import { updateUser, user } from "../repositories";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { UserType } from "../types";

const tabs = ["Users Management", "Business Users Management"];

function User() {
  const [activeTab, setActiveTab] = useState(1);
  const { data, execute, loading, pagination, onPaginationChange, setData } =
    useRequest(user.url, user.method, {
      params: {
        role: activeTab === 1 ? "user" : "business",
        is_admin_approved: true,
      },
    });

  const { execute: update } = useRequest(updateUser.url, updateUser.method, {});

  useEffect(() => {
    execute({
      type: "mount",
    });
  }, [activeTab]);

  const handleRequest = (id: string, approve: boolean) => {
    update({
      body: { status: approve },
      routeParams: id,
      type: "mount",
      cbSuccess: () => {
        setData((p: UserType[]) =>
          p.filter((item) =>
            item._id === id ? { ...item, is_admin_approved: approve } : item
          )
        );
      },
    });
  };

  return (
    <HomeLayout>
      <div className="flex lg:flex-row flex-col lg:items-center lg:gap-20 gap-4">
        <p className="text-[#171717] text-[32px] red-bold">Users</p>
        <div className="flex items-center gap-5 border border-[#E3E3E3] lg:rounded-[30px] rounded-[40px]">
          {[1, 2].map((item, index) => {
            return (
              <div key={index} className="">
                <p
                  className={`text-[#171717] lg:text-[15px] text-[13px] py-3 px-10 m-1 rounded-[30px] red-semibold cursor-pointer ${
                    item === activeTab
                      ? "text-white bg-[#4A7ABC]"
                      : "text-[#262626]"
                  }`}
                  onClick={() => setActiveTab(item)}
                >
                  {item === 1 ? tabs[0] : tabs[1]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <TableData
        title={tabs[activeTab - 1]}
        columns={userColumns(tabs[activeTab - 1], handleRequest)}
        data={data as UserType[]}
        loading={loading}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
        input={
          <>
            <Select defaultValue="All" style={{ width: 150 }} />
          </>
        }
      />
    </HomeLayout>
  );
}

export default withAuthGuard(User);
