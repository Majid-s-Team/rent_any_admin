import { Form, Modal } from "antd";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";
import { useRequest } from "../../hooks/useRequest";
import { faqsPost } from "../../repositories";
import { Dispatch, SetStateAction } from "react";

type BankEditModalProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
  setData?: Dispatch<SetStateAction<any | undefined>>;
};

function FaqsModal({ isModalOpen, handleCancel, setData }: BankEditModalProps) {
  const { execute } = useRequest(faqsPost.url, faqsPost.method, {
    type: "delay",
  });
  const onFinish = (e: any) => {
    execute({
      body: { ...e },
      cbSuccess(data) {
        setData && setData((prevData: any) => [...prevData, data]);
        handleCancel();
      },
    });
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Add Faqs"
      centered
    >
      <Form layout="vertical" onFinish={onFinish}>
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
