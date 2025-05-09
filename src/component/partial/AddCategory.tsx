import { Form, Modal } from "antd";
import ImagePicker from "./ImagePicker";
import { addCategories } from "../../config";
import BaseInput from "../shared/BaseInput";
import AuthButton from "./AuthButton";
import { useRequest } from "../../hooks/useRequest";
import {
  categories,
  categoriesPost,
  categoriesUpdate,
} from "../../repositories";
import { optionpPicker, updateState } from "../../helper";
import { Category } from "../../types";
import { Dispatch } from "react";

type AddCategoryModalProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
  record: Category | null;
  setData: Dispatch<React.SetStateAction<Category[]>>;
  setSelectedRecord: Dispatch<React.SetStateAction<Category | null>>;
};

function AddCategory({
  isModalOpen,
  handleCancel,
  record,
  setData,
  setSelectedRecord,
}: AddCategoryModalProps) {
  const { data: categoriesData } = useRequest(
    categories.url,
    categories.method,
    {
      type: "mount",
    }
  );

  const { execute: createCategory, loading: loadingCreate } =
    useRequest<Category>(categoriesPost.url, categoriesPost.method, {
      type: "delay",
    });

  const { execute: updateCategory, loading: loadingUpdate } =
    useRequest<Category>(categoriesUpdate.url, categoriesUpdate.method, {
      type: "delay",
    });

  const onFinish = (payload: any) => {
    const action = record ? updateCategory : createCategory;
    action({
      body: { ...payload, has_children: false },
      routeParams: record?._id,
      cbSuccess: (res) => {
        setData((prev) => updateState(prev, res.data, !!record));
        onClose();
      },
    });
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
      title={record ? "Edit Category" : "Add Category"}
      centered
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Category Icon"
          name="image_url"
          rules={[{ required: true, message: "Please enter your image" }]}
          initialValue={record?.image_url}
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
              initialValue={record?.[item.name as keyof Category]}
            >
              <BaseInput
                options={[
                  { value: "none", label: "None" },
                  ...optionpPicker(categoriesData as Category[]),
                ]}
                {...item}
              />
            </Form.Item>
          ))}
        </div>
        <AuthButton
          loading={loadingCreate || loadingUpdate}
          htmlType="submit"
          text={"Done"}
        />
      </Form>
    </Modal>
  );
}

export default AddCategory;
