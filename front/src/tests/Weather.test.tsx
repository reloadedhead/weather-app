import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Weather from '../components/weather';

describe('Weather Component', () => {
  test('"Select City FAB" opens select city dialog', () => {
    render(<Weather />);
    const selectCityFab = screen.getByRole('button');
    userEvent.click(selectCityFab);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('City selection updates City Card Component', () => {
    render(<Weather />);
    const selectCityFab = screen.getByRole('button');
    userEvent.click(selectCityFab);
    const barcelonaButton = screen.getByRole('button', { name: /barcelona/ });
    userEvent.click(barcelonaButton);
    expect(screen.getByText(/barcelona/)).toBeInTheDocument();
  });
});
