import TableCell from "./TableCell";

type Props = {
    columns: string[];
    rows: any[];
};

export default function TableBody({ columns, rows }: Props) {
    return (
        <tbody>
            {rows.map((row, idx) => (
                <tr key={idx}>
                    {columns.map((col) => (
                        <TableCell key={col} value={row[col]} />
                    ))}
                </tr>
            ))}
        </tbody>
    );
}
