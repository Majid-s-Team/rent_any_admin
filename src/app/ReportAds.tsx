import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { DatePicker } from "antd";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useRequest } from "../hooks/useRequest";
import { reportAds, reportAdsDelete } from "../repositories";
import { Advertisement } from "../types";
import { reportAdsColumns } from "../config";

const ReportAds = () => {
  const { data, loading, pagination, setData, onPaginationChange } = useRequest(
    reportAds.url,
    reportAds.method,
    {
      type: "mount",
    }
  );

  const { execute, loading: loadingDelete } = useRequest(
    reportAdsDelete.url,
    reportAdsDelete.method,
    {}
  );

  const handleDelete = (id: string) => {
    execute({
      routeParams: id,
      cbSuccess: () => {
        setData((p: Advertisement[]) => p.filter((item) => item._id !== id));
      },
    });
  };

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Reported Ads</p>
      <TableData
        title="Ads"
        columns={reportAdsColumns(handleDelete)}
        data={data as Advertisement[]}
        loading={loading || loadingDelete}
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

export default withAuthGuard(ReportAds);
