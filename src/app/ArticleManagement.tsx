import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import AddArticleModal from "../component/partial/Modals/AddArticle";
import { articleColumns } from "../config/table/article";
import useTableOperations from "../hooks/useTableOperations";

export default function Article() {
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
    onPaginationChange,
    onDeleteClick
  } = useTableOperations('article')
  return (
    <LayoutAdmin>
      <CustomTable
        title="Article Management"
        columns={articleColumns(onEditClick, onDeleteClick)}
        data={data}
        loading={loading}
        buttonText="Add Article"
        onButtonClick={onButtonClick}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
        expandable={{
          expandedRowRender: (record: any) => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: (record: any) => record.name !== 'Not Expandable',
        }}
      />
      {(open === 'post' || open === 'patch') && (
        <AddArticleModal
          open={open}
          cbCancel={cbCancel}
          cbSuccess={cbSuccess}
          updateData={updateData as { [key: string]: never; }}
        />
      )}
    </LayoutAdmin>
  );
}
