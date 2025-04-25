import { Form, Input } from "antd";
import AuthButton from "../../component/partial/AuthButton";
import AuthLayout from "../../component/shared/AuthLayout";
import { useAuth } from "../../hooks/useAuth";
import { withAuthGuard } from "../../component/higherOrder/withAuth";
import { RouteTypes } from "../../types";
import { useParams } from "react-router-dom";
function Resetpassword() {
  const { reset_password_token } = useParams();

  // alert(reset_password_token);
  const [form] = Form.useForm();
  const { resetpassowrd, loading } = useAuth();

  return (
    <AuthLayout heading={"Reset password"} subheading={""}>
      <Form
        layout="vertical"
        form={form}
        onFinish={(values: { password: string; confirm_password: string }) => {
          resetpassowrd(values, reset_password_token as string);
        }}
      >
        <Form.Item
          label={"New password"}
          name={"password"}
          rules={[
            { required: true, message: "Please enter your password!" },
            {
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must include uppercase, lowercase, number, and special character!",
            },
          ]}
        >
          <Input.Password className="!rounded-[10px] h-[44px] w-[100%]" />
        </Form.Item>
        <Form.Item
          label={"Confirm password"}
          name={"confirm_password"}
          rules={[
            { required: true, message: "Please confirm your password!" },
            {
              validator: (_, value) => {
                const password = form.getFieldValue("password");
                if (!value || password === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            },
          ]}
        >
          <Input.Password className="!rounded-[10px] h-[44px] w-[100%]" />
        </Form.Item>
        <AuthButton loading={loading} text={"Verify"} htmlType="submit" />
      </Form>
    </AuthLayout>
  );
}

export default withAuthGuard(Resetpassword, RouteTypes.AUTH);
