import FilterTray from "../table/filterTray";
import TableBody from "../table/TableBody";
import TableHead from "../table/TableHead";
import type { FilterTrayProps } from "../types/type";

interface Props extends FilterTrayProps {
    columns: string[];
    rows: any[];
    paginationSlot?: React.ReactNode;
    paginationPosition: "top" | "bottom" | "both";
};

export default function TableRenderer({
    columns,
    rows,
    setsorting,
    sorting, setVisibleColumns, visibleColumns, allColumns,
    paginationSlot,
    paginationPosition
}: Props) {
    return (
        <div className="ft-table-wrapper">

            {/* TOP PAGINATION */}
            {paginationSlot && (paginationPosition === "top" || paginationPosition === "both") && (
                <div className="ft-pagination-container ft-pagination-top">
                    {paginationSlot}
                </div>
            )}

            <FilterTray setsorting={setsorting} setVisibleColumns={setVisibleColumns} visibleColumns={visibleColumns} allColumns={allColumns} columns={columns} sorting={sorting} />
            <table className="ft-table">
                <TableHead columns={columns} />
                <TableBody columns={columns} rows={rows} />
            </table>

            {/* BOTTOM PAGINATION */}
            {paginationSlot && (paginationPosition === "bottom" || paginationPosition === "both") && (
                <div className="ft-pagination-container ft-pagination-bottom">
                    {paginationSlot}
                </div>
            )}
        </div>
    );
}
