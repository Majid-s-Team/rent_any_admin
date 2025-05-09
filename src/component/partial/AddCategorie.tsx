import { Form, Modal } from "antd";
import ImagePicker from "./ImagePicker";
import { addCategories } from "../../config";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";
import { useRequest } from "../../hooks/useRequest";
import { categoriesPost, categoriesUpdate } from "../../repositories";
import { optionpPicker } from "../../helper";

type BankEditModalProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
  record: any;
  setData: any;
  categories: any;
  setSelectedRecord: any;
};

function AddCategorie({
  isModalOpen,
  handleCancel,
  record,
  setData,
  categories,
  setSelectedRecord,
}: BankEditModalProps) {
  const { execute } = useRequest(categoriesPost.url, categoriesPost.method, {
    type: "delay",
  });

  const { execute: update } = useRequest(
    categoriesUpdate.url,
    categoriesUpdate.method,
    {
      type: "delay",
    }
  );

  const onFinish = (e: any) => {
    if (record) {
      update({
        body: { ...e },
        cbSuccess: (res) => {
          handleCancel();
          setData &&
            setData((prevData: any) =>
              prevData.map((item: any) =>
                item._id === record?._id ? res?.data : item
              )
            );
        },
      });
    } else {
      execute({
        body: { ...e, has_children: false },
        cbSuccess: (res) => {
          handleCancel();
          setData && setData((prevData: any) => [...prevData, res?.data]);
        },
      });
    }
  };

  const onClose = () => {
    setSelectedRecord(null);
    handleCancel();
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={onClose}
      footer={null}
      title="Add Categorie"
      centered
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Category Icon"
          name="image"
          rules={[{ required: true, message: "Please enter your image" }]}
        >
          <ImagePicker onChange={() => {}} initialImgSrc={record?.image_url} />
        </Form.Item>
        <div className="mt-5">
          {addCategories.map((item) => (
            <Form.Item
              label={item.title}
              key={item.name}
              name={item.name}
              rules={item.rules}
              initialValue={record?.[item.name]}
            >
              <BaseInput
                options={[
                  { value: "none", label: "None" },
                  ...optionpPicker(categories),
                ]}
                {...item}
              />
            </Form.Item>
          ))}
        </div>
        <AuthButton htmlType="submit" text={"Done"} />
      </Form>
    </Modal>
  );
}

export default AddCategorie;
