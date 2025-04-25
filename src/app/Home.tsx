import HomeLayout from "../component/shared/HomeLayout";
import StatisticsComp from "../component/partial/StatisticsComp";
import TableData from "../component/shared/Table";
import { dashboardcolumns, dashboardData } from "../config";
import { DatePicker } from "antd";
import { withAuthGuard } from "../component/higherOrder/withAuth";

const Dashboard = () => {
  // const { data, loading } = useRequest(
  //   advertisements.url,
  //   advertisements.method,
  //   {
  //     type: "mount",
  //   }
  // );

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Dashboard</p>
      <StatisticsComp />
      <TableData
        title="Recent Orders"
        columns={dashboardcolumns}
        data={dashboardData}
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
