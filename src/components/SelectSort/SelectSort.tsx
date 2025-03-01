import React, { useState } from 'react';
import Select from '../Ui/Select/Select'

const SelectSort: React.FC = () => {
  const [date, setDate] = useState<'new' | 'old'>('new')
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value as 'new' | 'old');
  }

  const options = {
    new: 'Сначала новые',
    old: 'Сначала старые',
  }

  return (
    <div>
      <h6>Сортировать <br /> по дате:</h6>
      <Select
        value={date}
        options={options}
        handleChange={handleChange}
      />
    </div>
  );
}

export default SelectSort;
