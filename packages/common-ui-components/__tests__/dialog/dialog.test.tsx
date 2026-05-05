import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import Dialog from "@sellify/common-ui-components/dialog/Dialog";

type DialogProps = ComponentProps<typeof Dialog>;

describe("Dialog", () => {
  const renderDialog = (props: Partial<DialogProps> = {}) => {
    const onDialogCloseMock = props.onDialogClose ?? jest.fn();
    const renderResult = render(
      <Dialog
        title={props.title ?? "Dialog Title"}
        dialogOpen={props.dialogOpen ?? true}
        onDialogClose={onDialogCloseMock}
        {...props}
      >
        {props.children ?? <p>Dialog Body</p>}
      </Dialog>,
    );

    return {
      ...renderResult,
      onDialogCloseMock,
    };
  };

  describe("rendering", () => {
    it("renders title, content, and close button when open", () => {
      const { container } = renderDialog();

      expect(screen.getByText("Dialog Title")).toBeVisible();
      expect(screen.getByText("Dialog Body")).toBeVisible();
      expect(container.querySelector("svg")).toBeVisible();
    });

    it("does not render dialog when closed", () => {
      const { container } = renderDialog({
        dialogOpen: false,
      });

      expect(container.firstElementChild).not.toBeInTheDocument();
      expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
      expect(screen.queryByText("Dialog Body")).not.toBeInTheDocument();
    });
  });

  describe("close handling", () => {
    it("calls onDialogClose on close button click", async () => {
      const user = userEvent.setup();
      const { onDialogCloseMock } = renderDialog();

      const closeButton = screen.getByRole("button");

      await user.click(closeButton);

      expect(onDialogCloseMock).toHaveBeenCalledTimes(1);
    });

    it("calls onDialogClose on outside click", async () => {
      const user = userEvent.setup();

      const { onDialogCloseMock } = renderDialog();

      await user.click(document.body);

      expect(onDialogCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
