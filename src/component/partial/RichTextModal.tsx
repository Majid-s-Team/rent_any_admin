import { Button, Modal } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// interface CashOutprops {
//   isModalOpen: boolean;
//   handleCancel: () => void;
//   title: string;
// }

function RichText({ isModalOpen, handleCancel, title }: any) {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      title={title}
      // className="!h-[420px]"
      // height={420}
      centered
    >
      <ReactQuill
        className="h-[300px] background-[#8F9BBA] border-0"
        // style={{ height: "300px", backgroundColor: "#8F9BBA" }}
        value={value}
        placeholder="Write something"
        onChange={setValue}
        theme="snow" // 'bubble' is also available
      />
      <div className="flex lg:flex-row flex-col gap-4 mt-20">
        <Button
          onClick={() => handleCancel()}
          className="lg:w-[275px] w-full h-[50px] border border-[#4A7ABC] bg-transparent rounded-[10px] text-[14px] text-[#4A7ABC] red-medium"
        >
          Cancel
        </Button>
        <Button
          htmlType="submit"
          className="lg:w-[275px] w-full h-[50px] bg-[#4A7ABC] rounded-[10px] text-[14px] text-white red-medium"
        >
          Save
        </Button>
      </div>
    </Modal>
  );
}

export default React.memo(RichText);
