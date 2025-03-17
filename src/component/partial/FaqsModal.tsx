import { Form, Modal } from "antd";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";

type BankEditModalProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

function FaqsModal({ isModalOpen, handleCancel }: BankEditModalProps) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Add Faqs"
      centered
    >
      <Form layout="vertical">
        <Form.Item
          label="Question"
          name="question"
          rules={[
            {
              required: true,
              message: "Please enter your Question",
            },
          ]}
        >
          <BaseInput type="text" />
        </Form.Item>
        <Form.Item
          label="Answer"
          name="answer"
          rules={[
            {
              required: true,
              message: "Please enter your Answer",
            },
          ]}
        >
          <BaseInput type="textarea" />
        </Form.Item>
        <AuthButton htmlType="submit" text={"Submit"} />
      </Form>
    </Modal>
  );
}

export default FaqsModal;
