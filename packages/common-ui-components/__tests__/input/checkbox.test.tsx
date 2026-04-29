import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Checkbox from "@sellify/common-ui-components/input/Checkbox";

type CheckboxProps = ComponentProps<typeof Checkbox>;

describe("Checkbox", () => {
  const getCheckbox = () => screen.getByRole("checkbox") as HTMLInputElement;

  const renderCheckbox = (props: Partial<CheckboxProps> = {}) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const value = props.value ?? "value-1";

    const renderResult = render(
      <Checkbox
        checked={false}
        value={value}
        onChange={onChangeMock}
        {...props}
      />,
    );

    return {
      ...renderResult,
      onChangeMock,
    };
  };

  const rerenderCheckbox = (
    rerender: (ui: ReactElement) => void,
    props: Partial<CheckboxProps> = {},
  ) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const value = props.value ?? "value-1";

    rerender(
      <Checkbox
        checked={false}
        value={value}
        onChange={onChangeMock}
        {...props}
      />,
    );
  };

  describe("rendering", () => {
    it("renders visible checkbox with provided value", () => {
      const { container } = renderCheckbox({ value: "standard" });
      const checkbox = getCheckbox();

      expect(checkbox).toBeVisible();
      expect(checkbox).toHaveAttribute("type", "checkbox");
      expect(checkbox).toHaveAttribute("id", "checkbox-standard");
      expect(checkbox).toHaveAttribute("value", "standard");
      expect(container.querySelector("svg")).toBeVisible();
    });
  });

  describe("checked state", () => {
    it("renders as unchecked by default", () => {
      renderCheckbox();

      expect(getCheckbox()).not.toBeChecked();
    });

    it("renders as checked when checked is true", () => {
      renderCheckbox({
        checked: true,
      });

      expect(getCheckbox()).toBeChecked();
    });

    it("renders as unchecked when checked is false", () => {
      renderCheckbox({
        checked: false,
      });

      expect(getCheckbox()).not.toBeChecked();
    });

    it("updates checked state when rerendered", () => {
      const { rerender } = renderCheckbox({
        checked: false,
      });
      const checkbox = getCheckbox();

      expect(checkbox).not.toBeChecked();

      rerenderCheckbox(rerender, { checked: true });

      expect(checkbox).toBeChecked();
    });
  });

  describe("readOnly state", () => {
    it("leaves checkbox writable by default", () => {
      renderCheckbox();

      expect(getCheckbox()).not.toHaveAttribute("readOnly");
    });

    it("marks checkbox as readOnly when readOnly is true", () => {
      renderCheckbox({
        readOnly: true,
      });

      expect(getCheckbox()).toHaveAttribute("readOnly");
    });
  });

  describe("disabled state", () => {
    it("is enabled by default", () => {
      renderCheckbox();

      expect(getCheckbox()).toBeEnabled();
    });

    it("disables checkbox when disabled is true", () => {
      renderCheckbox({
        disabled: true,
      });

      expect(getCheckbox()).toBeDisabled();
    });
  });

  describe("change handling", () => {
    it("calls onChange with true when checked", async () => {
      const user = userEvent.setup();
      const { onChangeMock } = renderCheckbox({
        value: "standard",
      });
      const checkbox = getCheckbox();

      await user.click(checkbox);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(true, "standard");
    });

    it("calls onChange with false when unchecked", async () => {
      const user = userEvent.setup();
      const { onChangeMock } = renderCheckbox({
        checked: true,
        value: "standard",
      });
      const checkbox = getCheckbox();

      await user.click(checkbox);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(false, "standard");
    });

    it("does not call onChange when checkbox is disabled", async () => {
      const user = userEvent.setup();
      const { onChangeMock } = renderCheckbox({
        disabled: true,
      });
      const checkbox = getCheckbox();

      await user.click(checkbox);

      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });
});
