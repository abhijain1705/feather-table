// classicPagination.tsx
type PaginationProps = {
    pageIndex: number;
    pageSize: number;
    totalRows?: number;
    rowsPerPage?: number[];
    onPageChange?: (page: number) => void;
    onRowsPerPageChange?: (size: number) => void;
};

export default function TablePagination({
    pageIndex,
    pageSize,
    totalRows = 0,
    rowsPerPage = [10, 20, 50],
    onPageChange,
    onRowsPerPageChange,
}: PaginationProps) {
    return (
        <div>
            {/* Your pagination layout */}
        </div>
    );
}
