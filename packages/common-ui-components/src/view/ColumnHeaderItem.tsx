type Props = {
  label: string;
};

export default function ColumnHeaderItem({ label }: Props) {
  return (
    <div className="px-3 lg:px-6">
      <h3>{label}</h3>
    </div>
  );
}
