import { formatCurrency } from "../../utils/currency";

type SummaryRowProps = {
  label: string;
  amount: number;
};

/**
 * Displays a summary row with a label and formatted amount.
 * @param label - The row label.
 * @param amount - The currency amount to display.
 */
export default function SummaryRow({ label, amount }: SummaryRowProps) {
  const formattedAmount = formatCurrency(amount);

  return (
    <div
      className={`flex w-full items-center justify-between body text-secondary`}
    >
      <span>{label}</span>
      <span>{formattedAmount}</span>
    </div>
  );
}
