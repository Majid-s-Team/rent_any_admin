import { Form, Modal } from "antd";
import ImagePicker from "./ImagePicker";
import { addCategories } from "../../config";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";

type BankEditModalProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

function AddCategorie({ isModalOpen, handleCancel }: BankEditModalProps) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Add Categorie"
      centered
    >
      <Form layout="vertical">
        <Form.Item
          label="Category Icon"
          name="image"
          rules={[{ required: true, message: "Please enter your image" }]}
        >
          <ImagePicker onChange={() => {}} initialImgSrc={undefined} />
        </Form.Item>
        <div className="mt-5">
          {addCategories.map((item) => (
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

export default AddCategorie;
