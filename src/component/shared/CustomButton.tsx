import { Button } from "antd";
import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  htmlType?: "submit" | "button" | "reset" | undefined;
  loading?: boolean;
};

function CustomButton({
  title,
  onClick,
  icon,
  backgroundColor = "#4A7ABC",
  textColor = "#fff",
  className,
  htmlType = "submit",
  loading,
}: Props) {
  return (
    <Button
      htmlType={htmlType}
      className={`rounded-[6px] h-[40px] red-medium px-10 border-0 text-[14px] red-bold ${className}`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onClick}
      icon={icon}
      loading={loading}
    >
      {title}
    </Button>
  );
}

export default React.memo(CustomButton);
