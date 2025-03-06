import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from '../Ui/Select/Select'
import { filterByPriority, sortByDate } from '../../redux/todoSlice'
import styled from 'styled-components'

const SelectFilter: React.FC = () => {
  const [priority, setPriority] = useState<'all'|'low' | 'medium' | 'high'>('all');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'all'|'low' | 'medium' | 'high');
  }

  useEffect(() => {
    const priorityType = {
      priority: priority,
    }
    dispatch(filterByPriority(priorityType));
  }, [priority]);

  const options = {
    all: 'Все',
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий',
  }

  const Wrap = styled.div`
    display: flex;
    height: fit-content;
    flex-direction: column;
`;

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
