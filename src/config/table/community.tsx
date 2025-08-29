import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { request } from "../../repositories";
import { Button, Image, notification, Switch } from "antd";
import { Link } from "react-router-dom";

export const communityColumns = (
  onEditClick: (params: { [key: string]: never }) => void,
  onDeleteClick: (params: { [key: string]: never }) => void,
) => {
  const onSwithClick = (record: { [key: string]: never }, status: boolean) => {
    request('community', 'patch')
      .setRouteParams(`${record._id}`)
      .setBody({ status: !record.status }, 'json')
      .onSuccess(() =>
        notification.success({
          message: 'Success!',
          // @ts-ignore
          description: `Community ${status ? 'activated' : 'de-activated'} successfully.`,
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
      title: "Action",
      key: "_id",
      render: (_: string, record: { [key: string]: never }) => (
        <div className="flex items-center gap-4">
          <Link to={`/community/${record._id}?title=${record.title}`} className="rounded-[8px] h-[40px] bg-[#0B6990] flex items-center roboto-medium px-4 text-white border-0 hover:!bg-[#0B6990]">
            <EyeOutlined color="#fff" size={25} />
          </Link>
          <Button onClick={() => onEditClick(record)} className="rounded-[8px] h-[40px] bg-[#0B6990] roboto-medium px-4 text-white border-0 hover:!bg-[#0B6990]">
            <EditOutlined color="#fff" size={25} />
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
