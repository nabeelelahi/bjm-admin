import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import useTableOperations from "../hooks/useTableOperations";
import AddNotification from "../component/partial/Modals/AddNotifcation";
import { notificationColumns } from "../config/table/notification";

export default function Notification() {
  const {
    open,
    onButtonClick,
    onEditClick,
    data,
    loading,
    cbCancel,
    cbSuccess,
    updateData,
    pagination,
    onPaginationChange
  } = useTableOperations('notification')
  return (
    <LayoutAdmin>
      <CustomTable
        title="Notification"
        columns={notificationColumns(onEditClick)}
        data={data}
        loading={loading}
        buttonText="Add Notification"
        onButtonClick={onButtonClick}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
      {(open === 'post' || open === 'patch') && (
        <AddNotification
          open={open}
          cbCancel={cbCancel}
          cbSuccess={cbSuccess}
          updateData={updateData as { [key: string]: never; }}
        />
      )}
    </LayoutAdmin>
  );
}
