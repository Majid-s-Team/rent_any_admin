import React from "react";

interface IOverviewcard {
  title: string;
  value: string;
  type: string;
  valueClassName: string;
}
function Overviewcard({ title, value, valueClassName, type }: IOverviewcard) {
  return (
    <div className="h-[134px] border border-[#DFE0E0] flex flex-col justify-center bg-white rounded-[15px] p-6">
      <p className={`text-[#2A2F31] lexendRegular text-[20px] `}>{title}</p>
      <p
        className={` lexendSemibold ${
          type === "color" ? `${valueClassName}` : "text-[#2A2F31] text-[30px]"
        } `}
      >
        {value}
      </p>
    </div>
  );
}

export default React.memo(Overviewcard);
