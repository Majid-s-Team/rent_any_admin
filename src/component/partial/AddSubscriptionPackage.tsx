import { Form, Modal } from "antd";
import AuthButton from "./AuthButton";
import ImagePicker from "./ImagePicker";
import BaseInput from "../shared/BaseInput";
import { addSubscription } from "../../config";
import { useRequest } from "../../hooks/useRequest";
import {
  createBoostingPackage,
  updateBoostingPackage,
} from "../../repositories";
import { Dispatch } from "react";
import { updateState } from "../../helper";
import { BoostPackage } from "../../types";

type AddPackageProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
  record: BoostPackage | null;
  setData: Dispatch<React.SetStateAction<BoostPackage[]>>;
  setSelectedRecord: Dispatch<React.SetStateAction<BoostPackage | null>>;
};

function AddSubscriptionPackage({
  isModalOpen,
  handleCancel,
  record,
  setData,
  setSelectedRecord,
}: AddPackageProps) {
  const { execute: createPackage, loading: loadingCreate } = useRequest(
    createBoostingPackage.url,
    createBoostingPackage.method,
    {
      type: "delay",
    }
  );

  const { execute: updatePackage, loading: loadingUpdate } = useRequest(
    updateBoostingPackage.url,
    updateBoostingPackage.method,
    {
      type: "delay",
    }
  );

  const onFinish = (payload: BoostPackage) => {
    const action = record ? updatePackage : createPackage;

    action({
      body: {
        ...payload,
        price: payload?.price.toString(),
        duration: payload?.duration.toString(),
      },
      routeParams: record?._id,
      cbSuccess: (res) => {
        setData((prev) => updateState(prev, res.data, !!record));
        onClose();
      },
    });

    // if (record) {
    //   updatePackage({
    //     body: {
    //       ...payload,
    //       price: payload?.price.toString(),
    //       duration: payload?.duration.toString(),
    //     },
    //     routeParams: record?._id,
    //     cbSuccess: (res) => {
    //       setData((prev) => updateState(prev, res.data, true));
    //       onClose();
    //     },
    //   });
    // } else {
    //   createPackage({
    //     body: {
    //       ...payload,
    //       price: payload?.price.toString(),
    //       duration: payload?.duration.toString(),
    //     },
    //     cbSuccess: (res) => {
    //       setData((prev) => updateState(prev, res.data, false));
    //       onClose();
    //     },
    //   });
    // }
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
      title="Add Subscription Package"
      centered
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Package Icon"
          name="image_url"
          initialValue={record?.image_url}
          rules={[{ required: true, message: "Please enter your image" }]}
        >
          <ImagePicker onChange={() => {}} initialImgSrc={record?.image_url} />
        </Form.Item>
        <div className="mt-5">
          {addSubscription.map((item) => (
            <Form.Item
              label={item.title}
              key={item.name}
              name={item.name}
              rules={item.rules}
              initialValue={record?.[item.name as keyof BoostPackage]}
            >
              <BaseInput {...item} />
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

export default AddSubscriptionPackage;
