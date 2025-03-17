import HomeLayout from "../component/shared/HomeLayout";
import TableData from "../component/shared/Table";
import { faqs, faqsColumns } from "../config";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import FaqsModal from "../component/partial/FaqsModal";

const Faqs = () => {
  const [open, setOpen] = useState(false);
  return (
    <HomeLayout>
      <div className="flex items-center justify-between">
        <p className="text-[#171717] text-[32px] red-bold">FAQS</p>
        <CustomButton title="Add" onClick={() => setOpen(true)} />
      </div>

      <TableData title="View List FAQs" columns={faqsColumns} data={faqs} />
      {open && (
        <FaqsModal isModalOpen={open} handleCancel={() => setOpen(false)} />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(Faqs);
