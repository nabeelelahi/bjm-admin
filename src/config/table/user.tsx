// import { notification } from "antd";
// import { request } from "../../repositories";

export const userColumns = () => {
  // const onSwithClick = (record: { [key: string]: never }, status: boolean) => {
  //   request('user', 'patch')
  //     .setRouteParams(`${record._id}`)
  //     .setBody({ status: status }, 'json')
  //     .onSuccess(() =>
  //       notification.success({
  //         message: 'Success!',
  //         // @ts-ignore
  //         description: `User ${status ? 'activated' : 'de-activated'} successfully.`,
  //       })
  //     )
  //     .call()
  // }
  return [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Mobile no.", dataIndex: "mobile_no" },
    { title: "Address", dataIndex: "address", },
    // {
    //   title: "Action",
    //   key: "_id",
    //   render: (_: string, record: { [key: string]: never }) => (
    //     <div className="flex gap-4">
    //       {/* <EditOutlined onClick={() => onEditClick(record)} size={25} /> */}
    //       <Switch
    //         onChange={(status: boolean) => onSwithClick(record, status)}
    //         defaultValue={record.status}
    //       />
    //     </div>
    //   ),
    // },
  ];
};
