"use client";


import { ReactNode } from "react";
import DialogBase from "./DialogBase.js";
import AlertDialogHeader from "./AlertDialogHeader.js";


type DialogProps = {
    title: string,
    dialogOpen: boolean,
    children?: ReactNode,
    icon?: ReactNode,
    onDialogClose: () => void,
}


export default function AlertDialog({ title, children: content, dialogOpen, icon, onDialogClose }: DialogProps) {
    return (
        <DialogBase dialogOpen={dialogOpen} onDialogClose={onDialogClose} >
            <AlertDialogHeader title={title} icon={icon} />
            {content}
        </DialogBase>
    );
};
