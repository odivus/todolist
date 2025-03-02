import React, { useState } from 'react';
import Select from '../Ui/Select/Select'
import styled from 'styled-components'

const SelectSort: React.FC = () => {
  const [date, setDate] = useState<'new' | 'old'>('new')
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value as 'new' | 'old');
  }

  const options = {
    new: 'Сначала новые',
    old: 'Сначала старые',
  }

  const SelectSortWrap = styled.div`
    margin-right: 20px;
`;

  return (
    <SelectSortWrap>
      <h5>Сортировать</h5>
      <h6>По&nbsp;дате:</h6>
      <Select
        value={date}
        options={options}
        handleChange={handleChange}
      />
    </SelectSortWrap>
  );
}

export default SelectSort;
