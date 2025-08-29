import { Button, notification, Switch } from "antd";
import { request } from "../../repositories";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const onSwithClick = (record: { [key: string]: never }, status: boolean) => {
  request("doc-guide", "patch")
    .setRouteParams(`${record._id}`)
    .setBody({ status }, "json")
    .onSuccess(() =>
      notification.success({
        message: 'Success!',
        // @ts-ignore
        description: `Doc-Guide ${status ? 'activated' : 'de-activated'} successfully.`,
      })
    )
    .call();
};

export const docGuideColumns = (
  onDeleteClick: (params: { [key: string]: never }) => void,
) => {
  return [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Sub Title",
      dataIndex: "sub_title",
      key: "sub_title",
    },
    {
      title: "Action",
      key: "_id",
      render: (_: string, record: { [key: string]: never }) => (
        <div className="flex items-center gap-4">
          <Button onClick={() => window.open(record.file_url)} className="rounded-[8px] h-[40px] bg-[#0B6990] roboto-medium px-4 text-white border-0 hover:!bg-[#0B6990]">
            <EyeOutlined color="#fff" size={25} />
          </Button>
          <Button className="rounded-[8px] h-[40px] bg-[#0B6990] roboto-medium px-4 text-white border-0 hover:!bg-[#0B6990]">
            <DeleteOutlined color="#fff" onClick={() => onDeleteClick(record)} size={25} />
          </Button>
          <Switch
            onChange={(status: boolean) => onSwithClick(record, status)}
            defaultValue={record.status}
          />
        </div>
      ),
    },
  ]
};
