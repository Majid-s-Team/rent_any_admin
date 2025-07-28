import { Modal } from "antd";
import { UserType } from "../../types";
import PDFViewer from "./PDFViewer";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
  data: UserType | null;
  license: Boolean;
};

function DocumentsModal({ isModalOpen, handleCancel, data, license }: Props) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Documents"
      width={license ? 850 : 500}
      centered
    >
      <div className="grid gap-4">
        {license ? (
          <div>
            <p className="text-[#171717] text-[14px] red-semibold mb-4">
              License
            </p>

            {data?.license && data.license.endsWith(".pdf") ? (
              <PDFViewer fileUrl={data.license} />
            ) : (
              <p className="text-[#171717] text-[20px] h-[200px] flex justify-center items-center red-semibold">
                No license uploaded
              </p>
            )}
            {/* <img
              // className="w-[319px] h-[200px]"
              src={data?.license || "/images/license.png"}
              alt=""
            /> */}
          </div>
        ) : (
          <>
            <div>
              <p className="text-[#171717] text-[14px] red-semibold">Front</p>
              <img
                className="w-full h-[300px] object-cover"
                src={data?.id_front || "/images/card-front.png"}
                alt=""
              />
            </div>
            <div>
              <p className="text-[#171717] text-[14px] red-semibold">Back</p>
              <img
                className="w-full h-[300px] object-cover"
                src={data?.id_back || "/images/card-back.png"}
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default DocumentsModal;
