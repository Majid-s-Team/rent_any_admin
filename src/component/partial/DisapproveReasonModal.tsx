import { Form, Modal } from "antd";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";
import { useRequest } from "../../hooks/useRequest";
import { updateUser } from "../../repositories";
import { UserType } from "../../types";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
  setData: any;
  record: UserType;
};

function DisapproveReasonModal({
  isModalOpen,
  handleCancel,
  record,
  setData,
}: Props) {
  const { execute, loading } = useRequest(
    updateUser.url,
    updateUser.method,
    {}
  );

  const handleDisapprove = (val: { disapprove_reason: string }) => {
    execute({
      body: { is_admin_approved: false, ...val },
      routeParams: record._id,
      type: "mount",
      cbSuccess: () => {
        setData((p: UserType[]) =>
          p.filter((item) =>
            item._id === record?._id
              ? { ...item, is_admin_approved: false }
              : item
          )
        );
        handleCancel();
      },
    });
  };
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Disapprove Reason"
      centered
    >
      <Form onFinish={handleDisapprove} layout="vertical" className="mt-5">
        <Form.Item
          label="Reason"
          name="disapprove_reason"
          rules={[{ required: true, message: "Please input your reason!" }]}
        >
          <BaseInput type="textarea" />
        </Form.Item>
        <AuthButton loading={loading} text="Submit" htmlType="submit" />
      </Form>
    </Modal>
  );
}

export default DisapproveReasonModal;
