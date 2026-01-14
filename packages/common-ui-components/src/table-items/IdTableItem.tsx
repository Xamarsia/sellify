"use client";

type LinkTableItemProps = {
  id: number;
};

export default function IdTableItem({ id }: LinkTableItemProps) {
  return (
    <div className="flex items-center gap-1">
      # <p>{id}</p>
    </div>
  );
}
