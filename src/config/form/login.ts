export const loginFields = [
  {
    title: "Email",
    name: "email",
    icon: "/icons/email.png",
    rules: [{ required: true, message: "Please input your email!" }],
    type: "text",
  },
  {
    title: "Password",
    name: "password",
    icon: "/icons/lock.png",
    rules: [
      { required: true, message: "Please enter your password!" },
      {
        pattern:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:
          "Password must include uppercase, lowercase, number, and special character!",
      },
    ],
    type: "password",
  },
];
