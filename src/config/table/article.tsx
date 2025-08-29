import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { request } from "../../repositories";
import { Button, Image, notification, Switch } from "antd";

export const articleColumns = (
  onEditClick: (params: { [key: string]: never }) => void,
  onDeleteClick: (params: { [key: string]: never }) => void,
) => {
  const onSwithClick = (record: { [key: string]: never }, status: boolean) => {
    request('article', 'patch')
      .setRouteParams(`${record._id}`)
      .setBody({ status }, 'json')
      .onSuccess(() =>
        notification.success({
          message: 'Success!',
          // @ts-ignore
          description: `Article ${status ? 'activated' : 'de-activated'} successfully.`,
        })
      )
      .call()
  }
  return [
    {
      title: "Image",
      dataIndex: "image_url",
      key: "image_url",
      render: (_: string, record: { [key: string]: never }) => (
        <Image src={record.image_url} height={100} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (_: string) => <>{`${_.substring(0, 100)}...`}</>
    },
    {
      title: "Action",
      key: "_id",
      render: (_: string, record: { [key: string]: never }) => (
        <div className="flex items-center gap-4">
          <Button className="rounded-[8px] h-[40px] bg-[#0B6990] roboto-medium px-4 text-white border-0 hover:!bg-[#0B6990]">
            <EditOutlined color="#fff" onClick={() => onEditClick(record)} size={25} />
          </Button>
          <Button className="rounded-[8px] h-[40px] bg-[#0B6990] roboto-medium px-4 text-white border-0 hover:!bg-[#0B6990]">
            <DeleteOutlined color="#fff" onClick={() => onDeleteClick(record)} size={25} />
          </Button>
          <Switch
            onChange={(status) => onSwithClick(record, status)}
            defaultValue={record.status}
          />
        </div>
      ),
    },
  ];
}
