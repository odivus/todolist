import React from 'react';

interface CheckboxProps {
  completed: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ completed }) => {
  const checkedAtr = completed ? 'checked' : '';
  return (
    <label>
      <input
        type="checkbox"
        name="checkbox"
        style={{ cursor: 'pointer' }} />
        {checkedAtr}
    </label>
  )
}

export default Checkbox;
