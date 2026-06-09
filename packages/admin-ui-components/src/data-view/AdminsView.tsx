import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { DateCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/DateCellBuilder";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { AdminStatusCellBuilder } from "../cell-builders/AdminStatusCellBuilder";

import { Admin } from "../types";

type AdminsViewProps = {
  content: Array<Admin>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<Admin>> = [
  createCellPrototype("Name", LinkTextCellBuilder, ({ adminId, name }) => ({
    href: `/admin/${adminId}`,
    text: name,
  })),
  createCellPrototype("Admin ID", IdCellBuilder, ({ adminId }) => ({
    id: adminId,
  })),
  createCellPrototype("Created On", DateCellBuilder, ({ createdOn }) => ({
    date: createdOn,
  })),
  createCellPrototype("Role", LinkTextCellBuilder, ({ role }) => ({
    href: `/role/${role.roleId}`,
    text: role.title,
  })),
  createCellPrototype("Status", AdminStatusCellBuilder, ({ status }) => ({
    status,
  })),
];

export default function AdminsView({ content }: AdminsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
