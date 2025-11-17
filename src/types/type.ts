// types/pagination.ts
export const PaginationType = {
  classic: "classic",
  table: "table",
} as const;

export type PaginationType = typeof PaginationType[keyof typeof PaginationType];
