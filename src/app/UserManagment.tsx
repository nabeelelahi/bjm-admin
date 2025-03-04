import LayoutAdmin from "../component/partial/Layout";
import { userColumns } from "../config";
import { useState } from "react";
import AddUserModal from "../component/partial/Modals/AddUser";
import TableView from "../component/shared/TableView";

function UserManagment() {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState<unknown>();

  return (
    <LayoutAdmin>
      <TableView
        title="User Managment"
        buttonText="Add User"
        open={open}
        url="user"
        method='get'
        setOpen={setOpen}
        columns={userColumns(() => { })}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
      {open && (
        <AddUserModal
          open={open}
          setOpen={setOpen}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
      )}
    </LayoutAdmin>
  );
}

export default UserManagment;
