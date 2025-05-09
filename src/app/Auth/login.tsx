import { Checkbox, Form } from "antd";
import AuthButton from "../../component/partial/AuthButton";
import AuthLayout from "../../component/shared/AuthLayout";
import BaseInput from "../../component/shared/BaseInput";
import { loginFields } from "../../config/index";
import { FeildType, RouteTypes } from "../../types";
import { withAuthGuard } from "../../component/higherOrder/withAuth";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Text from "../../component/higherOrder/Text";

function Login() {
  const { login, loading } = useAuth();

  return (
    <AuthLayout heading={"welcome"} subheading={"login"}>
      <div>
        <Form
          layout="vertical"
          onFinish={(values: { email: string; password: string }) => {
            login(values);
          }}
        >
          {loginFields.map((item: FeildType) => {
            return (
              <Form.Item
                label={item.title}
                key={item.name}
                name={item.name}
                rules={item.rules}
              >
                <BaseInput {...item} />
              </Form.Item>
            );
          })}
          <div className="flex justify-between items-center">
            <Checkbox className="text-[#5F697D] text-[15px] urbanist-regular">
              Remember me
            </Checkbox>
            <Link
              to="/forgot-password"
              type="link"
              // to={"/forgot-password"}
              // onClick={() =>
              //   navigate("/forgot-password", {
              //     state: { email: "arif@gmail.com" },
              //   })
              // }
              className="!text-[#E33C3C] text-[15px] urbanist-regular"
            >
              <Text text={"forgotPassword"} />
              {/* Forgot Password? */}
            </Link>
          </div>
          <AuthButton
            text={"loginBtn"}
            loading={loading}
            htmlType="submit"
            // onClick={() => navigate("/dashboard")}
          />
        </Form>
      </div>
    </AuthLayout>
  );
}

export default withAuthGuard(Login, RouteTypes.AUTH);
