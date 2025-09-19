import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { requestColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { updateUser, usersRequest } from "../repositories";
import { useRequest } from "../hooks/useRequest";
import { UserType } from "../types";
import { useState } from "react";
import DisapproveReasonModal from "../component/partial/DisapproveReasonModal";

const Request = () => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<UserType | null>(null);
  const {
    data,
    setData,
    loading,
    pagination,
    onPaginationChange,
    execute: getUser,
  } = useRequest(usersRequest.url, usersRequest.method, {
    type: "mount",
    // params: { is_admin_approved: false },
  });

  const { execute, loading: loadingUpdate } = useRequest(
    updateUser.url,
    updateUser.method,
    {}
  );

  const handleRequest = (id: string, request: boolean) => {
    execute({
      body: { is_admin_approved: request },
      routeParams: id,
      type: "mount",
      cbSuccess: () => {
        // setData((p: UserType[]) =>
        //   p.filter((item) =>
        //     item._id === id ? { ...item, is_admin_approved: request } : item
        //   )
        // );
        getUser({
          type: "mount",
        });
      },
    });
  };

  const handleDisapprove = (record: UserType) => {
    setOpen(true);
    setSelectedRecord(record);
  };

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Request</p>
      <TableData
        title=""
        columns={requestColumns({ handleRequest, handleDisapprove })}
        data={data as UserType[]}
        loading={loading || loadingUpdate}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
      {open && selectedRecord !== null && (
        <DisapproveReasonModal
          setData={setData}
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
          record={selectedRecord}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(Request);
