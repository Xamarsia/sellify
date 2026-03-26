"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import SidePanel from "@sellify/common-ui-components/SidePanel";

export default function SidePanelExample() {
  const [opened, setOpened] = useState<boolean>(false);

  const onClose = useCallback((): void => {
    setOpened(false);
  }, []);

  const onOpen = useCallback((): void => {
    setOpened(true);
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Open Side Panel</Button>
      <SidePanel title="Side Panel" open={opened} onClose={onClose}>
        <div className="grow flex flex-col gap-4">
          <div className="h-2.5 bg-gray-200 rounded-full" />
          <div className="h-2.5 bg-gray-200 rounded-full" />
          <div className="h-2.5 bg-gray-200 rounded-full" />
          <div className="h-2.5 bg-gray-200 rounded-full" />
          <div className="h-2.5 bg-gray-200 rounded-full" />
        </div>
      </SidePanel>
    </>
  );
}
