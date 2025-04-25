import { Form, Modal } from "antd";
import ImagePicker from "./ImagePicker";
import AuthButton from "./AuthButton";
import BaseInput from "../shared/BaseInput";
import { useRequest } from "../../hooks/useRequest";
import { updateUser } from "../../repositories";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { UserActionTypes } from "../../types/contexts";
import { useUser } from "../../hooks/useUser";
import { UserType } from "../../types";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
};

function EditProfileModal({ isModalOpen, handleCancel }: Props) {
  const { user } = useAuth();
  const [, dispatch] = useUser();
  const [image, setImage] = useState<FormData | undefined>(undefined);
  const { execute, loading } = useRequest(updateUser.url, updateUser.method, {
    type: "delay",
    routeParams: user?._id,
  });

  const onFinish = (e: any) => {
    execute({
      body: { ...e, image_url: image },
      cbSuccess: (data) => {
        handleCancel();
        dispatch({
          type: UserActionTypes.PUT,
          payload: data?.data as Partial<UserType>,
        });
      },
    });
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title="Edit Profile"
      width={400}
      centered
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Change Image"
          name="image_url"
          rules={[{ required: true, message: "Please select your image" }]}
          initialValue={user?.image_url}
        >
          <ImagePicker
            onChange={(e) => setImage(e)}
            initialImgSrc={user?.image_url}
          />
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
          initialValue={user?.name}
        >
          <BaseInput type="text" />
        </Form.Item>
        <AuthButton text={"Save"} htmlType="submit" loading={loading} />
      </Form>
    </Modal>
  );
}

export default EditProfileModal;
