import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <main className="flex flex-col w-full">{children}</main>;
}
