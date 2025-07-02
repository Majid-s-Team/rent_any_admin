import HomeLayout from "../component/shared/HomeLayout";
import StatisticsComp from "../component/partial/StatisticsComp";
import TableData from "../component/shared/Table";
import { dashboardcolumns } from "../config";
import { DatePicker } from "antd";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { dashboard } from "../repositories";
import { useRequest } from "../hooks/useRequest";
import { Advertisement, DashboardType } from "../types";

const Dashboard = () => {
  const { data, loading } = useRequest<DashboardType>(
    dashboard.url,
    dashboard.method,
    {
      type: "mount",
    }
  );

  return (
    <HomeLayout loading={loading}>
      <p className="text-[#171717] text-[32px] red-bold">Dashboard</p>
      <StatisticsComp data={data} />
      <TableData
        title="Recent Ads"
        columns={dashboardcolumns}
        data={data?.recent_ads as Advertisement[]}
        input={
          <>
            <DatePicker width={200} />
          </>
        }
      />
    </HomeLayout>
  );
};

export default withAuthGuard(Dashboard);
