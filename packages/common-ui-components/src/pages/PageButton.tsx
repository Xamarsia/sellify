type PageButtonProps = {
  text: string;
  selected?: boolean;
  onPageSelected: () => void;
};

export default function PageButton({
  text,
  selected,
  onPageSelected,
}: PageButtonProps) {
  return (
    <button
      onClick={onPageSelected}
      className={`flex size-10 items-center justify-center body bg-primary text-black rounded-lg
        hover:border focus:border-black border-stroke ${selected ? `border` : ``}`}
    >
      {text}
    </button>
  );
}
