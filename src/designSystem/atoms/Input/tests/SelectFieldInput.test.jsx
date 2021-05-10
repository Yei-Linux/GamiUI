import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import "jest";
import "babel-polyfill"

import { SelectFieldInput } from "../../../../stories/atoms/Input.stories";

describe("Select Field Input Test", () => {
    test("Verify is input element", () => {
      render(<SelectFieldInput {...SelectFieldInput.args} />);
      const selectField = screen.getByRole("selectfield");

      expect(selectField).toBeInTheDocument();
    });

    test("Render Correct Placedholder Text", () => {
      render(<SelectFieldInput {...SelectFieldInput.args} />);
      screen.getByRole("selectfield");
      expect(screen.getByPlaceholderText("Selecciona una Opcion")).toBeInTheDocument();
    });

    test("Verifying items length in options", () => {
        render(<SelectFieldInput {...SelectFieldInput.args} />);
        const select = screen.getByRole("selectfield");
        const options = select.children
        expect(options).toHaveLength(2);
    });
});