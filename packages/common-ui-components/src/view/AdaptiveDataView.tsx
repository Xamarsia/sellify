import { ReactNode } from "react";

import ListView from "./ListView";
import TableView from "./TableView";

type Props = {
  head: Array<ReactNode>;
  content: Array<Array<ReactNode>>;
};

export default function AdaptiveDataView({ head, content }: Props) {
  return (
    <>
      <div className="w-full not-sm:hidden">
        <TableView head={head} content={content} />
      </div>
      <div className="w-full sm:hidden">
        <ListView head={head} content={content} />
      </div>
    </>
  );
}
