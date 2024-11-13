import React from 'react';

interface CustomSpanProps {
  className?: string;
  onClick?: () => void;
  text: string;
}
/**
 * CustomSpan is a component that renders a span element with a customizable
 * class name, optional click handler, and text.
 *
 * @param {CustomSpanProps} props - The props for the CustomSpan component.
 * @param {string} [props.className=""] - The optional CSS class name to apply to the span element.
 * @param {() => void} [props.onClick] - The optional click event handler for the span element.
 * @param {string} props.text - The text to render inside the span element.
 *
 * @returns {JSX.Element} A span element with the provided properties.
 */
const CustomSpan = ({ className = '', onClick, text }: CustomSpanProps) => {
  return (
    <span className={className} onClick={onClick}>
      {text}
    </span>
  );
};

export default CustomSpan;
