import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { requestColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { updateUser, user } from "../repositories";
import { useRequest } from "../hooks/useRequest";
import { UserType } from "../types";

const Request = () => {
  const { data, setData, loading, pagination, onPaginationChange } = useRequest(
    user.url,
    user.method,
    {
      type: "mount",
      params: { is_admin_approved: false },
    }
  );

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
        setData((p: UserType[]) => p.filter((item) => item._id !== id));
      },
    });
  };

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Request</p>
      <TableData
        title=""
        columns={requestColumns(handleRequest)}
        data={data as UserType[]}
        loading={loading || loadingUpdate}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
    </HomeLayout>
  );
};

export default withAuthGuard(Request);
