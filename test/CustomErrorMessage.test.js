import { render, screen } from '@testing-library/react';
import CustomErrorMessage from '../src/common/CustomErrorMessage';

describe('CustomErrorMessage', () => {
  it('renders error message correctly', () => {
    const error = 'Test error message';
    render(<CustomErrorMessage error={error} />);

    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement.tagName).toBe('P');
    expect(errorElement).toHaveClass('error-message');
  });

  it('handles empty error message', () => {
    const { container } = render(<CustomErrorMessage error="" />);
    expect(container.firstChild).toBeNull();
  });

  it('handles long error messages', () => {
    const longError = 'A'.repeat(100);
    render(<CustomErrorMessage error={longError} />);

    const errorElement = screen.getByText(longError);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('error-message');
  });
});
