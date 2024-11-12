import React from 'react';

interface CustomButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
}

const CustomButton = ({
  onClick,
  text,
  className,
  disabled,
}: CustomButtonProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default CustomButton;
