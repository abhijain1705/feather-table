import { useEffect, useRef, useState } from "react"
import FtColumnList from "../icons/ftColumnList"
import FtFilter from "../icons/ftFilter"
import FtReset from "../icons/ftReset"
import type { FilterTrayProps } from "../types/type"


const FilterTray = ({ sorting, setsorting, columns, setVisibleColumns, visibleColumns, allColumns }: FilterTrayProps) => {

    const [openColumnPop, setopenColumnPop] = useState(false)

    const popRef = useRef<HTMLDivElement>(null);
    const [openFilterPop, setopenFilterPop] = useState(false)
    const filterPopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (popRef.current && !popRef.current.contains(e.target as Node)) {
                setopenColumnPop(false);
            }
        };

        const handleFilterOutside = (e: MouseEvent) => {
            if (filterPopRef.current && !filterPopRef.current.contains(e.target as Node)) {
                setopenColumnPop(false);
            }
        };

        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("mousedown", handleFilterOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("mousedown", handleFilterOutside);
        };
    }, []);

    const toggleColumn = (col: string) => {
        setVisibleColumns(prev => ({
            ...prev,
            [col]: !prev[col]
        }));
    };

    return (
        <div className="ft-filter-tray">
            <div className="ft-column-tray">
                <button onClick={() => {
                    setopenColumnPop(prev => !prev)
                }} className="ft-th-click-icon">
                    <FtColumnList />
                </button>
                {openColumnPop && <div ref={popRef} className="ft-popover">
                    {
                        allColumns.map((col) => (
                            <div key={col} className="ft-popover-item" >
                                <span>{col}</span>
                                <input type="checkbox"
                                    checked={visibleColumns[col]}
                                    onChange={() => toggleColumn(col)} />
                            </div>
                        )
                        )
                    }
                </div>}
            </div>
            {/* ---------------- FILTER / SORTING ---------------- */}
            <div className="ft-column-tray">
                <button
                    onClick={() => {
                        setsorting({})
                        setVisibleColumns(() => {
                            return Object.fromEntries(allColumns.map(c => [c, true]))
                        })
                    }}
                    className="ft-th-click-icon"
                >
                    <FtReset />
                </button>
                <button
                    onClick={() => {
                        setopenFilterPop(prev => !prev)
                        setopenColumnPop(false)
                    }}
                    className="ft-th-click-icon"
                >
                    <FtFilter />
                </button>

                {openFilterPop && (
                    <div ref={filterPopRef} className="ft-popover" style={{ minWidth: 180 }}>

                        {/* Column select */}
                        <div className="ft-popover-item">
                            <label style={{ fontSize: 12 }}>Column</label>
                            <select
                                value={Object.keys(sorting)[0] ?? ""}
                                onChange={e => {
                                    const col = e.target.value;
                                    setsorting(prev => {
                                        const direction = prev[col] ?? "asc"; // default asc
                                        return { [col]: direction }; // only one column sorted at a time
                                    });
                                }}

                            >
                                <option value="">Select column</option>
                                {columns.map(col => (
                                    <option key={col} value={col}>{col}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sorting select */}
                        <div className="ft-popover-item">
                            <label style={{ fontSize: 12 }}>Sort Direction</label>
                            <select
                                value={sorting[Object.keys(sorting)[0]] ?? "none"}
                                onChange={e => {
                                    const direction = e.target.value;
                                    setsorting(prev => {
                                        const col = Object.keys(prev)[0]; // current active column
                                        if (!col) return {};
                                        return { [col]: direction };
                                    });
                                }}

                            >
                                <option value="none">No Sorting</option>
                                <option value="asc">Ascending ↑</option>
                                <option value="desc">Descending ↓</option>
                            </select>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterTray