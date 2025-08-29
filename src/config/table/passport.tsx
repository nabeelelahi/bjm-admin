import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { request } from "../../repositories";
import { Button, notification, Switch } from "antd";

export const passportColumns = (
  onEditClick: (params: { [key: string]: never }) => void,
  onDeleteClick: (params: { [key: string]: never }) => void,
) => {
  const onSwithClick = (record: { [key: string]: never }, status: boolean) => {
    request('passport', 'patch')
      .setRouteParams(`${record._id}`)
      .setBody({ status: status }, 'json')
      .onSuccess(() =>
        notification.success({
          message: 'Success!',
          // @ts-ignore
          description: `Passport ${status ? 'activated' : 'de-activated'} successfully.`,
        })
      )
      .call()
  }
  return [{
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Action",
    key: "_id",
    render: (_: string, record: { [key: string]: never }) => (
      <div className="flex gap-4">
        <Button className="rounded-[8px] h-[40px] bg-[#0B6990] roboto-medium px-4 text-white border-0 hover:!bg-[#0B6990]">
          <EditOutlined color="#fff" onClick={() => onEditClick(record)} size={25} />
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
  ];
}
