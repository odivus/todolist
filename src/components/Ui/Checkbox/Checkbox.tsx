import React from 'react';

const Checkbox: React.FC = () => {
  return (
    <label>
      <input type='checkbox' name='checkbox' style={{ cursor: 'pointer' }} />
    </label>
  );
}

export default Checkbox;
