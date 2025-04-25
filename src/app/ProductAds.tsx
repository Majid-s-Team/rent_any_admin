import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { dashboardcolumns, dashboardData } from "../config";
import { DatePicker } from "antd";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useRequest } from "../hooks/useRequest";
import { advertisements } from "../repositories";

const ProductAds = () => {
  const { data } = useRequest(advertisements.url, advertisements.method, {
    type: "mount",
  });

  console.log(data, "data");

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Product Ads</p>
      <TableData
        title="Ads"
        columns={dashboardcolumns}
        data={dashboardData}
        // loading={loading}
        // onPaginationChange={onPaginationChange}
        // pagination={pagination}
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
