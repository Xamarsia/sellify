"use client";

type CurrencyTableItemProps = {
  amount: number;
};

export default function CurrencyTableItem({ amount }: CurrencyTableItemProps) {
  return (
    <div className="flex items-center gap-1">
      $ <p>{amount}</p>
    </div>
  );
}
