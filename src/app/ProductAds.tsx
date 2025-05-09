import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { dashboardcolumns } from "../config";
import { DatePicker } from "antd";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useRequest } from "../hooks/useRequest";
import { advertisements } from "../repositories";

const ProductAds = () => {
  const { data, loading, pagination, onPaginationChange } = useRequest<any>(
    advertisements.url,
    advertisements.method,
    {
      type: "mount",
    }
  );

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Product Ads</p>
      <TableData
        title="Ads"
        columns={dashboardcolumns}
        data={data}
        loading={loading}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
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
