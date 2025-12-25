import { ReactNode, useMemo } from "react";

import { AdminPreview } from "../types";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

type Props = {
  content: Array<AdminPreview>;
};

export default function AdminsPreviewView({ content }: Props) {
  const tableHeader: Array<string> = ["Name", "Admin ID", "Role"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((admin) => [
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {admin.name}
        </p>
      </LinkButton>,
      <h4>{"#" + admin.adminId}</h4>,
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {admin.role}
        </p>
      </LinkButton>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
