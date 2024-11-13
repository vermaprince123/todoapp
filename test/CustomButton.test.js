import { render, fireEvent, screen } from '@testing-library/react';
import CustomButton from '../src/common/CustomButton';

describe('CustomButton', () => {
  it('renders button with provided text', () => {
    const text = 'Click me';
    render(<CustomButton text={text} onClick={() => {}} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <CustomButton text="Test" onClick={handleClick} />
    );
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-button-class';
    const { container } = render(
      <CustomButton text="Test" onClick={() => {}} className={customClass} />
    );
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('disables button when disabled prop is true', () => {
    const { getByRole } = render(
      <CustomButton text="Test" onClick={() => {}} disabled={true} />
    );
    expect(getByRole('button')).toBeDisabled();
  });

  it('enables button when disabled prop is false', () => {
    const { getByRole } = render(
      <CustomButton text="Test" onClick={() => {}} disabled={false} />
    );
    expect(getByRole('button')).toBeEnabled();
  });

  it('renders button with empty text when text prop is empty', () => {
    const { getByRole } = render(<CustomButton text="" onClick={() => {}} />);
    expect(getByRole('button')).toHaveTextContent('');
  });
});
