"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type DialogBaseProps = {
  dialogOpen: boolean;
  children?: ReactNode;
  onDialogClose: () => void;
};

/**
 * Renders shared modal overlay and content-container behavior.
 *
 * Content is rendered only while the dialog is open. Clicking outside the
 * content container invokes the close callback.
 *
 * @param dialogOpen - Whether the modal overlay and content are visible
 * @param children - Optional content rendered inside the modal container
 * @param onDialogClose - Callback invoked after an outside click
 */
export default function DialogBase({
  children: content,
  dialogOpen,
  onDialogClose,
}: DialogBaseProps) {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dialogOpen && !modal.current?.contains(e.target as Node)) {
        onDialogClose();
      }
    };
    if (dialogOpen) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [onDialogClose, dialogOpen]);

  return (
    dialogOpen && (
      <div
        className={`fixed top-0 left-0 z-50 size-full bg-black/20 flex justify-center
        items-center backdrop-blur-xs no-doc-scroll`}
      >
        <div
          ref={modal}
          className="bg-white w-full max-w-xl h-fit max-h-screen m-4 p-8 rounded-lg border border-stroke"
        >
          {content}
        </div>
      </div>
    )
  );
}
