// types/pagination.ts
export const PaginationType = {
  classic: "classic",
  table: "table",
} as const;

export type PaginationType = typeof PaginationType[keyof typeof PaginationType];

export type FilterTrayProps = {
  sorting: Record<string, string>; columns: string[];
  allColumns: string[];
  visibleColumns: Record<string, boolean>;
  setVisibleColumns: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setsorting: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}