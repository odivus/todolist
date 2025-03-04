import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Select from '../Ui/Select/Select'
import styled from 'styled-components'
import { sortByDate } from '../../redux/todoSlice'

const SelectSort: React.FC = () => {
  const [date, setDate] = useState<'new' | 'old'>('old');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dateType = {
      date: date,
    }
    setDate(e.target.value as 'new' | 'old');
    dispatch(sortByDate(dateType));
  }

  const options = {
    old: 'Сначала старые',
    new: 'Сначала новые',
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
