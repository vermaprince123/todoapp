import React, { useState } from 'react';

import ShimmerBox from './ShimmerBox';

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
  const [loading, setLoading] = useState(true);

  setTimeout(()=> {
    setLoading(false);
  }, 5000);

  const ShimmerLoader = () => {
    return (
      <div className={`${className} padding-0`}>
        <ShimmerBox />
      </div>
    );
  }

  const Button = () => {
    return (
      <button onClick={onClick} className={className} disabled={disabled}>
        {text}
      </button>
    )
  }

  return loading ? <ShimmerLoader /> : <Button />
};

export default CustomButton;
