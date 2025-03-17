import React from "react";
// import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  value: string;
  icon: string;
  down?: boolean;
  presantage?: string;
};

function Statistics({ title, value, icon, down, presantage }: Props) {
  return (
    <div className="rounded-[14px] p-6 custom-shadow bg-[#fff]">
      <div className="flex justify-between items-center gap-3">
        <div>
          <p className="text-[16px] red-semibold mb-1 text-[#262626]">
            {title}
          </p>
          <p className="text-[28px] red-bold text-[#171717]">{value}</p>
        </div>
        <img className="w-[60px] h-[60px]" src={icon} alt="" />
      </div>
      <div className="flex gap-2 items-center pt-3">
        <img
          className="w-[20px] h-[20px]"
          src={down ? "/icons/down-arrow.png" : "/icons/up-arrow.png"}
          alt=""
        />
        <p
          className={`text-[16px] red-semibold ${
            down ? "text-[#F93C65]" : "text-[#00B69B]"
          }`}
        >
          {presantage} <span className="text-[#7D7D7D]">Up from yesterday</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default React.memo(Statistics);
