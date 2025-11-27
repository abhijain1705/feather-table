import React, { useEffect, useRef } from "react";

type Props = {
    onClose: () => void;
    children?: React.ReactNode;
};

const ColumnPopover = ({ onClose, children }: Props) => {
    const popRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (popRef.current && !popRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, [onClose]);

    return (
        <div ref={popRef} className="ft-popover">
            {children ?? "No content"}
        </div>
    );
};

export default ColumnPopover;
