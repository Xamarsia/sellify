import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import TextareaFormItem from "@sellify/common-ui-components/form/TextareaFormItem";

type TextareaFormItemProps = ComponentProps<typeof TextareaFormItem>;

describe("TextareaFormItem", () => {
  const defaultProps = {
    label: "Description",
    onChange: jest.fn(),
  } satisfies TextareaFormItemProps;

  const renderFormItem = (props: Partial<TextareaFormItemProps> = {}) => {
    const resolvedProps = {
      ...defaultProps,
      onChange: jest.fn(),
      ...props,
    };
    const renderResult = render(<TextareaFormItem {...resolvedProps} />);

    return {
      ...renderResult,
      textarea: screen.getByRole("textbox") as HTMLTextAreaElement,
      onChangeMock: resolvedProps.onChange,
    };
  };

  it("renders the label and forwards textarea props", () => {
    const { textarea } = renderFormItem({
      value: "Product description",
      placeholder: "Description",
      maxLength: 120,
    });

    expect(screen.getByText("Description")).toBeVisible();
    expect(textarea).toHaveValue("Product description");
    expect(textarea).toHaveAttribute("placeholder", "Description");
    expect(textarea).toHaveAttribute("maxLength", "120");
  });

  it("propagates required to the label and textarea", () => {
    const { textarea, rerender } = renderFormItem();
    const optionalStyle = screen.getByText("Description").className;

    rerender(<TextareaFormItem {...defaultProps} required />);
    const requiredStyle = screen.getByText("Description").className;

    expect(textarea).toBeRequired();
    expect(optionalStyle).not.toBe(requiredStyle);
  });

  it("forwards textarea changes", async () => {
    const user = userEvent.setup();
    const { textarea, onChangeMock } = renderFormItem();

    await user.type(textarea, "a");

    expect(onChangeMock).toHaveBeenCalledWith("a");
  });
});
