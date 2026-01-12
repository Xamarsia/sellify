import { ReactNode, useMemo } from "react";

import { AdminPreview } from "../types";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

type Props = {
  content: Array<AdminPreview>;
};

export default function AdminsPreviewView({ content }: Props) {
  const tableHeader: Array<string> = ["Name", "Admin ID"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((admin) => [
      <LinkButton href={`/admin/${admin.adminId}`}>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {admin.name}
        </p>
      </LinkButton>,
      <div className="flex items-center gap-1">
        #
        <p>{admin.adminId}</p>
      </div>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
