import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps } from "react";

import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import * as idUtils from "@sellify/common-ui-components/utils/id";

type IdCellBuilderProps = ComponentProps<typeof IdCellBuilder.buildView>;

describe("IdCellBuilder", () => {
  let formatIDSpy: jest.SpiedFunction<typeof idUtils.formatID>;

  const defaultProps = {
    id: "1234567890",
  } satisfies IdCellBuilderProps;

  const renderIdCell = (props: Partial<IdCellBuilderProps> = {}) =>
    render(<>{IdCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  beforeEach(() => {
    formatIDSpy = jest.spyOn(idUtils, "formatID");
  });

  afterEach(() => {
    formatIDSpy.mockRestore();
  });

  it.each([
    ["string", "1234567890"],
    ["number", 42],
  ])("renders a formatted %s identifier", (_type, id) => {
    formatIDSpy.mockReturnValue("formatted ID");

    renderIdCell({ id });

    expect(screen.getByText("formatted ID")).toBeVisible();
    expect(formatIDSpy).toHaveBeenCalledTimes(1);
    expect(formatIDSpy).toHaveBeenCalledWith(id);
  });
});
