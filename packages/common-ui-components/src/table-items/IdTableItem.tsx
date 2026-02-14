"use client";

type IdTableItemProps = {
  id: number;
};

export default function IdTableItem({ id }: IdTableItemProps) {
  return (
    <div className="flex items-center gap-1">
      # <p>{id}</p>
    </div>
  );
}
