import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Radio from "@sellify/common-ui-components/input/Radio";

type RadioProps = ComponentProps<typeof Radio>;

describe("Radio", () => {
  const getRadio = () => screen.getByRole("radio") as HTMLInputElement;

  const renderRadio = (props: Partial<RadioProps> = {}) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const value = props.value ?? "value-1";

    const renderResult = render(
      <Radio value={value} onChange={onChangeMock} {...props} />,
    );

    return {
      ...renderResult,
      onChangeMock,
    };
  };

  const rerenderRadio = (
    rerender: (ui: ReactElement) => void,
    props: Partial<RadioProps> = {},
  ) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const value = props.value ?? "standard";

    rerender(<Radio value={value} onChange={onChangeMock} {...props} />);
  };

  describe("rendering", () => {
    it("renders visible radio with provided value", () => {
      renderRadio({ value: "standard" });
      const radio = getRadio();

      expect(radio).toBeVisible();
      expect(radio).toHaveAttribute("type", "radio");
      expect(radio).toHaveAttribute("id", "radio-standard");
      expect(radio).toHaveAttribute("value", "standard");
    });
  });

  describe("checked state", () => {
    it("renders as unchecked by default", () => {
      renderRadio();

      expect(getRadio()).not.toBeChecked();
    });

    it("renders as checked when checked is true", () => {
      renderRadio({
        checked: true,
      });

      expect(getRadio()).toBeChecked();
    });

    it("updates checked state when rerendered", () => {
      const { rerender } = renderRadio({
        checked: false,
        value: "standard",
      });
      const radio = getRadio();

      expect(radio).not.toBeChecked();

      rerenderRadio(rerender, { checked: true, value: "standard" });

      expect(radio).toBeChecked();
    });
  });

  describe("readOnly state", () => {
    it("leaves radio writable by default", () => {
      renderRadio();

      expect(getRadio()).not.toHaveAttribute("readOnly");
    });

    it("marks radio as readOnly when readOnly is true", () => {
      renderRadio({
        readOnly: true,
      });

      expect(getRadio()).toHaveAttribute("readOnly");
    });
  });

  describe("disabled state", () => {
    it("is enabled by default", () => {
      renderRadio();

      expect(getRadio()).toBeEnabled();
    });

    it("disables radio when disabled is true", () => {
      renderRadio({
        disabled: true,
      });

      expect(getRadio()).toBeDisabled();
    });
  });

  describe("change handling", () => {
    it("calls onChange with checked state and value when clicked", async () => {
      const user = userEvent.setup();
      const { onChangeMock } = renderRadio({
        value: "standard",
      });
      const radio = getRadio();

      await user.click(radio);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(true, "standard");
    });

    it("does not call onChange when radio is disabled", async () => {
      const user = userEvent.setup();
      const { onChangeMock } = renderRadio({
        disabled: true,
      });
      const radio = getRadio();

      await user.click(radio);

      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });
});
