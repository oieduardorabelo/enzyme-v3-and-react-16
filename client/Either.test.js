import React from "react";
import { render } from "enzyme";

import Either from "./Either";

it("renders correctly Right", () => {
  const test = render(<Either when={true} right={<span>Right</span>} />);
  expect(test).toMatchSnapshot();
});

it("renders correctly Left", () => {
  const test = render(<Either when={false} left={<span>Right</span>} />);
  expect(test).toMatchSnapshot();
});
