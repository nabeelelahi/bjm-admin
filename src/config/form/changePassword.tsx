export const changePasswordForm = [
  {
    label: "Old Password",
    name: "oldPassword",
    rules: [{ required: true, message: "Please enter Old Password!" }],
    type: "text",
  },
  {
    label: "New Password",
    name: "newPassword",
    rules: [{ required: true, message: "Please enter New Password!" }],
    type: "text",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    rules: [
      { required: true, message: "Please confir!" },
      ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
          if (!value || getFieldValue('newPassword') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('The new password that you entered do not match!'));
        },
      }),
    ],
    type: "text",
  },
];
