import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { addTodo } from '../../redux/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import InputText from '../InputText/InputText';
import TextArea from '../TextArea/TextArea';
import SelectPriority from '../SelectPriority/SelectPriority'
import Button from '../Ui/Button/Button';

import { FormWrap, TextAreaWrap, FormFooter } from './styles.js';

interface Task {
  id: string;
  date: number;
  priority: string;
  name: string;
  description: string;
  completed: boolean;
}

const options = {
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий',
}

const AddTodo: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setPriority] = useState<'low' | 'medium' | 'high'>('low');

  const dispatch = useDispatch<AppDispatch>();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskName(e.target.value);
  };

  const handleTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskDescription(e.target.value);
  };

  const handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'low' | 'medium' | 'high');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task: Task = {
      id: uuidv4(),
      date: Date.now(),
      priority: taskPriority,
      name: taskName,
      description: taskDescription,
      completed: false,
    };
    dispatch(addTodo(task));
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    <FormWrap>
      <form>
        <h6>Название:</h6>
        <InputText
          value={taskName}
          handleChange={handleInputValue}
        />
        <TextAreaWrap>
          <h6>Описание:</h6>
          <TextArea
            value={taskDescription}
            handleChange={handleTextAreaValue}
          />
        </TextAreaWrap>
        <h6>Приоритет:</h6>
        <FormFooter>
          <SelectPriority
            isDefaultValue={false}
            value={taskPriority}
            options={options}
            handleChange={handlePriority}
          />
          <Button
            type={'primary'}
            text={'Добавить задачу'}
            handleClick={handleSubmit}
          />
        </FormFooter>
      </form>
    </FormWrap>
  );
}

export default AddTodo;
