type Props = {
  head: Array<string>;
};

export default function TableHeader({ head }: Props) {
  return (
    <thead className="w-full h-16 border-b border-stroke px-9 py-5">
      <tr>
        {head.map((label) => (
          <th className="px-6 py-3 mx-2" key={label}>
            <h3>{label}</h3>
          </th>
        ))}
      </tr>
    </thead>
  );
}
