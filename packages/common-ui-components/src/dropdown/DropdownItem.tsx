"use client";

import { useCallback } from "react";


type DropdownItemProps = {
    value: string,
    label: string,
    selected?: boolean,
    onItemSelected: (value: string, label: string) => void,
}


export default function DropdownItem({ value, label, selected, onItemSelected }: DropdownItemProps) {

    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onItemSelected(value, label);
    }, [onItemSelected, value, label]);

    return (
        <button
            onClick={onClick}
            autoFocus={selected}
            className={`body text-left rounded-lg p-2 h-8 w-full bg-white 
                text-[#555555] enabled:hover:text-[#000000] focus:text-[#000000] focus:bg-hovered`}
        >
            {label}
        </button>
    )
}
