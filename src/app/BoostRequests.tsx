import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { dashboardcolumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useRequest } from "../hooks/useRequest";
import { advertisements } from "../repositories";
import { BoostPackage } from "../types";

const BoostRequests = () => {
  const { data, loading, pagination, onPaginationChange } = useRequest(
    advertisements.url,
    advertisements.method,
    {
      type: "mount",
      params: { featured: true },
    }
  );

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Boosted Ads</p>
      <TableData
        title=""
        columns={dashboardcolumns}
        data={data as BoostPackage[]}
        loading={loading}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
    </HomeLayout>
  );
};

export default withAuthGuard(BoostRequests);
