import { useMemo } from "react";
import ClassicPagination from "../features/pagination/classicPagination";
import TablePagination from "../features/pagination/tablePagination";
import { PaginationType } from "../types/type";

type Props = {
    /** Array of rows (objects where keys = column names) */
    data: Record<string, any>[];

    /** Pagination config: pageSize + pageIndex */
    pagination?: { pageSize: number; pageIndex: number };

    /** Total rows in dataset (important for server-side pagination) */
    totalRows?: number;

    /** Called when user clicks next/prev/page number */
    onPageChange?: (page: number) => void;

    /** Page size dropdown options */
    rowsPerPage?: number[];

    /** Called when user selects new page size */
    onRowsPerPageChange?: (value: number) => void;

    /** Select which pagination plugin to render */
    paginationPlugin?: PaginationType;
};

/**
 * FeatherTable — lightweight, dependency-free table.
 *
 * Responsibilities:
 *  - Derives columns from first row
 *  - Renders basic HTML table
 *  - Applies internal client-side pagination if `pagination` is provided
 *  - Delegates pagination UI to selected plugin component
 *
 * Notes:
 *  - Does not mutate data
 *  - Uses memoization for efficient re-renders on large datasets
 */
const Table = ({
    data,
    pagination,
    totalRows,
    onPageChange,
    rowsPerPage,
    onRowsPerPageChange,
    paginationPlugin = PaginationType.classic,
}: Props) => {
    /**
     * Derive columns from first row.
     * Memoized to avoid recalculating on every render.
     */
    const columns = useMemo(() => {
        return data.length > 0 ? Object.keys(data[0]) : [];
    }, [data]);

    /**
     * Compute paginated rows (client-side pagination).
     * If pagination is not passed, show full dataset.
     */
    const renderRows = useMemo(() => {
        if (!pagination) return data;

        const { pageSize, pageIndex } = pagination;
        const start = pageSize * pageIndex;
        const end = start + pageSize;

        return data.slice(start, end);
    }, [data, pagination]);

    /**
     * Choose which pagination UI plugin to render.
     */
    const renderPagination = () => {
        const pluginProps = {
            pageIndex: pagination?.pageIndex ?? 0,
            pageSize: pagination?.pageSize ?? data.length,
            totalRows,
            rowsPerPage,
            onPageChange,
            onRowsPerPageChange,
        };

        switch (paginationPlugin) {
            case PaginationType.classic:
                return <ClassicPagination {...pluginProps} />;

            case PaginationType.table:
                return <TablePagination {...pluginProps} />;

            default:
                return <ClassicPagination {...pluginProps} />;
        }
    };

    return (
        <table className="table-class">
            {/* ---------- HEADER ---------- */}
            <thead>
                <tr>
                    {columns.map((cl, ind) => (
                        <th key={ind} scope="col" className="column-class">
                            {cl}
                        </th>
                    ))}
                </tr>
            </thead>

            {/* ---------- BODY ---------- */}
            <tbody>
                {renderRows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((cl, colIndex) => (
                            <td key={colIndex} className="cell-class">
                                {row[cl]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>

            {/* ---------- PAGINATION ---------- */}
            <tfoot>
                <tr>
                    <td colSpan={columns.length}>{renderPagination()}</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Table;
