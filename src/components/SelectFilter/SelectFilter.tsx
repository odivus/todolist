import React, { useState } from 'react';
import SelectPriority from '../SelectPriority/SelectPriority';
import Select from '../Ui/Select/Select'

const SelectFilter: React.FC = () => {
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
    <div>
      <h5>Фильтровать</h5>
      <h6>По&nbsp;приоритету:</h6>
      <Select
        value={priority}
        options={options}
        handleChange={handleChange}
      />
    </div>
  );
}

export default SelectFilter;
