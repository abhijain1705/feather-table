import TableBody from "../table/TableBody";
import TableHead from "../table/TableHead";

type Props = {
    columns: string[];
    rows: any[];
    paginationSlot?: React.ReactNode;
};

export default function TableRenderer({ columns, rows, paginationSlot }: Props) {
    return (
        <table className="ft-table">
            <TableHead columns={columns} />
            <TableBody columns={columns} rows={rows} />
            {paginationSlot && (
                <tfoot>
                    <tr>
                        <td colSpan={columns.length}>{paginationSlot}</td>
                    </tr>
                </tfoot>
            )}
        </table>
    );
}
