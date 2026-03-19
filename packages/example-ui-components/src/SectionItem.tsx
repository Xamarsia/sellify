import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function SectionItem({ children, title }: Props) {
  return (
    <div className="flex flex-col gap-4 justify-between px-4 sm:px-6 lg:px-8 py-6">
      {title && (
        <div className="bg-white py-1">
          <h3 className="text-gray-900">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
}
