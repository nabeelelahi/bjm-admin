import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { request } from "../../repositories";
import { Button, Image, Switch } from "antd";
import { Link } from "react-router-dom";

export const communityColumns = (onEditClick: (params: { [key: string]: never }) => void) => {
  const onSwithClick = (record: { [key: string]: never }) => {
    request('community', 'patch')
      .setRouteParams(`${record._id}`)
      .setBody({ status: !record.status }, 'json')
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
          <Switch
            onChange={() => onSwithClick(record)}
            defaultValue={record.status}
          />
        </div>
      ),
    },
  ];
}
