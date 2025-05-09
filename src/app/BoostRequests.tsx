import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { boostRequestColumns, boostRequests } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useRequest } from "../hooks/useRequest";
import { advertisements } from "../repositories";

const BoostRequests = () => {
  const { data } = useRequest<any>(advertisements.url, advertisements.method, {
    type: "mount",
    // params: { status: "pending" },
  });

  console.log(data, "data");

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Boost Ads</p>
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
