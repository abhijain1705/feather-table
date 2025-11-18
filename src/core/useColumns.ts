import { useMemo } from "react";

/**
 * Extracts column names from data
 */
export const useColumns = (data: Record<string, any>[]) => {
  return useMemo(() => {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]);
  }, [data]);
};
