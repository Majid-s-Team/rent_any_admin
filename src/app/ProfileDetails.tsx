import { Avatar, Divider } from "antd";
import HomeLayout from "../component/shared/HomeLayout";
import CustomButton from "../component/shared/CustomButton";
import { useState } from "react";
import DocumentsModal from "../component/partial/DocumentsModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRequest } from "../hooks/useRequest";
import { user } from "../repositories";
import { UserType } from "../types";
import { withAuthGuard } from "../component/higherOrder/withAuth";

function ProfileDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const pathname = state?.path || "";
  const isBusiness = pathname.includes("Business");

  const { data, loading } = useRequest<UserType>(user.url, user.method, {
    type: "mount",
    routeParams: id,
  });

  return (
    <HomeLayout loading={loading}>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-5 cursor-pointer"
      >
        <img className="w-6" src="/icons/left-arrow.png" alt="Back" />
        <p className="text-[#171717] text-2xl font-bold">
          {isBusiness ? "Profile Business User" : "Profile User"}
        </p>
      </div>

      <Avatar
        className="mt-5"
        src={data?.image_url || "/images/user.png"}
        size={135}
      />

      <div className="mt-5 bg-white p-4 rounded-lg grid gap-5">
        {[
          {
            label: isBusiness ? "Business Name" : "User Full",
            value: data?.name,
          },
          {
            label: isBusiness ? "Business Email" : "Email",
            value: data?.email,
          },
          { label: "Contact Number", value: data?.mobile_no },
          !isBusiness && { label: "Date Of Birth", value: data?.dob },
          !isBusiness && { label: "Gender", value: data?.gender },
        ]
          .filter(Boolean)
          .map(({ label, value }: any, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#202224]">{label}</p>
              <p className="text-sm font-semibold text-[#202224] capitalize">
                {value || "--"}
              </p>
            </div>
          ))}
      </div>

      {isBusiness && (
        <>
          <Divider className="w-[95%] mx-auto bg-[#B8B9BC]" />
          <div className="mt-5 bg-white p-4 rounded-lg grid gap-5">
            <div>
              <p className="text-[#171717] text-lg font-bold">Documents</p>
              <p className="text-[#7D7D7D] text-base">
                Required documents for approval
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-[#202224]">
                Product Certificate
              </p>
              <CustomButton onClick={() => setOpen(true)} title="View" />
            </div>
          </div>
        </>
      )}

      {open && (
        <DocumentsModal
          data={data}
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
        />
      )}
    </HomeLayout>
  );
}

export default withAuthGuard(ProfileDetails);
