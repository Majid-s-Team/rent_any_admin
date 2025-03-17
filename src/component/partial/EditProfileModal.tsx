import { Form, Modal } from "antd";
import ImagePicker from "./ImagePicker";
import AuthButton from "./AuthButton";
import BaseInput from "../shared/BaseInput";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

function EditProfileModal({ isModalOpen, handleCancel }: Props) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Edit Profile"
      width={400}
      centered
    >
      <Form layout="vertical">
        <Form.Item
          label="Change Image"
          name="image"
          rules={[{ required: true, message: "Please select your image" }]}
        >
          <ImagePicker onChange={() => {}} initialImgSrc={"/images/user.png"} />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your Name",
            },
          ]}
        >
          <BaseInput type="text" />
        </Form.Item>
        <AuthButton text={"Save"} />
      </Form>
    </Modal>
  );
}

export default EditProfileModal;
