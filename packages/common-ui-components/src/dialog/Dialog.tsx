"use client";


import { ReactNode } from "react";
import DialogBase from "./DialogBase.js";
import DialogHeader from "./DialogHeader.js";


type DialogProps = {
    title: string,
    dialogOpen: boolean,
    children?: ReactNode,
    onDialogClose: () => void,
}


export default function Dialog({ title, children: content, dialogOpen, onDialogClose }: DialogProps) {
    return (
        <DialogBase dialogOpen={dialogOpen} onDialogClose={onDialogClose} >
            <DialogHeader title={title} onDialogClose={onDialogClose} />
            {content}
        </DialogBase>
    );
};
