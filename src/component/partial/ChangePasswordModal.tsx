import { Modal, Form } from "antd";
import { changePassword } from "../../config";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";
import { useRequest } from "../../hooks/useRequest";
import { changePassword as Change } from "../../repositories";
import { FeildType } from "../../types";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

function ChangePasswordModal({ isModalOpen, handleCancel }: Props) {
  const { execute } = useRequest(Change.url, Change.method, {
    type: "delay",
  });

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Change Password"
      centered
    >
      <Form
        layout="vertical"
        onFinish={(e) =>
          execute({
            body: { ...e },
            cbSuccess: () => {
              handleCancel();
            },
          })
        }
      >
        {changePassword.map((item: FeildType) => {
          return (
            <Form.Item
              label={item.title}
              key={item.name}
              name={item.name}
              rules={item.rules}
            >
              <BaseInput {...item} />
            </Form.Item>
          );
        })}
        <AuthButton htmlType="submit" text={"Change Password"} />
      </Form>
    </Modal>
  );
}

export default ChangePasswordModal;
