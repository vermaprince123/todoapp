import React from 'react';
import './customErrorMessage.css';
interface Props {
  error: string;
}

const CustomErrorMessage = ({ error }: Props) => {
  return <p className="error-message">{error}</p>;
};

export default CustomErrorMessage;
