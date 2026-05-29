"use client";

import { ReactNode, useEffect, useMemo, useRef } from "react";

import XMarkIcon from "@sellify/common-icons/x-mark";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import { SIDE_PANEL_PLACEMENT } from "@sellify/common-ui-components/constants";
import { SidePanelPlacement } from "@sellify/common-ui-components/types";

type SidePanelProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  placement?: SidePanelPlacement;
};

/**
 * Renders a dismissible side panel with a header, close button, and custom content.
 * Positions the panel on the configured side and closes it when the user clicks outside.
 * @param title - Title displayed in the panel header
 * @param isOpen - Controls whether the panel is visible
 * @param onClose - Callback invoked when the panel should close
 * @param children - Content displayed inside the panel
 * @param placement - Side of the viewport where the panel is rendered
 */
export default function SidePanel({
  title,
  isOpen,
  onClose,
  children: content,
  placement = SIDE_PANEL_PLACEMENT.RIGHT,
}: SidePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (isOpen && !panelRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [isOpen, onClose]);

  const panelSide = useMemo<string>(() => {
    switch (placement) {
      case SIDE_PANEL_PLACEMENT.LEFT:
        return "justify-start";
      case SIDE_PANEL_PLACEMENT.RIGHT:
        return "justify-end";
    }
  }, [placement]);

  return (
    isOpen && (
      <div
        className={`fixed top-0 right-0 inset-y-0 size-full flex bg-black/20 z-50 no-doc-scroll ${panelSide} ltr`}
      >
        <div
          ref={panelRef}
          className="relative flex flex-col bg-white w-full max-w-xl rounded-s-lg border border-stroke p-8"
        >
          <div className="flex flex-none justify-between items-center mb-8">
            <h2>{title}</h2>
            <TransparentIconButton onClick={onClose} icon={<XMarkIcon />} />
          </div>
          {content}
        </div>
      </div>
    )
  );
}
