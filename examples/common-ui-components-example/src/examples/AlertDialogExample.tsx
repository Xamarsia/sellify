"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import AlertDialog from "@sellify/common-ui-components/dialog/AlertDialog";
import FireIcon from "@sellify/common-icons/fire";

type DialogProps = {
  title: string;
};

export default function AlertDialogExample({ title }: DialogProps) {
  const [opened, setOpened] = useState<boolean>(false);

  const onCloseClicked = useCallback((): void => {
    setOpened(false);
  }, []);

  const onOpenDialog = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return (
    <>
      <Button onClick={onOpenDialog}>Open Alert Dialog</Button>
      <AlertDialog
        title={title}
        dialogOpen={opened}
        onDialogClose={onCloseClicked}
        icon={<FireIcon />}
      >
        <div className="grow flex flex-col justify-between gap-4">
          <div className="grow flex flex-col gap-4 shrink-0">
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
      </AlertDialog>
    </>
  );
}
