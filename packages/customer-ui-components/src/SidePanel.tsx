"use client";

import { ReactNode, useEffect, useMemo, useRef } from "react";

import XMark from "@sellify/common-icons/x-mark";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type SidePanelProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: "left" | "right";
};

export default function SidePanel({
  title,
  open,
  onClose,
  children,
  side = "right",
}: SidePanelProps) {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (open && !modal.current?.contains(e.target as Node)) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [onClose, open]);

  const panelSide = useMemo<string>(() => {
    switch (side) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
    }
  }, [side]);

  return (
    <div
      className={`fixed top-0 right-0 inset-y-0 size-full flex  bg-black/20 z-50 ${!open && "hidden"} ${panelSide} ltr`}
    >
      <div
        ref={modal}
        className="relative flex flex-col bg-white w-full max-w-xl rounded-s-lg border border-stroke p-8 overflow-y-auto"
      >
        <div className="flex flex-none justify-between items-center mb-8">
          <h2>{title}</h2>
          <TransparentIconButton onClick={onClose}>
            <XMark style="size-6 stroke-current" />
          </TransparentIconButton>
        </div>
        {children}
      </div>
    </div>
  );
}
