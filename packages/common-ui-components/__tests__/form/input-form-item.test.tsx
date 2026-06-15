import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import InputFormItem from "@sellify/common-ui-components/form/InputFormItem";

type InputFormItemProps = ComponentProps<typeof InputFormItem>;

describe("InputFormItem", () => {
  const defaultProps = {
    label: "Email",
    onChange: jest.fn(),
  } satisfies InputFormItemProps;

  const renderFormItem = (props: Partial<InputFormItemProps> = {}) => {
    const resolvedProps = {
      ...defaultProps,
      onChange: jest.fn(),
      ...props,
    };
    const renderResult = render(<InputFormItem {...resolvedProps} />);

    return {
      ...renderResult,
      input: screen.getByRole("textbox") as HTMLInputElement,
      onChangeMock: resolvedProps.onChange,
    };
  };

  it("renders the label and forwards input props", () => {
    const { input } = renderFormItem({
      value: "admin@sellify.dev",
      placeholder: "Email address",
      type: "email",
    });

    expect(screen.getByText("Email")).toBeVisible();
    expect(input).toHaveValue("admin@sellify.dev");
    expect(input).toHaveAttribute("placeholder", "Email address");
    expect(input).toHaveAttribute("type", "email");
  });

  it("propagates required to the label and input", () => {
    const { input, rerender } = renderFormItem();
    const optionalStyle = screen.getByText("Email").className;

    rerender(<InputFormItem {...defaultProps} required />);
    const requiredStyle = screen.getByText("Email").className;

    expect(input).toBeRequired();
    expect(optionalStyle).not.toBe(requiredStyle);
  });

  it("forwards input changes", async () => {
    const user = userEvent.setup();
    const { input, onChangeMock } = renderFormItem();

    await user.type(input, "a");

    expect(onChangeMock).toHaveBeenCalledWith("a");
  });
});
