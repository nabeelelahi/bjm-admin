import { Switch } from "antd";

export const userColumns = (onUpdate: () => void) => {
  return [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Mobile no.", dataIndex: "mobile_no" },
    { title: "Address", dataIndex: "address", },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex gap-4">
          <Switch
            onChange={onUpdate}
            defaultValue={record.status}
          />
        </div>
      ),
    },
  ];
};
