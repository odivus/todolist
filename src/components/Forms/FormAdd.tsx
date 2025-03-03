import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { addTodo, removeTodo, setTodoStatus } from '../../redux/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import InputText from '../InputText/InputText';
import TextArea from '../TextArea/TextArea';
import SelectPriority from '../SelectPriority/SelectPriority'
import Button from '../Ui/Button/Button';

import { FormWrap, TextAreaWrap, FormFooter } from './styles.js';

interface Task {
  id: string;
  date: string;
  priority: string;
  name: string;
  description: string;
  completed: boolean;
}

const FormAdd: React.FC = () => {
  const [inputValue, setInputText] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const handleTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const date = (`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`).replace(/:\d{2}$/, '')
    const task: Task = {
      id: uuidv4(),
      date,
      priority: '',
      name: inputValue,
      description: textAreaValue,
      completed: false,
    };
    dispatch(addTodo(task));
    setInputText('');
    setTextAreaValue('');
  };

  return (
    <FormWrap>
      <form>
        <h6>Название:</h6>
        <InputText
          value={inputValue}
          handleChange={handleInputValue}
        />
        <TextAreaWrap>
          <h6>Описание:</h6>
          <TextArea
            value={textAreaValue}
            handleChange={handleTextAreaValue}
          />
        </TextAreaWrap>
        <h6>Приоритет:</h6>
        <FormFooter>
          <SelectPriority />
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

export default FormAdd;
