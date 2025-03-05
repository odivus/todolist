import React from 'react';
import Select from '../Ui/Select/Select';

interface SelectPriorityProps {
  value: string;
  options: {};
  isDefaultValue: boolean;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>)=> void;
}

const SelectPriority: React.FC<SelectPriorityProps> = ({ value, isDefaultValue, options, handleChange })=> {
  return (
    <Select
      isDefaultValue={isDefaultValue}
      value={value}
      options={options}
      handleChange={handleChange}
    />
  );
}

export default SelectPriority;
