"use client";


import { ReactNode } from "react";
import DialogBase from "./DialogBase";
import DialogHeader from "./DialogHeader";


type DialogProps = {
    title: string,
    dialogOpen: boolean,
    children?: ReactNode,
    onDialogClose: () => void,
}


export default function Dialog({ title, children: content, dialogOpen, onDialogClose }: DialogProps) {
    return (
        <DialogBase dialogOpen={dialogOpen} onDialogClose={onDialogClose} >
            <div className="flex flex-col grow justify-between min-h-96 h-full">
                <DialogHeader title={title} onDialogClose={onDialogClose} />
                {content}
            </div>
        </DialogBase>
    );
};
