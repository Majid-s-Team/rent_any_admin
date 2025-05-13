import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { subscriptionColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import AddSubscriptionPackage from "../component/partial/AddSubscriptionPackage";
import { boostingPackage, deleteBoostingPackage } from "../repositories";
import { useRequest } from "../hooks/useRequest";
import { BoostPackage } from "../types";

const Subscription = () => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<BoostPackage | null>(
    null
  );
  const { data, loading, setData } = useRequest(
    boostingPackage.url,
    boostingPackage.method,
    {
      type: "mount",
    }
  );

  const { execute } = useRequest(
    deleteBoostingPackage.url,
    deleteBoostingPackage.method,
    {
      type: "delay",
    }
  );

  const handleDelete = (id: string) => {
    execute({
      routeParams: id,
      cbSuccess: () => {
        setData((p: BoostPackage[]) => p.filter((item) => item._id !== id));
      },
    });
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-between">
        <p className="text-[#171717] text-[32px] red-bold">Boost Packages</p>
        <CustomButton title="Add" onClick={() => setOpen(true)} />
      </div>

      <TableData
        title="View List Boost Packages"
        columns={subscriptionColumns({
          setOpen,
          setSelectedRecord,
          handleDelete,
        })}
        loading={loading}
        data={data as BoostPackage[]}
      />
      {open && (
        <AddSubscriptionPackage
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
          record={selectedRecord}
          setData={setData}
          setSelectedRecord={setSelectedRecord}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(Subscription);
