import React from 'react';
import Select from '../Ui/Select/Select';

interface SelectPriorityProps {
  value: string;
  options: {};
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>)=> void;
}

const SelectPriority: React.FC<SelectPriorityProps> = ({ value, options, handleChange })=> {
  return (
    <Select
      value={value}
      options={options}
      handleChange={handleChange}
    />
  );
}

export default SelectPriority;
