import { useState } from "react";
import { request } from "../repositories";
import { AddModalProps } from "../types";

function useFormOperations({
  open,
  cbSuccess,
  updateData,
  url,
}: AddModalProps & { url: string }) {
  const [loading, setLoading] = useState(false);
  const handleFinish = (body: Record<string, never | unknown>) => {
    try {
      setLoading(true);
      const executionContext = request(url, open)
        .setBody(body, "json")
        // @ts-expect-error @ts-ignore
        .onSuccess(cbSuccess);
      if (open === "patch")
        executionContext.setRouteParams(`${updateData?._id}`);
      executionContext.call();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { handleFinish, loading };
}
export default useFormOperations;
