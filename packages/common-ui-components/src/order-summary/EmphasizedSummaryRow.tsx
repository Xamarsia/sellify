import { formatCurrency } from "../utils/currency";

type SummaryRowProps = {
  label: string;
  amount: number;
};

/**
 * Displays a highlighted summary row with a label and formatted amount.
 * @param label - The row label.
 * @param amount - The currency amount to display.
 */
export default function EmphasizedSummaryRow({
  label,
  amount,
}: SummaryRowProps) {
  const formattedAmount = formatCurrency(amount);

  return (
    <div className={`flex w-full items-center justify-between text-black`}>
      <h3>{label}</h3>
      <h3>{formattedAmount}</h3>
    </div>
  );
}
