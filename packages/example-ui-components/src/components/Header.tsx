import React from "react";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center h-32 bg-primary px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-3xl">{title}</h1>
    </header>
  );
}
