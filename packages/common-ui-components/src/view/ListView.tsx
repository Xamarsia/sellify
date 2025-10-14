import { ReactNode } from "react";

type Props = {
  head: Array<string>;
  content: Array<Array<ReactNode>>;
};

export default function ListView({ head, content }: Props) {
  return (
    <ul className="flex flex-col w-full divide-y divide-stroke border border-stroke rounded-lg py-2">
      {content.map((rowData, rowIndex) => (
        <li
          key={`Content_${rowIndex}`}
          className="flex flex-col hover:bg-[#F8F8F8]"
        >
          <div className="flex flex-col p-4 gap-2">
            {head.map((header, colIndex) => (
              <div
                key={`Header_${header}`}
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
