import LayoutAdmin from "../component/partial/Layout";
import { userColumns } from "../config";
import AddUserModal from "../component/partial/Modals/AddUser";
import CustomTable from "../component/shared/Table";
import useTableOperations from "../hooks/useTableOperations";

function UserManagment() {
  const {
    open,
    onButtonClick,
    // onEditClick,
    data,
    loading,
    cbCancel,
    cbSuccess,
    updateData,
    pagination,
    onPaginationChange
  } = useTableOperations('user')
  return (
    <LayoutAdmin>
      <CustomTable
        title={'User Management'}
        buttonText={'Add User'}
        onButtonClick={onButtonClick}
        columns={userColumns()}
        data={data}
        loading={loading}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
      {(open === 'post' || open === 'patch') && (
        <AddUserModal
          open={open}
          cbCancel={cbCancel}
          cbSuccess={cbSuccess}
          updateData={updateData as { [key: string]: never; }}
        />
      )}
    </LayoutAdmin>
  );
}

export default UserManagment;
