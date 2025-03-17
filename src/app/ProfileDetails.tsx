import { Avatar, Divider } from "antd";
import HomeLayout from "../component/shared/HomeLayout";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import DocumentsModal from "../component/partial/DocumentsModal";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const pathname = state && state.path;
  return (
    <HomeLayout>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-5 cursor-pointer"
      >
        <img className="w-[24px]" src="/icons/left-arrow.png" alt="" />
        <p className="text-[#171717] text-[32px] red-bold">
          {pathname.includes("Business")
            ? "Profile Business User"
            : "Profile User"}
        </p>
      </div>
      <Avatar className="mt-5" src={"/images/user.png"} size={135} />
      {pathname.includes("Business") ? (
        <div className="mt-5 bg-white p-4 rounded-[14px] grid gap-5">
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">Business Name</p>
            <p className="text-[14px] red-semibold text-[#202224]">
              Ryan Levin
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">
              Business Email
            </p>
            <p className="text-[14px] red-semibold text-[#202224]">
              ryan2001@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">
              Contact Number
            </p>
            <p className="text-[14px] red-semibold text-[#202224]">123456789</p>
          </div>
        </div>
      ) : (
        <div className="mt-5 bg-white p-4 rounded-[14px] grid gap-5">
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">Full Name</p>
            <p className="text-[14px] red-semibold text-[#202224]">
              Ryan Levin
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">Email Address</p>
            <p className="text-[14px] red-semibold text-[#202224]">
              ryan2001@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">Phone Number</p>
            <p className="text-[14px] red-semibold text-[#202224]">123456789</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">Date Of Birth</p>
            <p className="text-[14px] red-semibold text-[#202224]">12/03/24</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] red-bold text-[#202224]">Gender</p>
            <p className="text-[14px] red-semibold text-[#202224]">Male</p>
          </div>
        </div>
      )}
      {pathname.includes("Business") && (
        <>
          <div className="w-[95%] mx-auto">
            <Divider className="bg-[#B8B9BC]" />
          </div>
          <div className="mt-5 bg-white p-4 rounded-[14px] grid gap-5">
            <div>
              <p className="text-[#171717] text-[20px] red-bold">Documents</p>
              <p className="text-[#7D7D7D] text-[16px] red-regular">
                Required documents for approval
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[18px] red-medium text-[#202224]">
                Product Certificate
              </p>
              <CustomButton onClick={() => setOpen(true)} title={"View"} />
            </div>
          </div>
          <div className="mt-5 bg-white p-4 rounded-[14px] grid gap-5">
            <div>
              <p className="text-[#171717] text-[20px] red-bold">Documents</p>
              <p className="text-[#7D7D7D] text-[16px] red-regular">
                Required documents for approval
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[18px] red-medium text-[#202224]">
                Product Certificate
              </p>
              <CustomButton onClick={() => setOpen(true)} title={"View"} />
            </div>
          </div>
        </>
      )}
      {open && (
        <DocumentsModal
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
        />
      )}
    </HomeLayout>
  );
}

export default ProfileDetails;
