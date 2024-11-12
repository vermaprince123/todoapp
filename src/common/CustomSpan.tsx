import React from 'react';

interface CustomSpanProps {
  className?: string;
  onClick?: () => void;
  text: string;
}
const CustomSpan = ({ className = '', onClick, text }: CustomSpanProps) => {
  return (
    <span className={className} onClick={onClick}>
      {text}
    </span>
  );
};

export default CustomSpan;
