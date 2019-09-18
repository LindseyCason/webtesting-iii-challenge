// Test away!


// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is op

//these tests were done in dashboard.




import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";

describe("<Controls />", () => {
  it("renders successfully", () => {
    render(<Controls />);
  });
});