import { ReactNode, useMemo } from "react";

import { Role } from "../types";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type Props = {
    content: Array<Role>;
};

export default function RolesView({ content }: Props) {
    const tableHeader: Array<string> = ["Role Name", "Related users"];

    const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
        return content.map((role) => [
            <LinkButton>
                <p className="line-clamp-3 break-all min-w-20 max-w-96 not-sm:pl-14">
                    {role.title}
                </p>
            </LinkButton>,
            <p>
                {role.relatedUsersCount +
                    `${role.relatedUsersCount > 1 ? " users" : " user"}`}
            </p>,
        ]);
    }, [content]);

    return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
