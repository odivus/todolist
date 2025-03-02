import React, { useState } from 'react';
import Select from '../Ui/Select/Select';

const SelectPriority: React.FC = () => {
  const [priority, setPriority] = useState<'any'|'low' | 'medium' | 'high'>('any')
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'any'|'low' | 'medium' | 'high');
  }

  const options = {
    any: 'Любой',
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
