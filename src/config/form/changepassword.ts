export const changePassword = [
  {
    title: "Current Password",
    name: "oldPassword",
    rules: [{ required: true, message: "Please input current password!" }],
    type: "password",
  },
  // {
  //   title: "New Password",
  //   name: "newPassword",
  //   rules: [
  //     { required: true, message: "Please enter your password!" },
  //     {
  //       pattern:
  //         /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //       message:
  //         "Password must include uppercase, lowercase, number, and special character!",
  //     },
  //   ],
  //   type: "password",
  // },
  // {
  //   title: "Confirm Password",
  //   name: "confirmPassword",
  //   dependencies: ["newPassword"],
  //   // rules: [
  //   //   { required: true, message: "Please input confirm password!" },
  //   //   ({ getFieldValue: any }) => ({
  //   //     validator(_: any, value: any) {
  //   //       if (value && value !== getFieldValue("newPassword")) {
  //   //         return Promise.reject(new Error("Passwords do not match!"));
  //   //       }
  //   //       return Promise.resolve();
  //   //   }}})
  //   // ],
  //   rules: [{ required: true, message: "Please input confirm password!" }],
  //   type: "password",
  // },
];
