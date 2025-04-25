import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { faqs, faqsColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import FaqsModal from "../component/partial/FaqsModal";
import { useRequest } from "../hooks/useRequest";
import { faqsGet } from "../repositories";

const Faqs = () => {
  const [open, setOpen] = useState(false);
  const { data, setData } = useRequest(faqsGet.url, faqsGet.method, {
    type: "mount",
  });

  console.log(data, "data");

  return (
    <HomeLayout>
      <div className="flex items-center justify-between">
        <p className="text-[#171717] text-[32px] red-bold">FAQS</p>
        <CustomButton title="Add" onClick={() => setOpen(true)} />
      </div>

      <TableData
        title="View List FAQs"
        columns={faqsColumns}
        data={faqs}
        // loading={loading}
      />
      {open && (
        <FaqsModal
          isModalOpen={open}
          setData={setData}
          handleCancel={() => setOpen(false)}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(Faqs);
