import HomeLayout from "../component/shared/HomeLayout";
import { withAuthGuard } from "../component/higherOrder/withAuth";
import { useState } from "react";
import RichTextModal from "../component/partial/RichTextModal";

const StaticContent = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  return (
    <HomeLayout>
      <div className="flex items-center justify-between">
        <p className="text-[#171717] text-[32px] red-bold">
          Subscription Packages
        </p>
      </div>
      <div>
        <div
          onClick={() => setIsModalOpen1(true)}
          className="flex items-center cursor-pointer justify-between p-5 my-5 bg-white rounded-[15px]"
        >
          <p className="red-semibold text-[18.55px]">Terms & Conditions</p>
          <img className="w-[20px]" src="/icons/edit-blue.png" alt="" />
        </div>
        <div
          onClick={() => setIsModalOpen1(true)}
          className="flex items-center cursor-pointer justify-between p-5 my-5 bg-white rounded-[15px]"
        >
          <p className="red-semibold text-[18.55px]">Privacy Policy</p>
          <img className="w-[20px]" src="/icons/edit-blue.png" alt="" />
        </div>
      </div>
      {isModalOpen1 && (
        <RichTextModal
          title="Terms & Conditions"
          onCancel={() => setIsModalOpen1(false)}
          open={isModalOpen1}
        />
      )}
    </HomeLayout>
  );
};

export default withAuthGuard(StaticContent);
