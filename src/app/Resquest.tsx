import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { requestColumns, requestData } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";

const Request = () => {
  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Request</p>
      <TableData
        title=""
        columns={requestColumns()}
        data={requestData}
        // loading={loading}
      />
    </HomeLayout>
  );
};

export default withAuthGuard(Request);
