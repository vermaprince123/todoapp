import React from 'react';

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

/**
 * CustomButton component renders a button element with customizable text,
 * click handler, CSS class, and disabled state.
 *
 * @param {CustomButtonProps} props - The props for the CustomButton component.
 * @param {string} props.text - The text to display inside the button.
 * @param {() => void} [props.onClick] - Optional click event handler for the button.
 * @param {string} [props.className] - Optional CSS class name to apply to the button.
 * @param {boolean} [props.disabled] - Optional flag to disable the button.
 *
 * @returns {JSX.Element} A button element with the provided properties.
 */
const CustomButton = ({
  onClick,
  text,
  className,
  disabled,
}: CustomButtonProps) => {
  /**
   * Returns a button element with the provided properties.
   *
   * @returns {JSX.Element} A button element with the provided properties.
   */
  const Button = () => {
    return (
      <button onClick={onClick} className={className} disabled={disabled}>
        {text}
      </button>
    );
  };

  return <Button />;
};

export default CustomButton;
