import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { dashboardcolumns, dashboardData } from "../config";
import { DatePicker } from "antd";
import { withAuthGuard } from "../component/higherOrder/withAuth";

const ProductAds = () => {
  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Product Ads</p>
      <TableData
        title="Ads"
        columns={dashboardcolumns}
        data={dashboardData}
        // loading={loading}
        input={
          <>
            <DatePicker width={200} />
          </>
        }
      />
    </HomeLayout>
  );
};

export default withAuthGuard(ProductAds);
