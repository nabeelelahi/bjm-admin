import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import AddCommunityModal from "../component/partial/Modals/AddCommuntity";
import { communityColumns } from "../config/table/community";
import useTableOperations from "../hooks/useTableOperations";

export default function Community() {
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
  } = useTableOperations('community')

  return (
    <LayoutAdmin>
      <CustomTable
        title="Communites"
        columns={communityColumns(onEditClick)}
        data={data}
        loading={loading}
        buttonText="Add Community"
        onButtonClick={onButtonClick}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
      {(open === 'post' || open === 'patch') && (
        <AddCommunityModal
          open={open}
          cbCancel={cbCancel}
          cbSuccess={cbSuccess}
          updateData={updateData as { [key: string]: never; }}
        />
      )}
    </LayoutAdmin>
  );
}
