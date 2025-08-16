"use client";

import { ReactNode } from 'react';


type IconButtonProps = {
    variant?: 'default' | 'destructive' | 'white',
    type?: 'button' | 'submit',
    disabled?: boolean,
    children: ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TransparentIconButton({ variant = 'default', type = 'button', disabled, children, onClick, }: IconButtonProps) {

    const variantStyle = {
        default: "text-[#555555] enabled:hover:text-[#000000] focus:text-[#000000] disabled:text-disabled",
        white: "text-white/90 enabled:hover:text-white focus:text-white disabled:text-white/40",
        destructive: "text-destructive enabled:hover:text-[#802A2A] focus:text-[#802A2A] disabled:text-destructive-disabled",
    }[variant];

    return (
        <button type={type}
            className={`flex justify-center items-center rounded-lg enabled:cursor-pointer disabled:cursor-not-allowed
                    body size-6 min-w-6
                    ${variantStyle}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
