import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import { userColumns } from "../config";
import { useState } from "react";
import AddUserModal from "../component/partial/Modals/AddUser";

function UserManagment() {
  const [open, setOpen] = useState(false);

  return (
    <LayoutAdmin>
      <CustomTable
        title="User Managment"
        buttonText="Add User"
        onButtonClick={() => setOpen(true)}
        columns={userColumns(() => { })}
        data={[]}
      />
      {open && (
        <AddUserModal
          open={open}
          setOpen={setOpen}
        />
      )}
    </LayoutAdmin>
  );
}

export default UserManagment;
