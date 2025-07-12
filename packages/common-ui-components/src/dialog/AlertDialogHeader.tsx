"use client";


import { ReactNode } from "react";
import AlertDialogIcon from "./AlertDialogIcon.js";


type DialogProps = {
    title: string,
    icon: ReactNode,
}

export default function AlertDialogHeader({ title, icon }: DialogProps) {

    return (
        <div className="flex flex-col items-center gap-6 pb-9">
            <AlertDialogIcon icon={icon} />
            <h2>{title}</h2>
        </div>
    );
};
