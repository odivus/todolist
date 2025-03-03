import React from 'react';

interface CheckboxProps {
  completed: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ completed, onChange }) => {
  return (
    <label>
      <input
        type='checkbox'
        name='checkbox'
        style={{ cursor: 'pointer' }}
        checked={completed}
        onChange={onChange}
      />
    </label>
  )
}

export default Checkbox;
