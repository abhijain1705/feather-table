export default function TableHead({ columns }: { columns: string[] }) {
    return (
        <thead>
            <tr>
                {columns.map((col) => (
                    <th key={col} className="ft-th">
                        {col}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
