import { useState } from "react";
import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import AddPassportModal from "../component/partial/Modals/AddPassport";
import { passportColumns } from "../config/table/passport";

export default function Passport() {
  const [open, setOpen] = useState(false);


  return (
    <LayoutAdmin>
      <CustomTable
        title="Passports"
        columns={passportColumns}
        data={[]}
        buttonText="Add Passport"
        onButtonClick={() => setOpen(true)}
      />
      {open && (
        <AddPassportModal
          open={open}
          setOpen={setOpen}
        />
      )}
    </LayoutAdmin>
  );
}
