import TableRenderer from "../core/TableRenderer";
import { useColumns } from "../core/useColumns";
import { usePagination } from "../core/usePagination";
import ClassicPagination from "../plugin/pagination/classicPagination";
import TablePagination from "../plugin/pagination/tablePagination";
import { PaginationType } from "../types/type";

type PaginationPosition = "top" | "bottom" | "both";

type Props = {
    data: any[];
    pagination: { pageIndex: number; pageSize: number };
    totalRows: number;
    onPageChange: (page: number) => void;
    rowsPerPage?: number[];
    onRowsPerPageChange?: (size: number) => void;
    paginationPlugin?: PaginationType;

    /** NEW — position of pagination UI */
    paginationPosition?: PaginationPosition;
};


export default function Table({
    data,
    pagination,
    totalRows,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    paginationPosition = "bottom",
    paginationPlugin = PaginationType.classic,
}: Props) {
    const columns = useColumns(data);

    const rows = usePagination({
        data,
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
    });

    const paginationProps = {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        totalRows,
        rowsPerPage,
        onPageChange,
        onRowsPerPageChange,
    };

    const paginationSlot =
        paginationPlugin === PaginationType.table ? (
            <TablePagination {...paginationProps} />
        ) : (
            <ClassicPagination {...paginationProps} />
        );

    return (
        <TableRenderer
            columns={columns}
            paginationPosition={paginationPosition}
            rows={rows}
            paginationSlot={paginationSlot}
        />
    );
}
