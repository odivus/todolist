import React, { useState } from 'react';
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

const InputText: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e. target.value);
  };

  return (
    <StyledInput
      type='text'
      id='name'
      name='name'
      value={value}
      onChange={handleChange}
    />
  );
}

export default InputText;
