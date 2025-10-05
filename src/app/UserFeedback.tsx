import LayoutAdmin from "../component/partial/Layout";
import CustomTable from "../component/shared/Table";
import { userFeedbackColumns } from "../config/table/user-feedback";
import useTableOperations from "../hooks/useTableOperations";

export default function UserFeedBack() {
  const {
    data,
    loading,
    pagination,
    onPaginationChange,
  } = useTableOperations('user-feedback')
  return (
    <LayoutAdmin>
      <CustomTable
        title="Feedbacks"
        columns={userFeedbackColumns}
        data={data}
        loading={loading}
        pagination={pagination}
        onPaginationChange={onPaginationChange}
      />
    </LayoutAdmin>
  );
}
