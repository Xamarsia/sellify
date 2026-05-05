import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import AlertDialogIcon from "@sellify/common-ui-components/dialog/AlertDialogIcon";

describe("AlertDialogIcon", () => {
  it("renders provided icon", () => {
    render(<AlertDialogIcon icon={<svg data-testid="alert-icon" />} />);

    expect(screen.getByTestId("alert-icon")).toBeVisible();
  });
});
