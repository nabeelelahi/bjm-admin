import { useState } from "react";
import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import AddDocGuide from "../component/partial/Modals/AddDocGuide";
import { docGuideColumns } from "../config/table/docGuide";

export default function DocGuide() {
  const [open, setOpen] = useState(false);

  return (
    <LayoutAdmin>
      <CustomTable
        title="Doc/Guide"
        columns={docGuideColumns}
        data={[]}
        buttonText="Add Doc/Guide"
        onButtonClick={() => setOpen(true)}
      />
      {open && (
        <AddDocGuide
          open={open}
          setOpen={setOpen}
        />
      )}
    </LayoutAdmin>
  );
}
