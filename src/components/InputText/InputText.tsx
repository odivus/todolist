import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 1.6rem;
  border: 2px solid #c8c8c8;
  font-size: 1.1rem;
  border-radius: 4px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  outline: none;
  &:focus {
    border-color: #238CFF;
  }
`;

interface InputTextProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ value, handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StyledInput
      ref={inputRef}
      type='text'
      id='name'
      name='name'
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputText;
