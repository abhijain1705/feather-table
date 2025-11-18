import FtChevronLeft from "../../icons/ftChevronLeft";
import FtChevronRight from "../../icons/ftChevronRight";

type PaginationProps = {
    pageIndex: number;
    pageSize: number;
    totalRows?: number;
    rowsPerPage?: number[];
    onPageChange?: (page: number) => void;
    onRowsPerPageChange?: (size: number) => void;
};

/**
 * TablePagination
 *
 * A minimal, spreadsheet-style pagination UI.
 * Example:
 *   Rows 21–40 of 500     [10 ▾]  ◀ ▶
 *
 * Features:
 * - Shows current row range instead of page numbers
 * - Only prev/next navigation
 * - Clean and compact (perfect for dashboards)
 */
export default function TablePagination({
    pageIndex,
    pageSize,
    totalRows = 0,
    rowsPerPage = [10, 20, 50],
    onPageChange,
    onRowsPerPageChange,
}: PaginationProps) {

    const startRow = pageIndex * pageSize + 1;
    const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);
    const canGoPrev = pageIndex > 0;
    const maxPages = Math.ceil(totalRows / pageSize);
    const canGoNext = pageIndex < maxPages - 1;

    return (
        <div className="ft-table-pagination">

            {/* Row range display */}
            <div className="ft-table-pagination-info">
                Rows <b>{startRow}</b>–<b>{endRow}</b> of <b>{totalRows}</b>
            </div>

            {/* Rows per page dropdown */}
            {onRowsPerPageChange && (
                <div className="ft-table-pagination-rows">
                    <label>Rows per page:</label>
                    <select
                        className="ft-select"
                        value={pageSize}
                        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                    >
                        {rowsPerPage.map(count => (
                            <option key={count} value={count}>
                                {count}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Prev / Next arrows */}
            <div className="ft-table-pagination-arrows">
                <button
                    disabled={!canGoPrev}
                    className="ft-page-btn"
                    onClick={() => onPageChange && onPageChange(pageIndex - 1)}
                >
                    <FtChevronLeft />
                </button>

                <button
                    disabled={!canGoNext}
                    className="ft-page-btn"
                    onClick={() => onPageChange && onPageChange(pageIndex + 1)}
                >
                    <FtChevronRight />
                </button>
            </div>
        </div>
    );
}
