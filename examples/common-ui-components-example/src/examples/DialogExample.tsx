"use client";

import { ReactNode, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import Dialog from "@sellify/common-ui-components/dialog/Dialog";


type DialogProps = {
    title: string,
    children?: ReactNode,
}

export default function DialogExample({ title, children }: DialogProps) {
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
                {children}
            </Dialog>
        </>
    )
}
