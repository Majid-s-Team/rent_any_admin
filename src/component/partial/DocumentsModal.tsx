import { Modal } from "antd";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

function DocumentsModal({ isModalOpen, handleCancel }: Props) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Documents"
      width={350}
      centered
    >
      <div className="grid gap-4">
        <div>
          <p className="text-[#171717] text-[14px] red-semibold">Front</p>
          <img className="w-[319px]" src="/images/card-front.png" alt="" />
        </div>
        <div>
          <p className="text-[#171717] text-[14px] red-semibold">Back</p>
          <img className="w-[319px]" src="/images/card-back.png" alt="" />
        </div>
      </div>
    </Modal>
  );
}

export default DocumentsModal;
