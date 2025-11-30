import { useMemo } from "react";

export const useSort = ({
    data,
    sortBy,
}: {
    data: any[];
    sortBy: Record<string, string>
}) => {

    return useMemo(() => {
        if (Object.keys(sortBy).length === 0) return data;
        const sortedData = [...data].sort((a, b) => {
            for (const sort of Object.entries(sortBy)) {
                if (a[sort[0]] < b[sort[0]]) return sort[1] === "asc" ? -1 : 1;
                if (a[sort[0]] > b[sort[0]]) return sort[1] === "asc" ? 1 : -1;
            }
            return 0;
        });
        return sortedData;
    }, [data, sortBy]);
};