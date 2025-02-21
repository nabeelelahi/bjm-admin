export const articleForm = [
    {
      label: "Title",
      name: "title",
      rules: [{ required: true, message: "Please enter title!" }],
      type: "text",
    },
    {
      label: "Community",
      name: "community",
      rules: [{ required: true, message: "Please enter community!" }],
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      rules: [{ required: true, message: "Please enter description!" }],
      type: "textarea",
    },
  ];
  