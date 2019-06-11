import React from "react";
import { render } from "../../test-utils";
import { toHaveTextContent } from "jest-dom/extend-expect";
import Foo from "./foo";

it("Renders and has text content", () => {
  const { getByText } = render(<Foo />);
  const content = getByText("Foo page");
});
