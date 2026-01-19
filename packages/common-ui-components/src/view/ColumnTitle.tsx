type Props = {
  title: string;
};

export default function ColumnTitle({ title }: Props) {
  return (
    <th className="px-3 lg:px-6 py-5 mx-2" key={`Head_${title}`}>
    <h3>{title}</h3>
    </th>
  );
}
