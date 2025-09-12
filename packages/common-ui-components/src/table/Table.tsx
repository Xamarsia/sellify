import { ReactNode } from "react";

import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

type Props = {
  head: Array<string>;
  content: Array<Array<ReactNode>>;
};

export default function Table({ head, content }: Props) {
  return (
    <div className="relative w-full overflow-x-auto bg-white border border-stroke rounded-lg body py-2">
      <table className="w-full table-auto text-left">
        <TableHeader head={head} />
        <TableContent body={content} />
      </table>
    </div>
  );
}
