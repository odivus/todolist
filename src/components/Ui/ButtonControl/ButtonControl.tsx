import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
}

export const StyledButton = styled.button`
  border-width: 2px;
  border-style: solid;
  border-color: #238CFF;
  background-color: #238CFF;
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  margin-left: 4px;
  outline: none;
  cursor: pointer;
`;

const ButtonControl: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
    >
      Применить
    </StyledButton>
  );
}

export default ButtonControl;
