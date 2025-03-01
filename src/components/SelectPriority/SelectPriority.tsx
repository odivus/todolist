import React, { useState } from 'react';
import Select from '../Ui/Select/Select';

const SelectPriority: React.FC = () => {
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low')
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'low' | 'medium' | 'high');
  }

  const options = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий',
  }

  return (
    <Select
      value={priority}
      options={options}
      handleChange={handleChange}
    />
  );
}

export default SelectPriority;
