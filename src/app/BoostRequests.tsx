import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { boostRequestColumns, boostRequests } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useRequest } from "../hooks/useRequest";
import { boostingRequest } from "../repositories";

const BoostRequests = () => {
  const { data } = useRequest(boostingRequest.url, boostingRequest.method, {
    type: "mount",
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
