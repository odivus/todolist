import React, { useState } from 'react';
import SelectPriority from '../SelectPriority/SelectPriority';
import Select from '../Ui/Select/Select'

const SelectFilter: React.FC = () => {
  const [priority, setPriority] = useState<'all'|'low' | 'medium' | 'high'>('all')
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'all'|'low' | 'medium' | 'high');
  }

  const options = {
    all: 'Все',
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
