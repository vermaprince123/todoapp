import React from 'react';
import './customErrorMessage.css';
interface Props {
  error: string;
}

/**
 * A functional component that displays a custom error message.
 *
 * @param {Props} props - The properties object.
 * @param {string} props.error - The error message to be displayed.
 * @returns {JSX.Element | null} A paragraph element with the error message,
 * or null if no error message is provided.
 */
const CustomErrorMessage = ({ error }: Props) => {
  if (!error) return null;
  return <p className="error-message">{error}</p>;
};

export default CustomErrorMessage;
