import { render, fireEvent } from '@testing-library/react';
import MonthSelectComponent from './MonthSelectComponent';

describe('MonthSelectComponent Component', () => {
  it('should render options inside a MonthSelectComponent', () => {
    const { container } = render(<MonthSelectComponent />);
    const options = container.querySelectorAll('option');
    expect(options).toHaveLength(12);
  });

  it('Click MonthSelectComponent Component', () => {
    const onChange = jest.fn();
    const { container } = render(<MonthSelectComponent onChange={onChange} />);
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.change(container.querySelectorAll('.month-select-comp')[0], mEvent);
    expect(onChange).toBeCalledTimes(1);
  });
});
