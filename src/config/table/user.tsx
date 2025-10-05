import { notification, Switch } from "antd";
import { request } from "../../repositories";

export const userColumns = (showActions = false) => {
  const onSwithClick = (record: { [key: string]: never }, status: boolean) => {
    request('user', 'patch')
      .setRouteParams(`${record._id}`)
      .setBody({ status: status }, 'json')
      .onSuccess(() =>
        notification.success({
          message: 'Success!',
          // @ts-ignore
          description: `User ${status ? 'activated' : 'de-activated'} successfully.`,
        })
      )
      .call()
  }
  const columns =  [
    { title: "Name", key: "name", dataIndex: "name" },
    { title: "Email", key: "email", dataIndex: "email" },
    { title: "Mobile no.", key: "mobile_no", dataIndex: "mobile_no" },
    { title: "Address", key: "address", dataIndex: "address", },
  ];
  if(showActions){
    columns.push({
      title: "Action",
      key: "_id",
      // @ts-ignore
      render: (_: string, record: { [key: string]: never }) => (
        <div className="flex gap-4">
          {/* <EditOutlined onClick={() => onEditClick(record)} size={25} />  */}
          <Switch
            onChange={(status: boolean) => onSwithClick(record, status)}
            defaultValue={record.status}
          />
        </div>
      ),
    },)
  }
  return columns;
};
