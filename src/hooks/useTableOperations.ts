import { useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { ResponseData } from "../types";
import { request } from "../repositories";


const useTableOperations = (url: string) => {
  const [open, setOpen] = useState<'post' | 'patch' | 'none'>('none');
  const [updateData, setUpdateData] = useState<{ [key: string]: never; } | null>();
  const { data, loading, setLoading, setData, pagination, onPaginationChange } = useRequest(url, 'get', {
    type: 'mount'
  });

  const cbSuccess = (response: ResponseData<unknown>) => {
    if (open === 'post')
      setData((p: never) => [response.data, ...p])
    else
      // @ts-expect-error @ts-ignore
      setData((p: never) => p.map((item: never) => item._id === response.data._id ? response.data : item))
    setOpen('none')
    setUpdateData(null)
  }
  const cbCancel = () => {
    setOpen('none')
    setUpdateData(null)
  }
  const onEditClick = (record: { [key: string]: never }) => {
    console.log(record)
    setUpdateData(record)
    setOpen('patch')
  }

  const onButtonClick = () => {
    setUpdateData(null)
    setOpen('post')
  }

  const onDeleteClick = (record: { [key: string]: any }) => {
    setLoading(true);
    request(url, 'delete')
      .setRouteParams(`${record._id}`)
      .onSuccess(() => {
        setLoading(false)
        // @ts-ignore
        setData(p => p.filter(i => i._id != record._id))
      })
      .call()
  }

  return {
    open,
    setOpen,
    updateData,
    setUpdateData,
    cbSuccess,
    cbCancel,
    onEditClick,
    data,
    loading,
    onButtonClick,
    pagination,
    onPaginationChange,
    onDeleteClick
  }

}

export default useTableOperations