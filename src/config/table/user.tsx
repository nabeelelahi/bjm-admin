import { EyeOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { Link } from "react-router-dom";

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
          <Link to={'/managment/details/${record._id}'}>
            <EyeOutlined
              size={30}
              className="cursor-pointer w-6 h-6"
            />
          </Link>
          <Switch
            onChange={onUpdate}
            defaultValue={record.status}
          />
        </div>
      ),
    },
  ];
};
