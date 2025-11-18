import TableBody from "../table/TableBody";
import TableHead from "../table/TableHead";

type Props = {
    columns: string[];
    rows: any[];
    paginationSlot?: React.ReactNode;
    paginationPosition: "top" | "bottom" | "both";
};

export default function TableRenderer({
    columns,
    rows,
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
