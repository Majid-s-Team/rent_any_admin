import { Button } from "antd";
import React from "react";
import { ButtonComponentProps } from "../../types";

function AuthButton({
  text,
  onClick,
  htmlType,
  loading,
}: ButtonComponentProps) {
  return (
    <Button
      htmlType={htmlType}
      loading={loading}
      onClick={onClick}
      className="w-full h-[54px] bg-[#4A7ABC] hover:!bg-[#4A7ABC] rounded-[10px] hover:border-none text-[16px] red-medium  text-white hover:!text-white my-[25px]"
    >
      <p>{text}</p>
    </Button>
  );
}

export default React.memo(AuthButton);
