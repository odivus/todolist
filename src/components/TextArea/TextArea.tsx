import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border: 2px solid #c8c8c8;
  resize: none;
  font-size: 1.1rem;
  border-radius: 4px;
  transition: 0.2s;
  outline: none;
  &:focus {
    border-color: #238CFF;
  }
`;

interface TextAreaProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, handleChange }) => {
  return (
    <StyledTextArea
      id='description'
      name='description'
      value={value}
      maxLength={50}
      onChange={handleChange}
    />
  );
}

export default TextArea;
