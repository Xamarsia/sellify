"use client";


import { ReactNode, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import AlertDialog from "@sellify/common-ui-components/dialog/AlertDialog";
import FireIcon from "@sellify/common-icons/fire";


type DialogProps = {
    title: string,
    children?: ReactNode,
}

export default function AlertDialogExample({ title, children }: DialogProps) {
    const [opened, setOpened] = useState<boolean>(false);


    const onCloseClicked = useCallback((): void => {
        setOpened(false);
    }, []);

    const onOpenDialog = useCallback(() => {
        setOpened(!opened);
    }, [opened]);


    return (
        <>
            <Button onClick={onOpenDialog}>
                Open Alert Dialog
            </Button>
            <AlertDialog title={title} dialogOpen={opened} onDialogClose={onCloseClicked} icon={<FireIcon />}>
                {children}
            </AlertDialog>
        </>
    )
}
