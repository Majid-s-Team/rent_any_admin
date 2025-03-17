import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { subscribersColumns, subscribersData } from "../config";

function ListofSubscribers() {
  return (
    <HomeLayout>
      <p className="text-[#171717] text-[32px] red-bold">Subscribers</p>
      <TableData
        title="List of subscribers"
        columns={subscribersColumns}
        data={subscribersData}
        // loading={loading}
      />
    </HomeLayout>
  );
}

export default ListofSubscribers;
