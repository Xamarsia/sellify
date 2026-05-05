import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import DialogBase from "@sellify/common-ui-components/dialog/DialogBase";

type DialogBaseProps = ComponentProps<typeof DialogBase>;

describe("DialogBase", () => {
  const renderDialogBase = (props: Partial<DialogBaseProps> = {}) => {
    const onDialogCloseMock = props.onDialogClose ?? jest.fn();
    const renderResult = render(
      <DialogBase
        dialogOpen={props.dialogOpen ?? true}
        onDialogClose={onDialogCloseMock}
        {...props}
      >
        {props.children}
      </DialogBase>,
    );

    return {
      ...renderResult,
      onDialogCloseMock,
    };
  };

  const rerenderDialogBase = (
    rerender: (ui: ReactElement) => void,
    props: Partial<DialogBaseProps> = {},
  ) => {
    const onDialogCloseMock = props.onDialogClose ?? jest.fn();

    rerender(
      <DialogBase
        dialogOpen={props.dialogOpen ?? true}
        onDialogClose={onDialogCloseMock}
        {...props}
      >
        {props.children}
      </DialogBase>,
    );
  };

  describe("rendering", () => {
    it("renders dialog and overlay when opened", () => {
      const { container } = renderDialogBase({
        children: <div>Dialog Content</div>,
      });

      expect(screen.getByText("Dialog Content")).toBeVisible();
      expect(container.firstElementChild).toBeVisible();
    });

    it("renders provided content when open", () => {
      const { container } = renderDialogBase({
        children: (
          <>
            <div>New Dialog Content</div>,
            <svg data-testid="icon-id" />
          </>
        ),
      });

      expect(screen.getByText("New Dialog Content")).toBeVisible();
      expect(screen.getByTestId("icon-id")).toBeVisible();
      expect(container.firstElementChild).toBeVisible();
    });

    it("does not render dialog and overlay when closed", () => {
      const { container } = renderDialogBase({
        dialogOpen: false,
      });

      expect(container.firstElementChild).not.toBeInTheDocument();
    });

    it("renders after transitioning from closed to open", () => {
      const { container, rerender } = renderDialogBase({
        dialogOpen: false,
      });

      expect(container.firstElementChild).not.toBeInTheDocument();

      rerenderDialogBase(rerender, {
        children: <div>Dialog Content</div>,
        dialogOpen: true,
      });

      expect(screen.getByText("Dialog Content")).toBeVisible();
      expect(container.firstElementChild).toBeVisible();
    });
  });

  describe("outside click handling", () => {
    it("calls onDialogClose on outside click", async () => {
      const user = userEvent.setup();

      const { onDialogCloseMock } = renderDialogBase();

      await user.click(document.body);

      expect(onDialogCloseMock).toHaveBeenCalledTimes(1);
    });

    it("does not call onDialogClose on inside click", async () => {
      const user = userEvent.setup();

      const { onDialogCloseMock } = renderDialogBase({
        children: <div>Dialog Content</div>,
      });

      await user.click(screen.getByText("Dialog Content"));

      expect(onDialogCloseMock).not.toHaveBeenCalled();
    });

    it("does not call onDialogClose when closed", async () => {
      const user = userEvent.setup();

      const { onDialogCloseMock } = renderDialogBase({
        dialogOpen: false,
      });

      await user.click(document.body);

      expect(onDialogCloseMock).not.toHaveBeenCalled();
    });
  });
});
