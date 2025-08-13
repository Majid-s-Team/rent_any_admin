import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useRequest } from "../hooks/useRequest";
import { advertisements, advertisementsDelete } from "../repositories";
import { Advertisement } from "../types";
import { adsColumns } from "../config";

const ProductAds = () => {
  const { data, loading, pagination, setData, onPaginationChange } = useRequest(
    advertisements.url,
    advertisements.method,
    {
      type: "mount",
    }
  );

  const { execute, loading: loadingDelete } = useRequest(
    advertisementsDelete.url,
    advertisementsDelete.method,
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
      <p className="text-[#171717] text-[32px] red-bold">Product Ads</p>
      <TableData
        title="Ads"
        columns={adsColumns(handleDelete)}
        data={data as Advertisement[]}
        loading={loading || loadingDelete}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
        // input={
        //   <>
        //     <DatePicker width={200} />
        //   </>
        // }
      />
    </HomeLayout>
  );
};

export default withAuthGuard(ProductAds);
