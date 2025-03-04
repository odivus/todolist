import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: 2px solid #c8c8c8;
  border-radius: 4px;
  padding: 4px 8px;
  outline: none;
  &:focus {
    border-color: #238CFF;
  }
`;

interface SelectProps {
  value: string;
  options: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ value, options, handleChange }) => {
  const optionsKeys = Object.keys(options);
  if (optionsKeys.length === 0) {
    return null;
  }

  return (
    <StyledSelect
      value={value}
      // defaultValue={value}
      size={1}
      onChange={handleChange}
    >
      {
        optionsKeys.map((item, idx) => {
          return (
            <option
              key={item}
              value={item}
            >
              {options[item]}
            </option>
          )
        })
      }
    </StyledSelect>
  );
}

export default Select;
