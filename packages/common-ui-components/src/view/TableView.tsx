import { ReactNode } from "react";

type Props = {
  head: Array<string>;
  content: Array<Array<ReactNode>>;
};

export default function TableView({ head, content }: Props) {
  return (
    <div className="w-full overflow-x-auto bg-white border border-stroke rounded-lg body shrink-0">
      <table className="w-full table-auto text-left">
        <thead className="w-full h-16 border-b border-stroke px-9 py-5">
          <tr>
            {head.map((label, index) => (
              <th className="px-3 lg:px-6 py-5 mx-2" key={`Head_${index}`}>
                <h3>{label}</h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full px-9 py-5">
          {content.map((row, index) => (
            <tr key={`Row_${index}`}
              className="body min-h-16 max-h-24 hover:bg-[#F8F8F8]"
            >
              {row.map((component, index) => (
                <td key={`Cell_${index}`}
                  className="px-3 lg:px-6 py-3 mx-2">
                  {component}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
