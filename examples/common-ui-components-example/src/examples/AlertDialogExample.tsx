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
        description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio."
        actions={[
          {
            variant: "outline",
            children: (
              <div className="h-2.5 my-3 bg-gray-200 rounded-full w-32" />
            ),
          },
          {
            children: (
              <div className="h-2.5 my-3 bg-gray-200 rounded-full w-32" />
            ),
          },
        ]}
      />
    </>
  );
}
