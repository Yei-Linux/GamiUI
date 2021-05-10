import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest";
import "babel-polyfill";

import { TextFieldInput } from "../../../../stories/atoms/Input.stories";

describe("Text Field Input Test", () => {
  test("Verify is input element", () => {
    render(<TextFieldInput {...TextFieldInput.args} />);
    const textField = screen.getByRole("textfield");

    expect(textField).toBeInTheDocument();
  });

  test("Render Correct Placedholder Text", () => {
    render(<TextFieldInput {...TextFieldInput.args} />);
    screen.getByRole("textfield");
    expect(screen.getByPlaceholderText("Escribe tus nombres")).toBeInTheDocument();
  });
});
