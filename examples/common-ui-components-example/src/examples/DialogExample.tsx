"use client";

import { ReactNode, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import Dialog from "@sellify/common-ui-components/dialog/Dialog";


type DialogProps = {
    title: string,
}

export default function DialogExample({ title }: DialogProps) {
    const [opened, setOpened] = useState<boolean>(false);


    const onCloseClicked = useCallback((): void => {
        setOpened(false);
    }, []);

    const onClick = useCallback(() => {
        setOpened(!opened);
    }, [opened]);


    return (
        <>
            <Button onClick={onClick}>
                Open Dialog
            </Button>
            <Dialog title={title} dialogOpen={opened} onDialogClose={onCloseClicked} >
                <div className="grow flex flex-col justify-between gap-4">
                    <div className="grow flex flex-col gap-4 shrink-0">
                        <div className="h-2.5 bg-gray-200 rounded-full " />
                        <div className="h-2.5 bg-gray-200 rounded-full " />
                        <div className="h-2.5 bg-gray-200 rounded-full " />
                        <div className="h-2.5 bg-gray-200 rounded-full " />
                        <div className="h-2.5 bg-gray-200 rounded-full " />
                    </div>
                    <div className="flex justify-between ">
                        <Button variant="outline">
                            <div className="h-2.5 my-3 bg-gray-200 rounded-full w-32" />
                        </Button>
                        <Button>
                            <div className="h-2.5 my-3 bg-gray-200 rounded-full w-32" />
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
