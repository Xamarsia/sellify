"use client";

type LinkIdTableItemProps = {
  href?: string;
  id: number;
};

export default function LinkIdTableItem({ href, id }: LinkIdTableItemProps) {
  return (
    <div className="flex items-center gap-1">
      <p>#</p>
      <a
        href={href}
        className={`flex underline-offset-4 hover:underline cursor-pointer body`}
      >
        {id}
      </a>
    </div>
  );
}
