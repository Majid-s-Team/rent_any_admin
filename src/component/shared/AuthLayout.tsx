import React from "react";
import Text from "../higherOrder/Text";

type AuthlayoutProps = {
  children: React.ReactNode;
  heading: string;
  subheading: string;
};

function Authlayout({ children, heading, subheading }: AuthlayoutProps) {
  // const { i18n } = useTranslation();

  // const langChange = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };

  // useEffect(() => {
  //   document.body.dir = i18n.dir();
  // }, [i18n, i18n.language]);

  return (
    <div className="grid lg:grid-cols-2 min-h-screen overflow-hidden">
      <div className="flex justify-center items-center">
        <img
          className="!w-[100%] h-[100vh] object-cover hidden lg:block"
          src="/images/auth-side-img.png"
          alt="logo"
        />
      </div>
      <div className="h-screen p-[30px] flex items-center justify-center">
        {/* <div className="flex  justify-center items-center mb-[80px]">
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
            // onChange={langChange}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="ar">Arabic</Select.Option>
          </Select>
        </div> */}
        <div className="w-full">
          <div className="text-center mt-[-60px]">
            <Text
              text={heading}
              className="text-[23.78px] text-[##171717] red-semibold"
            />
            <Text
              text={subheading}
              className="text-[14.27px] text-[#171717] red-regular"
            />
            {/* <p className="text-[23.78px] text-[##171717] red-semibold">
                {heading}
              </p> */}
            {/* <p className="text-[14.27px] text-[#171717] red-regular">
                {subheading}
              </p> */}
          </div>
          <div className=" max-w-[500px] mx-auto pt-[60px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Authlayout);
