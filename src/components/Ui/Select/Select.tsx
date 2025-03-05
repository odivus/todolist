import React from 'react';
import styled from 'styled-components';

interface StyledSelectProps {
  isdefaultvalue: string;
  value: string;
}

const StyledSelect = styled.select.attrs<StyledSelectProps>(props => {
  const { value, isdefaultvalue } = props;
  if (isdefaultvalue === 'true') {
    return {
      defaultValue: value,
    }
  }
})`
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
  isDefaultValue: boolean;
  handleChange: () => void;
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, isDefaultValue, value, handleChange } = props;
  const optionsKeys = Object.keys(options);

  if (optionsKeys.length === 0) {
    return null;
  }

  return (
    <StyledSelect
      isdefaultvalue={isDefaultValue ? 'true' : 'false'}
      value={value}
      size={1}
      onChange={handleChange}
    >
      {
        optionsKeys.map((item) => {
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
