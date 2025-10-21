import { ReactNode } from "react";

type Props = {
  head: Array<string>;
  content: Array<Array<ReactNode>>;
};

export default function ListView({ head, content }: Props) {
  return (
    <ul className="flex flex-col w-full divide-y divide-stroke border border-stroke rounded-lg overflow-hidden">
      {content.map((rowData, rowIndex) => (
        <li
          key={`Content_${rowIndex}`}
          className="flex flex-col hover:bg-[#F8F8F8]"
        >
          <div className="flex flex-col px-4 py-6 gap-4">
            {head.map((header, colIndex) => (
              <div
                key={`Header_${colIndex}`}
                className="flex flex-row justify-between"
              >
                <h4>{header}</h4>
                {rowData[colIndex]}
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
