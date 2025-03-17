import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { boostRequestColumns, boostRequests } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";

const BoostRequests = () => {
  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Boost Requests</p>
      <TableData
        title=""
        columns={boostRequestColumns}
        data={boostRequests}
        // loading={loading}
      />
    </HomeLayout>
  );
};

export default withAuthGuard(BoostRequests);
