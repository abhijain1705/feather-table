import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

type PaginationProps = {
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    onPageChange: (page: number) => void;
    rowsPerPage?: number[];
    onRowsPerPageChange?: (size: number) => void;
};

/**
 * ClassicPagination
 * 
 * Adds:
 * - Page numbers with frame window
 * - Prev/Next arrows
 * - Ellipsis for compression
 * - Rows-per-page dropdown
 */
export default function ClassicPagination({
    pageIndex,
    pageSize,
    totalRows = 0,
    rowsPerPage = [10, 20, 50],
    onPageChange,
    onRowsPerPageChange,
}: PaginationProps) {

    const pageCount = Math.ceil(totalRows / pageSize);
    const frameSize = 5;

    const currentPage = pageIndex + 1;
    const totalFrames = Math.ceil(pageCount / frameSize);
    const currentFrame = Math.floor((currentPage - 1) / frameSize);

    const frameStart = currentFrame * frameSize + 1;
    const frameEnd = Math.min(frameStart + frameSize - 1, pageCount);

    const pagesToShow = Array.from(
        { length: frameEnd - frameStart + 1 },
        (_, i) => frameStart + i
    );

    return (
        <div className="ft-pagination">

            {/* Pagination Numbers */}
            <div className="ft-pagination-body">

                {/* Prev */}
                <button
                    className="ft-page-btn"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 2)}
                >
                    <FaChevronCircleLeft />
                </button>

                {/* Prefix */}
                {currentFrame > 0 && (
                    <>
                        <button className="ft-page-number" onClick={() => onPageChange(0)}>1</button>
                        <span className="ft-ellipsis">•••</span>
                    </>
                )}

                {/* Page list */}
                {pagesToShow.map(num => (
                    <button
                        key={num}
                        className={`ft-page-number ${num === currentPage ? "ft-active" : ""}`}
                        onClick={() => onPageChange(num - 1)}
                    >
                        {num}
                    </button>
                ))}

                {/* Suffix */}
                {currentFrame < totalFrames - 1 && (
                    <>
                        <span className="ft-ellipsis">•••</span>
                        <button
                            className="ft-page-number"
                            onClick={() => onPageChange(pageCount - 1)}
                        >
                            {pageCount}
                        </button>
                    </>
                )}

                {/* Next */}
                <button
                    className="ft-page-btn"
                    disabled={currentPage === pageCount}
                    onClick={() => onPageChange(currentPage)}
                >
                    <FaChevronCircleRight />
                </button>
            </div>

            {/* Rows per page dropdown */}
            {onRowsPerPageChange && (
                <div className="ft-rows-select">
                    <label>Rows: </label>
                    <select
                        className="ft-select"
                        value={pageSize}
                        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                    >
                        {rowsPerPage.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
            )}

        </div>
    );
}
