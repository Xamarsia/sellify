import { ReactNode } from "react";
import TableRow from "./TableRow";

type Props = {
  body: Array<Array<ReactNode>>;
};

export default function TableContent({ body }: Props) {
  return (
    <tbody className="w-full px-9 py-5">
      {body.map((row, index) => (
        <TableRow row={row} key={"Row:" + index} />
      ))}
    </tbody>
  );
}
