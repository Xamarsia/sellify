"use client";

import { ReactNode, useEffect, useRef } from "react";

type DialogProps = {
  dialogOpen: boolean;
  children?: ReactNode;
  onDialogClose: () => void;
};

export default function DialogBase({
  children: content,
  dialogOpen,
  onDialogClose,
}: DialogProps) {
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
    <div
      className={`fixed top-0 left-0 z-50 size-full bg-black/20 flex justify-center items-center backdrop-blur-xs 
            ${dialogOpen ? "no-doc-scroll" : "hidden"}`}
    >
      <div
        ref={modal}
        className="bg-white w-full max-w-xl h-fit max-h-screen m-4 p-8 rounded-lg border border-stroke"
      >
        {content}
      </div>
    </div>
  );
}
