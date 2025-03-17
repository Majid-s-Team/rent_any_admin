import React from "react";
import { Divider, Select } from "antd";

type AuthlayoutProps = {
  children: React.ReactNode;
  heading: string;
  subheading: string;
};

function Authlayout({ children, heading, subheading }: AuthlayoutProps) {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="flex justify-center items-center">
        <img
          className="!w-[100%] h-[100%] object-cover hidden lg:block"
          src="/images/auth-side-img.png"
          alt="logo"
        />
      </div>
      <div className="h-screen p-[30px]">
        <div className="flex  justify-center items-center mb-[80px]">
          <p className="text-[15px] red-regular">Language</p>
          <Divider
            type="vertical"
            style={{ height: "36px", background: "#FFAF15" }}
          />
          <Select
            placeholder="English"
            className="login-select"
            defaultValue={"en"}
            style={{ width: 100, border: 0 }}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="ar">Arabic</Select.Option>
          </Select>
        </div>
        <div className="pt-[60px] flex justify-center">
          <div className="text-center">
            <div className="pt-[60px]">
              <p className="text-[23.78px] text-[##171717] red-semibold">
                {heading}
              </p>
              <p className="text-[14.27px] text-[#171717] red-regular">
                {subheading}
              </p>
            </div>
          </div>
        </div>
        <div className=" max-w-[500px] mx-auto pt-[60px]">{children}</div>
      </div>
    </div>
  );
}

export default React.memo(Authlayout);
