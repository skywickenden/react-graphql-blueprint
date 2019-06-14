import React from "react";
import { render } from "../../test-utils";
import Main from "./main";

import { collect } from "linaria/server";
import fs from "fs";
import path from "path";
const css = fs.readFileSync(path.resolve("./.linaria-cache/src/layouts/main.linaria.css"), "utf8");

it("Renders and has text content", () => {
  const { getByText, asFragment } = render(<Main />);

  // Only need to test elements with styles attached
  // All HTML is tested by the snapshot
  const titleContent = getByText("React GraphQL Blueprint");

  const { critical, other } = collect(titleContent, css);
  expect(critical).toEqual(expect.stringContaining("color:#872258;"));
  expect(critical).toEqual(expect.stringContaining("font-size:30px;"));

  expect(asFragment()).toMatchSnapshot();
});