import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import AlertDialog from "@sellify/common-ui-components/dialog/AlertDialog";

type AlertDialogProps = ComponentProps<typeof AlertDialog>;

describe("AlertDialog", () => {
  const renderAlertDialog = (props: Partial<AlertDialogProps> = {}) => {
    const onDialogCloseMock = props.onDialogClose ?? jest.fn();

    const renderResult = render(
      <AlertDialog
        icon={props.icon ?? <svg data-testid="alert-icon" />}
        title={props.title ?? "Alert Title"}
        dialogOpen={props.dialogOpen ?? true}
        onDialogClose={onDialogCloseMock}
        {...props}
      >
        {props.children ?? <button type="button">Continue</button>}
      </AlertDialog>,
    );

    return {
      ...renderResult,
      onDialogCloseMock,
    };
  };

  describe("rendering", () => {
    it("renders icon, title, description, and control panel content", () => {
      renderAlertDialog({
        description: "Alert description",
      });

      expect(screen.getByTestId("alert-icon")).toBeVisible();
      expect(screen.getByText("Alert Title")).toBeVisible();
      expect(screen.getByText("Alert description")).toBeVisible();
      expect(screen.getByRole("button", { name: "Continue" })).toBeVisible();
    });

    it("omits the description when not provided", () => {
      renderAlertDialog();

      expect(screen.queryByText("Alert description")).not.toBeInTheDocument();
    });
  });

  describe("close handling", () => {
    it("calls onDialogClose when clicking outside the dialog", async () => {
      const user = userEvent.setup();

      const { onDialogCloseMock } = renderAlertDialog();

      await user.click(document.body);

      expect(onDialogCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
