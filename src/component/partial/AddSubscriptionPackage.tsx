import { Form, Modal } from "antd";
import AuthButton from "./AuthButton";
import ImagePicker from "./ImagePicker";
import BaseInput from "../shared/BaseInput";
import { addSubscription } from "../../config";

interface CashOutprops {
  isModalOpen: boolean;
  handleCancel: () => void;
}

function AddSubscriptionPackage({ isModalOpen, handleCancel }: CashOutprops) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Add Subscription Package"
      centered
    >
      <Form layout="vertical">
        <Form.Item
          label="Package Icon"
          name="image"
          rules={[{ required: true, message: "Please enter your image" }]}
        >
          <ImagePicker onChange={() => {}} initialImgSrc={undefined} />
        </Form.Item>
        <div className="mt-5">
          {addSubscription.map((item) => (
            <Form.Item
              label={item.title}
              key={item.name}
              name={item.name}
              rules={item.rules}
            >
              <BaseInput {...item} />
            </Form.Item>
          ))}
        </div>
        <AuthButton text={"Done"} />
      </Form>
    </Modal>
  );
}

export default AddSubscriptionPackage;
