import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { requestColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { bookingRequest } from "../repositories";
import { useRequest } from "../hooks/useRequest";

const Request = () => {
  const { data, loading, pagination, onPaginationChange } = useRequest<any>(
    bookingRequest.url,
    bookingRequest.method,
    {
      type: "mount",
    }
  );

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Request</p>
      <TableData
        title=""
        columns={requestColumns()}
        data={data}
        loading={loading}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
    </HomeLayout>
  );
};

export default withAuthGuard(Request);
