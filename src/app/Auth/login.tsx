import { Form } from "antd";
import AuthButton from "../../component/partial/AuthButton";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../component/shared/AuthLayout";
import BaseInput from "../../component/shared/BaseInput";
import { loginFields } from "../../config/index";
import { FeildType, RouteTypes } from "../../types";
import { withAuthGuard } from "../../component/higherOrder/withAuth";
function Login() {
  // const { login, loading } = useAuth();
  // const [email, setEmail] = useState<string>()
  const navigate = useNavigate();

  return (
    <AuthLayout heading={"Welcome Back"} subheading={"Login to continue"}>
      <div>
        <Form
          layout="vertical"
          // onFinish={(values: { email: string; password: string }) => {
          //   // login(values);
          //   setEmail(values.email);
          // }}
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
          {/* <div className="flex justify-between items-center">
            <Checkbox className="text-[#5F697D] text-[15px] red-regular">
              Remember me
            </Checkbox>
            <Button
              type="link"
              // to={"/forgot-password"}
              onClick={() =>
                navigate("/forgot-password", {
                  state: { email: "arif@gmail.com" },
                })
              }
              className="!text-[#E33C3C] text-[15px] red-regular"
            >
              Forgot Password?
            </Button>
          </div> */}
          <AuthButton
            text={"Login"}
            // loading={loading}
            onClick={() => navigate("/dashboard")}
          />
        </Form>
      </div>
    </AuthLayout>
  );
}

export default withAuthGuard(Login, RouteTypes.AUTH);
