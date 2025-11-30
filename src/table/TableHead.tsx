
export default function TableHead({ columns, }: {
    columns: string[];
}) {
    return (
        <thead>
            <tr>
                {columns.map(col => {

                    return (
                        <th key={col} className="ft-th">
                            <div className="ft-th-div">
                                <span>{col}</span>
                            </div>
                        </th>
                    )
                })}
            </tr>
        </thead>
    );
}
