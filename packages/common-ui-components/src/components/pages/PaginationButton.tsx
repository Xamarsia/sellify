type PageButtonProps = {
  label: string | number;
  value?: number;
  isSelected?: boolean;
  onClick: (value?: number) => void;
};

/**
 * Renders a pagination button with optional selected styling.
 * Invokes the provided callback when the button is clicked.
 * @param label - Label displayed within the button
 * @param value - Page value passed to the click handler
 * @param isSelected - Whether the button represents the currently selected page
 * @param onClick - Callback invoked when the button is clicked
 */
export default function PaginationButton({
  label,
  value,
  isSelected,
  onClick,
}: PageButtonProps) {
  return (
    <button
      onClick={() => onClick(value)}
      disabled={isSelected}
      className={`flex size-10 items-center justify-center body bg-white text-black rounded-lg
        hover:border focus:border-black border-stroke ${isSelected ? `border` : ``}`}
    >
      {label}
    </button>
  );
}
