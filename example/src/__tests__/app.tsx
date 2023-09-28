import { render, screen } from '@testing-library/react';
import SlotCounter from 'react-slot-counter';

describe('app', () => {
  it('should run', () => {
    expect(true).toBe(true);
  });

  it('renders', () => {
    render(<SlotCounter startValue={321} value={123} />);
    expect(screen.getAllByText('1').length).toBeGreaterThanOrEqual(1);
  });
});

export {};
