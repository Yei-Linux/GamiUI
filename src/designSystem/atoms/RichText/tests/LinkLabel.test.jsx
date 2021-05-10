import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import "jest";
import "babel-polyfill"

import { LinkLabel } from '../../../../stories/atoms/Label.stories';

describe('Link Label Test', () => {
  test('Render Correct Label Text', () => {
    render(<LinkLabel {...LinkLabel.args} />);
    screen.getByRole('label');
    expect(screen.getByText('Olvidé mi contraseña')).toBeInTheDocument();
  });

  test('Verify if a href attribute is not in component', () => {
    render(<LinkLabel {...LinkLabel.args} />);
    const linkLabel = screen.getByRole('label');

    expect(linkLabel).toHaveAttribute('href');
  });

  test('Render Correct Link Text', () => {
    render(<LinkLabel {...LinkLabel.args} />);
    const linkLabel = screen.getByRole('label');

    expect(linkLabel).toHaveAttribute('href','/change-password');
  });
});