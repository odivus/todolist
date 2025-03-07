import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from '../Ui/Select/Select'
import { sortByDate } from '../../redux/todoSlice'
import styled from 'styled-components'

const SelectSort: React.FC = () => {
  const [date, setDate] = useState<'new' | 'old'>('old');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value as 'new' | 'old');
  }

  useEffect(() => {
    const dateType = {
      date: date,
    }
    dispatch(sortByDate(dateType));
  }, [date]);

  const options = {
    old: 'Сначала старые',
    new: 'Сначала новые',
  }

  const SelectSortWrap = styled.div`
    margin-right: 18px;
`;

  return (
    <SelectSortWrap>
      <h5>Сортировать</h5>
      <h6>По&nbsp;дате:</h6>
      <Select
        value={date}
        options={options}
        isDefaultValue={false}
        handleChange={handleChange}
      />
    </SelectSortWrap>
  );
}

export default SelectSort;
