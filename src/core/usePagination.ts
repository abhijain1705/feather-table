import { useMemo } from "react";

export const usePagination = ({
  data,
  pageIndex,
  pageSize,
  clientPagination = true
}: {
  data: any[];
  pageIndex: number;
  pageSize: number;
  clientPagination?: boolean;
}) => {

  return useMemo(() => {
    if (!clientPagination) return data;

    const start = pageIndex * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);

  }, [data, pageIndex, pageSize, clientPagination]);
};
