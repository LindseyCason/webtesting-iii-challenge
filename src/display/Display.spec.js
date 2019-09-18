// Test away!
// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise

//these tests were done in dashboard per Brandon at After Hours.

import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

describe("<Display />", () => {
  it("renders successfully", () => {
    render(<Display />);
  });
});

