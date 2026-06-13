import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps, ReactElement } from "react";

import { ImageCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ImageCellBuilder";

type ImageCellBuilderProps = ComponentProps<typeof ImageCellBuilder.buildView>;

describe("ImageCellBuilder", () => {
  const src = "/images/mock-image.jpg";
  const defaultProps = {
    src,
  } satisfies ImageCellBuilderProps;

  const renderImageCell = (props: Partial<ImageCellBuilderProps> = {}) =>
    render(<>{ImageCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  const rerenderImageCell = (
    rerender: (ui: ReactElement) => void,
    props: Partial<ImageCellBuilderProps> = {},
  ) => {
    rerender(<>{ImageCellBuilder.buildView({ ...defaultProps, ...props })}</>);
  };

  it("renders an accessible product preview from the supplied source", () => {
    renderImageCell();

    expect(
      screen.getByRole("img", { name: "Product preview image" }),
    ).toHaveAttribute("src", src);
  });

  describe("size styling", () => {
    it("renders different styles for default and large sizes", () => {
      const { container, rerender } = renderImageCell({ size: "default" });

      const defaultStyle = container.firstElementChild?.className;
      rerenderImageCell(rerender, { size: "large" });

      const largeStyle = container.firstElementChild?.className;
      expect(defaultStyle).not.toBe(largeStyle);
    });

    it("uses the same style when size is omitted or set to default", () => {
      const { container, rerender } = renderImageCell();

      const implicitDefaultStyle = container.firstElementChild?.className;
      rerenderImageCell(rerender, { size: "default" });

      const explicitDefaultStyle = container.firstElementChild?.className;
      expect(implicitDefaultStyle).toBe(explicitDefaultStyle);
    });
  });
});
