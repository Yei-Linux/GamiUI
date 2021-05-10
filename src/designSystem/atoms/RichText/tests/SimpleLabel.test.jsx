import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import "jest";
import "babel-polyfill"

import { SimpleLabel } from '../../../../stories/atoms/Label.stories';

describe('Simple Label Test', () => {
  test('Render Correct Label Text', () => {
    render(<SimpleLabel {...SimpleLabel.args} />);
    screen.getByRole('label');
    expect(screen.getByText('Elige un lenguaje de programación')).toBeInTheDocument();
  });

  test('Verify if a href attribute is not in component', () => {
    render(<SimpleLabel {...SimpleLabel.args} />);
    const simpleLabel = screen.getByRole('label');

    expect(simpleLabel).not.toHaveAttribute('href');
  });
});