"use client";

import { useCallback } from "react";

import XMark from "@sellify/common-icons/x-mark"
import TransparentIconButton from "../buttons/TransparentIconButton.js";


type ComboboxItemProps = {
    value: string,
    label: string,
    disabled?: boolean,
    onRemove?: (value: string, labe: string) => void,
}


export default function ComboboxItem({ value, label, disabled, onRemove }: ComboboxItemProps) {

    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onRemove) {
            onRemove(value, label);
        }

    }, [value, label, onRemove]);

    return (
        <div className="flex justify-center items-center bg-[#F8F8F8] rounded-lg px-4 h-8 gap-2">
            <span className={`label text-left text-[#555555]`}>
                {label}
            </span>
            {!disabled && <TransparentIconButton onClick={onClick} >
                <XMark style="size-4" />
            </TransparentIconButton>}
        </div>
    )
}
