import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { faqsColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import FaqsModal from "../component/partial/FaqsModal";
import { useRequest } from "../hooks/useRequest";
import { faqsDelete, faqsGet } from "../repositories";
import { FaqsType } from "../types";

const Faqs = () => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<FaqsType | null>(null);
  const { data, setData, loading } = useRequest(faqsGet.url, faqsGet.method, {
    type: "mount",
  });

  const { execute } = useRequest(faqsDelete.url, faqsDelete.method, {
    type: "delay",
  });

  const handleDelete = (id: string) => {
    execute({
      routeParams: id,
      cbSuccess: () => {
        setData((p: FaqsType[]) => p.filter((item) => item._id !== id));
      },
    });
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-between">
        <p className="text-[#171717] text-[32px] red-bold">FAQS</p>
        <CustomButton title="Add" onClick={() => setOpen(true)} />
      </div>
      <TableData
        title="View List FAQs"
        columns={faqsColumns({
          setOpen,
          setSelectedRecord,
          handleDelete,
        })}
        data={data as FaqsType[]}
        loading={loading}
      />
      {open && (
        <FaqsModal
          setRecord={setSelectedRecord}
          record={selectedRecord}
          isModalOpen={open}
          setData={setData}
          handleCancel={() => setOpen(false)}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(Faqs);
