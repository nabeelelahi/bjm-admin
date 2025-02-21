import { useState } from "react";
import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import AddCommunityModal from "../component/partial/Modals/AddCommuntity";
import { communityColumns } from "../config/table/community";

export default function Community() {
  const [open, setOpen] = useState(false);

  return (
    <LayoutAdmin>
      <CustomTable
        title="Communites"
        columns={communityColumns}
        data={[]}
        buttonText="Add Community"
        onButtonClick={() => setOpen(true)}
      />
      {open && (
        <AddCommunityModal
          open={open}
          setOpen={setOpen}
        />
      )}
    </LayoutAdmin>
  );
}
