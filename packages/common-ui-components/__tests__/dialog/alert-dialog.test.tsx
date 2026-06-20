import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import AlertDialog from "@sellify/common-ui-components/dialog/AlertDialog";

type AlertDialogProps = ComponentProps<typeof AlertDialog>;

describe("AlertDialog", () => {
  const defaultProps = {
    icon: <svg data-testid="alert-icon" />,
    title: "Alert Title",
    dialogOpen: true,
  } satisfies Pick<AlertDialogProps, "icon" | "title" | "dialogOpen">;

  const buildProps = (
    props: Partial<AlertDialogProps> = {},
  ): AlertDialogProps => ({
    ...defaultProps,
    actions: [{ children: "Continue" }],
    onDialogClose: jest.fn(),
    ...props,
  });

  const renderAlertDialog = (props: Partial<AlertDialogProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<AlertDialog {...resolvedProps} />);

    return {
      ...renderResult,
      onDialogCloseMock: resolvedProps.onDialogClose,
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

    it("renders actions in the provided order", () => {
      renderAlertDialog({
        actions: [
          { children: "Cancel", variant: "outline" },
          { children: "Continue", disabled: true },
        ],
      });

      const actions = screen.getAllByRole("button");

      expect(actions).toHaveLength(2);
      expect(actions[0]).toHaveTextContent("Cancel");
      expect(actions[1]).toHaveTextContent("Continue");
      expect(actions[1]).toBeDisabled();
    });

    it("omits action buttons when actions are not provided", () => {
      renderAlertDialog({ actions: undefined });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
  });

  describe("action handling", () => {
    it("calls an action click handler", async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();

      renderAlertDialog({
        actions: [{ children: "Continue", onClick }],
      });

      await user.click(screen.getByRole("button", { name: "Continue" }));

      expect(onClick).toHaveBeenCalledTimes(1);
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
