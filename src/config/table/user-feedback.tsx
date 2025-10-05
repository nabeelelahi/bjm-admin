export const userFeedbackColumns  = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Reported By",
      dataIndex: "user",
      key: "user",
      render: (_: Record<string, string>) => `${_.name} (${_.email})`
    },
  ]
