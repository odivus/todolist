import React from 'react';
import { ButtonProps } from './interfaces';
import { StyledButton } from './StyledButton';

const Button: React.FC<ButtonProps> = ({ type, text, handleClick }) => {
  return (
    <StyledButton
      type={type}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
