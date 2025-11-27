import { useState } from "react";
import FtArrowDown from "../icons/ftArrowDown";
import FtArrowUp from "../icons/ftArrowUp";
import FtDot from "../icons/ftDot";
import ColumnPopover from "./columnPopover";

export default function TableHead({ columns, sorting, setsorting }: {
    columns: string[];
    sorting: Record<string, "asc" | "desc">;
    setsorting: React.Dispatch<React.SetStateAction<Record<string, "asc" | "desc">>>;
}) {
    const [openFor, setOpenFor] = useState<string | null>(null);

    return (
        <thead>
            <tr>
                {columns.map(col => {

                    const order = col in sorting ? sorting[col] : undefined;

                    return (
                        <th key={col} className="ft-th">
                            <div className="ft-th-div">
                                <span>{col}</span>

                                {/* HOVER ZONE WRAPPER */}
                                <div
                                    className="ft-dot-wrapper"
                                    onMouseEnter={() => setOpenFor(col)}
                                    onMouseLeave={() => setOpenFor(null)}
                                >
                                    <FtDot className="ft-th-click-icon" />

                                    {openFor === col && (
                                        <ColumnPopover onClose={() => setOpenFor(null)}>
                                            <div onClick={() => {
                                                setsorting(prev => {
                                                    const current = prev[col];
                                                    if (current === "asc") {
                                                        return { ...prev, [col]: "desc" };
                                                    }
                                                    if (current === "desc") {
                                                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                        const { [col]: _, ...rest } = prev;
                                                        return rest;
                                                    }
                                                    return { ...prev, [col]: "asc" };
                                                })
                                            }} className="ft-popover-item">Sort {order === "asc" ? <FtArrowUp /> : order === "desc" ? <FtArrowDown /> : null}</div>
                                            <div className="ft-popover-item">Hide Column</div>
                                        </ColumnPopover>
                                    )}
                                </div>
                            </div>
                        </th>
                    )
                })}
            </tr>
        </thead>
    );
}
