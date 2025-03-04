import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Select from '../Ui/Select/Select'
import { filterByPriority, sortByDate } from '../../redux/todoSlice'
import ButtonControl from '../Ui/ButtonControl/ButtonControl'
import styled from 'styled-components'

const SelectFilter: React.FC = () => {
  const [priority, setPriority] = useState<'all'|'low' | 'medium' | 'high'>('all');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'all'|'low' | 'medium' | 'high');
  }

  const handleSubmit = () => {
    const priorityType = {
      priority: priority,
    }
    dispatch(filterByPriority(priorityType));
  }

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
      <h6>Фильтр по&nbsp;приоритету:</h6>
      <Select
        value={priority}
        options={options}
        handleChange={handleChange}
      />
      <ButtonControl onClick={handleSubmit} />
    </div>
  );
}

export default SelectFilter;
