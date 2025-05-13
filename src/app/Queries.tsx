import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { queriesColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { queries } from "../repositories";
import { useRequest } from "../hooks/useRequest";

const Queries = () => {
  const { data, loading } = useRequest(queries.url, queries.method, {
    type: "mount",
  });

  console.log(data, "data");

  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Queries</p>
      <TableData
        title=""
        loading={loading}
        columns={queriesColumns}
        data={data as any}
      />
    </HomeLayout>
  );
};

export default withAuthGuard(Queries);
