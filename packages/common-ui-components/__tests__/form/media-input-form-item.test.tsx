import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import MediaInputFormItem from "@sellify/common-ui-components/form/MediaInputFormItem";

type MediaInputFormItemProps = ComponentProps<typeof MediaInputFormItem>;

describe("MediaInputFormItem", () => {
  const defaultProps = {
    label: "Media",
    images: [],
    onImagesChanged: jest.fn(),
  } satisfies MediaInputFormItemProps;

  const renderFormItem = (props: Partial<MediaInputFormItemProps> = {}) => {
    const resolvedProps = {
      ...defaultProps,
      onImagesChanged: jest.fn(),
      ...props,
    };
    const renderResult = render(<MediaInputFormItem {...resolvedProps} />);

    return {
      ...renderResult,
      fileInput: renderResult.container.querySelector(
        'input[type="file"]',
      ) as HTMLInputElement,
      onImagesChangedMock: resolvedProps.onImagesChanged,
    };
  };

  it("renders the label and media input", () => {
    const { fileInput } = renderFormItem();

    expect(screen.getByText("Media")).toBeVisible();
    expect(
      screen.getByText("Click to upload or drag and drop JPG, GPEG up to 3MB"),
    ).toBeVisible();
    expect(fileInput).toHaveAttribute("accept", "image/jpeg");
    expect(fileInput).toHaveAttribute("multiple");
  });

  it("marks the label as required", () => {
    const { rerender } = renderFormItem();
    const optionalStyle = screen.getByText("Media").className;

    rerender(<MediaInputFormItem {...defaultProps} required />);
    const requiredStyle = screen.getByText("Media").className;

    expect(optionalStyle).not.toBe(requiredStyle);
  });

  it("forwards uploaded images", async () => {
    const user = userEvent.setup();
    const { fileInput, onImagesChangedMock } = renderFormItem();
    const image = new File(["image"], "product.jpg", { type: "image/jpeg" });

    await user.upload(fileInput, image);

    expect(onImagesChangedMock).toHaveBeenCalledWith([image]);
  });
});
