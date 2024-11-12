import React, { ChangeEvent, KeyboardEvent } from 'react';

interface Props {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  type = 'text',
  value,
  placeholder,
  onChange,
  onKeyDown,
}: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default CustomInput;
