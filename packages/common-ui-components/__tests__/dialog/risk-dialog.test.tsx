import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import RiskDialog from "@sellify/common-ui-components/dialog/RiskDialog";

type RiskDialogProps = ComponentProps<typeof RiskDialog>;

const getPasswordInput = () =>
  screen.getByPlaceholderText("Enter your password");

const getButton = (name: string) => screen.getByRole("button", { name });

describe("RiskDialog", () => {
  const renderRiskDialog = (props: Partial<RiskDialogProps> = {}) => {
    const onDialogCloseMock = props.onDialogClose ?? jest.fn();
    const validatePasswordMock = props.validatePassword ?? jest.fn(() => true);
    const onValidationSuccessMock = props.onValidationSuccess ?? jest.fn();

    const renderResult = render(
      <RiskDialog
        title={props.title ?? "Delete Account"}
        description={props.description ?? "This action cannot be undone."}
        dialogOpen={props.dialogOpen ?? true}
        confirmButtonLabel={props.confirmButtonLabel ?? "Delete"}
        onDialogClose={onDialogCloseMock}
        validatePassword={validatePasswordMock}
        onValidationSuccess={onValidationSuccessMock}
        {...props}
      />,
    );

    return {
      ...renderResult,
      onDialogCloseMock,
      validatePasswordMock,
      onValidationSuccessMock,
    };
  };

  describe("rendering", () => {
    it("renders the title", () => {
      renderRiskDialog({
        title: "Archive workspace",
      });

      expect(
        screen.getByRole("heading", { name: "Archive workspace" }),
      ).toBeVisible();
    });

    it("renders the description", () => {
      renderRiskDialog({
        description: "This change affects all collaborators.",
      });

      expect(
        screen.getByText("This change affects all collaborators."),
      ).toBeVisible();
    });

    it("renders the password input", () => {
      renderRiskDialog();

      expect(screen.getByText("Password")).toBeVisible();
      expect(getPasswordInput()).toHaveAttribute("type", "password");
      expect(getPasswordInput()).toBeRequired();
    });

    it("renders the action buttons", () => {
      renderRiskDialog({
        confirmButtonLabel: "Archive",
      });

      expect(getButton("Go Back")).toBeVisible();
      expect(getButton("Archive")).toBeVisible();
    });

    it("renders the alert icon", () => {
      const { container } = renderRiskDialog();

      expect(container.querySelector("svg")).toBeVisible();
    });

    it("does not render when closed", () => {
      const { container } = renderRiskDialog({
        dialogOpen: false,
      });

      expect(container.firstElementChild).not.toBeInTheDocument();
    });
  });

  describe("button state", () => {
    it("disables the confirm button by default", () => {
      renderRiskDialog({
        confirmButtonLabel: "Confirm",
      });

      expect(getButton("Confirm")).toBeDisabled();
    });

    it("enables the confirm button after password entry", async () => {
      const user = userEvent.setup();
      renderRiskDialog();

      await user.type(getPasswordInput(), "secret");

      expect(getButton("Delete")).toBeEnabled();
    });
  });

  describe("password validation", () => {
    it("passes the entered password to validatePassword", async () => {
      const user = userEvent.setup();
      const { validatePasswordMock } = renderRiskDialog();

      await user.type(getPasswordInput(), "secret");
      await user.click(getButton("Delete"));

      expect(validatePasswordMock).toHaveBeenCalledTimes(1);
      expect(validatePasswordMock).toHaveBeenCalledWith("secret");
    });

    it("calls onValidationSuccess after successful validation", async () => {
      const user = userEvent.setup();
      const validatePasswordMock = jest.fn(() => true);

      const { onValidationSuccessMock } = renderRiskDialog({
        validatePassword: validatePasswordMock,
      });

      await user.type(getPasswordInput(), "secret");
      await user.click(getButton("Delete"));

      expect(validatePasswordMock).toHaveBeenCalledTimes(1);
      expect(validatePasswordMock).toHaveBeenCalledWith("secret");
      expect(onValidationSuccessMock).toHaveBeenCalledTimes(1);
    });

    it("does not proceed after failed validation", async () => {
      const user = userEvent.setup();
      const validatePasswordMock = jest.fn(() => false);

      const { onValidationSuccessMock } = renderRiskDialog({
        validatePassword: validatePasswordMock,
      });

      await user.type(getPasswordInput(), "wrong");
      await user.click(getButton("Delete"));

      expect(validatePasswordMock).toHaveBeenCalledWith("wrong");
      expect(onValidationSuccessMock).not.toHaveBeenCalled();
    });
  });

  describe("closing", () => {
    it("closes when Go Back is clicked", async () => {
      const user = userEvent.setup();
      const { onDialogCloseMock } = renderRiskDialog();

      await user.click(getButton("Go Back"));

      expect(onDialogCloseMock).toHaveBeenCalledTimes(1);
    });

    it("closes on outside click", async () => {
      const user = userEvent.setup();
      const { onDialogCloseMock } = renderRiskDialog();

      await user.click(document.body);

      expect(onDialogCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
