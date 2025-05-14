import { Form, Modal } from "antd";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";
import { useRequest } from "../../hooks/useRequest";
import { faqsPost, faqsUpdate } from "../../repositories";
import { Dispatch, SetStateAction } from "react";
import { FaqsType } from "../../types";
import { updateState } from "../../helper";

type Props = {
  isModalOpen: boolean;
  record: FaqsType | null;
  setRecord: Dispatch<SetStateAction<FaqsType | null>>;
  handleCancel: () => void;
  setData: Dispatch<SetStateAction<FaqsType[]>>;
};

function FaqsModal({
  isModalOpen,
  handleCancel,
  setData,
  record,
  setRecord,
}: Props) {
  const { execute: createFaq, loading: loadingCreate } = useRequest(
    faqsPost.url,
    faqsPost.method,
    {
      type: "delay",
    }
  );

  const { execute: updateFaq, loading: loadingUpdate } = useRequest(
    faqsUpdate.url,
    faqsUpdate.method,
    {
      type: "delay",
      routeParams: record?._id,
    }
  );

  const onFinish = (e: FaqsType) => {
    const action = record ? updateFaq : createFaq;
    action({
      body: e,
      cbSuccess: (res) => {
        setData((prev) => updateState(prev, res.data, !!record));
        handleCancel();
      },
    });
  };

  const onCancel = () => {
    handleCancel();
    setRecord(null);
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
      title="Add Faqs"
      centered
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Question"
          name="question"
          initialValue={record?.question}
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
          initialValue={record?.answer}
          rules={[
            {
              required: true,
              message: "Please enter your Answer",
            },
          ]}
        >
          <BaseInput type="textarea" />
        </Form.Item>
        <AuthButton
          loading={loadingCreate || loadingUpdate}
          htmlType="submit"
          text={"Submit"}
        />
      </Form>
    </Modal>
  );
}

export default FaqsModal;
