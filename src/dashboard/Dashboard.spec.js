import React from "react";
import { render, fireEvent } from "@testing-library/react";

//fire events are a virtual firing of the button
//render is...... what you want to render

import Dashboard from "./Dashboard";



describe("<Dashboard />", () => {
//WRAP YOUR TESTS INSIDE A DESCRIBE... 
  it("renders successfully", () => {
    render(<Dashboard />);
  });
//IT TELLS YOU ABOUT THE SPECIFIC TEST AND PASSES IN A CB FUNC WHICH IS WHERE YOU PUT YOUR SPECIFICS FOR YOUR TEST.
  it("gate opens and closes successfully when unlocked", () => {
    const { getByText } = render(<Dashboard />); //GET BY TEXT OR WHATEVER METHOD DESTRUCTURED AND ALWAYS RENDER THE COMPONENT YOU'RE TESTING
    const gate = getByText(/Close/);//GET BY TEXT SET TO VAR TO BE USED IN FIREEVENT
    const open = getByText(/Open/);
    fireEvent.click(gate);
    fireEvent.click(open);
    // getByText(/Open/);
  });

  it("gate locks successfully", () => {
    const { getByText } = render(<Dashboard />);
    const lock = getByText(/Lock/); //HERE WE ARE SETTING GET BY TEST LOCK TO A VARIABLE LOCK SO WE CAN USE IT LATER.
    const gate = getByText(/Close/);
    fireEvent.click(gate);
    fireEvent.click(lock);//HERE WE ARE APPLYING A FIRE EVENT AND ALSO CHECKING FOR GETBYTEXT WITH LOCK VARIABLE ABOVE.
    getByText(/Locked/);//fire events are a virtual firing of a button.
    getByText(/Closed/);
  });

  it("gate locks and unlocks successfully", () => {
    const { getByText } = render(<Dashboard />);
    const lock = getByText(/Lock/);
    const gate = getByText(/Close/);
    fireEvent.click(gate);
    fireEvent.click(lock);
    fireEvent.click(lock);
    getByText(/Unlocked/);
    getByText(/Closed/);
  });

  it("locks only when gate is closed, opens only when unlocked", () => {
    const { getByText } = render(<Dashboard />);
    const lock = getByText(/Lock/);
    const gate = getByText(/Close/);
    fireEvent.click(lock);
    fireEvent.click(gate);
    fireEvent.click(lock);
    fireEvent.click(gate);
    getByText(/Locked/);
    getByText(/Closed/);
  });


});