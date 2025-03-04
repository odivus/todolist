import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Select from '../Ui/Select/Select'
import ButtonControl from '../Ui/ButtonControl/ButtonControl'
import { sortByDate } from '../../redux/todoSlice'
import styled from 'styled-components'

const SelectSort: React.FC = () => {
  const [date, setDate] = useState<'new' | 'old'>('old');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value as 'new' | 'old');
  }

  const handleSubmit = () => {
    const dateType = {
      date: date,
    }
    dispatch(sortByDate(dateType));
  }

  const options = {
    old: 'Сначала старые',
    new: 'Сначала новые',
  }

  const SelectSortWrap = styled.div`
    margin-right: 18px;
`;

  return (
    <SelectSortWrap>
      <h6>Сортировка по&nbsp;дате:</h6>
      <Select
        value={date}
        options={options}
        handleChange={handleChange}
      />
      <ButtonControl onClick={handleSubmit} />
    </SelectSortWrap>
  );
}

export default SelectSort;
