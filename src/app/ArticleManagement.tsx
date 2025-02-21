import { useState } from "react";
import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import AddArticleModal from "../component/partial/Modals/AddArticle";
import { articleColumns } from "../config/table/article";

export default function Article() {
  const [open, setOpen] = useState(false);

  return (
    <LayoutAdmin>
      <CustomTable
        title="Articles"
        columns={articleColumns}
        data={[]}
        buttonText="Add Article"
        onButtonClick={() => setOpen(true)}
      />
      {open && (
        <AddArticleModal
          open={open}
          setOpen={setOpen}
        />
      )}
    </LayoutAdmin>
  );
}
