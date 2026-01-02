"use client";

type FooterProps = {
  copyright?: string;
};

export default function Footer({ copyright }: FooterProps) {
  return (
    <footer className="flex justify-center items-center h-fit w-full pt-2 pb-12 px-12 body">
      <p> © {copyright}</p>
    </footer>
  );
}
