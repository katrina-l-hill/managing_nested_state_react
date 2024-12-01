import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import UserProfile from './UserProfile';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Normal test cases
describe('UserProfile Component', () => {
  test('updates street name', () => {
      render(<UserProfile />);
      const streetInput = screen.getByLabelText(/Street:/i);
      fireEvent.change(streetInput, { target: { value: '456 Elm Street' } });
      expect(screen.getByText(/456 Elm Street, Anytown, USA/i)).toBeInTheDocument();
  });

  test('updates city name', () => {
      render(<UserProfile />);
      const cityInput = screen.getByLabelText(/City:/i);
      fireEvent.change(cityInput, { target: { value: 'Newtown' } });
      expect(screen.getByText(/123 Main Street, Newtown, USA/i)).toBeInTheDocument();
  });

  test('updates country name', () => {
      render(<UserProfile />);
      const countryInput = screen.getByLabelText(/Country:/i);
      fireEvent.change(countryInput, { target: { value: 'Canada' } });
      expect(screen.getByText(/123 Main Street, Anytown, Canada/i)).toBeInTheDocument();
  });


  // Edge test cases
  test('handles empty street name', () => {
      render(<UserProfile />);
      const streetInput = screen.getByLabelText(/Street:/i);
      fireEvent.change(streetInput, { target: { value: '' } });
      expect(screen.getByText(/, Anytown, USA/i)).toBeInTheDocument();
  });

  test('handles special characters in city name', () => {
      render(<UserProfile />);
      const cityInput = screen.getByLabelText(/City:/i);
      fireEvent.change(cityInput, { target: { value: 'City@123' } });
      expect(screen.getByText(/123 Main Street, City@123, USA/i)).toBeInTheDocument();
  });

  test('handles long country name', () => {
      render(<UserProfile />);
      const countryInput = screen.getByLabelText(/Country:/i);
      fireEvent.change(countryInput, { target: { value: 'United States of America and Canada' } });
      expect(screen.getByText(/123 Main Street, Anytown, United States of America and Canada/i)).toBeInTheDocument();
  });
});