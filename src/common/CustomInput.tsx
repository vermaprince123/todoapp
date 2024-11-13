import React, { ChangeEvent, KeyboardEvent } from 'react';

interface Props {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * A custom input component that wraps the built-in
 * `input` element.
 *
 * @param {string} [type=text] - The type of the input.
 * @param {string} value - The current value of the input.
 * @param {string} [placeholder] - The placeholder text for the input.
 * @param {(e: ChangeEvent<HTMLInputElement>) => void} onChange - The callback
 *   to be called when the input value changes.
 * @param {(e: KeyboardEvent<HTMLInputElement>) => void} [onKeyDown] - The
 *   callback to be called when a key is pressed while the input is focused.
 * @returns {JSX.Element} - The rendered input element.
 */
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
