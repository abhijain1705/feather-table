import { useMemo } from "react"

type Props = {
    // Array of objects representing table rows.
    // Each object's keys are used as column headers.
    data: Record<string, any>[]
}

/**
 * Table
 *
 * A lightweight table component that:
 * - Derives column headers from the first row of data (if present).
 * - Renders a simple semantic HTML table.
 *
 * Notes:
 * - This implementation uses array indices as React keys which is acceptable
 *   for stable, read-only data sets. For dynamic lists where rows/columns can
 *   be re-ordered or removed/inserted, use stable unique identifiers instead.
 * - Columns are derived from data[0]. If your data shape can vary by row,
 *   consider supplying an explicit columns prop instead.
 */
const Table = ({ data }: Props) => {
    // Memoize computed columns so we don't recompute on every render unless data changes.
    // We take the keys of the first object as the canonical column list.
    const columns = useMemo(() => {
        return data.length > 0 ? Object.keys(data[0]) : []
    }, [data])

    return (
        // Use semantic HTML table. Styles are inline for brevity; move to CSS for production.
        <table className="table-class">
            <thead>
                <tr>
                    {columns.map((cl, ind) => (
                        // Use scope="col" to improve accessibility for screen readers.
                        // Using the column index as key is okay here for stable columns derived
                        // from a consistent data shape. Prefer a stable id if available.
                        <th key={ind} scope="col" className="column-class">
                            {cl}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, rowIndex) => (
                    // Use the row index for key by default. If rows have a stable id field,
                    // replace rowIndex with row.id for better reconciliation.
                    <tr key={rowIndex}>
                        {columns.map((cl, colIndex) => {
                            const cellValue = row[cl]

                            return (
                                // Each cell uses the column index as a key. If columns or cells can
                                // re-order, switch to a stable key strategy.
                                <td key={colIndex} className="cell-class">
                                    {cellValue}
                                </td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;