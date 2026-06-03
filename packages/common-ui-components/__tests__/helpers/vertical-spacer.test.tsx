import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import VerticalSpacer from "@sellify/common-ui-components/helpers/VerticalSpacer";

describe("VerticalSpacer", () => {
  const renderVerticalSpacer = () => render(<VerticalSpacer />);

  describe("rendering", () => {
    it("renders an empty spacer element", () => {
      const { container } = renderVerticalSpacer();
      const spacer = container.firstElementChild as HTMLDivElement;

      expect(spacer).toBeInTheDocument();
      expect(spacer).toBeEmptyDOMElement();
    });
  });
});
