import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { subscriptionColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import AddSubscriptionPackage from "../component/partial/AddSubscriptionPackage";
import { boostingPackage } from "../repositories";
import { useRequest } from "../hooks/useRequest";

const Subscription = () => {
  const [open, setOpen] = useState(false);
  const { data, loading } = useRequest<any>(
    boostingPackage.url,
    boostingPackage.method,
    {
      type: "mount",
    }
  );
  return (
    <HomeLayout>
      <div className="flex items-center justify-between">
        <p className="text-[#171717] text-[32px] red-bold">
          Subscription Packages
        </p>
        <CustomButton title="Add" onClick={() => setOpen(true)} />
      </div>

      <TableData
        title="Subscription"
        columns={subscriptionColumns}
        loading={loading}
        data={data}
      />
      {open && (
        <AddSubscriptionPackage
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(Subscription);
