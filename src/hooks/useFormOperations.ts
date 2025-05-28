import { useState } from "react";
import { request } from "../repositories";
import { AddModalProps } from "../types";
import { notification } from "antd";

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
        .onSuccess((...args) => {
          setLoading(false);
          // @ts-expect-error @ts-ignore
          cbSuccess(...args);
        })
        .onFailure(({ data }) => {
          setLoading(false);
          if (Array.isArray(data.message)) {
            data.message.forEach((message: string) => {
              notification.error({
                message: "Validation Message",
                description: message,
              });
            });
          }
        });
      if (open === "patch")
        executionContext.setRouteParams(`${updateData?._id}`);
      executionContext.call();
    } catch (error) {
      console.log("error", error);
    }
  };
  return { handleFinish, loading };
}
export default useFormOperations;
