import { ReactNode } from "react";

import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

type Props = {
  head: Array<string>;
  content: Array<Array<ReactNode>>;
};

export default function Table({ head, content }: Props) {
  return (
    <div className="w-full overflow-x-auto bg-white border border-stroke rounded-lg body py-2 min-w-fit shrink-0">
      <table className="w-full table-auto text-left">
        <TableHeader head={head} />
        <TableContent body={content} />
      </table>
    </div>
  );
}
