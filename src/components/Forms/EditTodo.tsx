import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import InputText from '../InputText/InputText';
import TextArea from '../TextArea/TextArea';
import SelectPriority from '../SelectPriority/SelectPriority'
import Button from '../Ui/Button/Button';

import { editTodo } from '../../redux/todoSlice';
import { toggleIsEdit, Edit } from '../../redux/editSlice';
import { FormWrap, TextAreaWrap, FormFooter, EditWrap } from './styles.js'

interface EditTodoProps {
  id: string;
}

const options = {
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий',
}

const EditTodo: React.FC<EditTodoProps> = ({ id }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setPriority] = useState<'low' | 'medium' | 'high'>('low');

  const todo = useSelector((state: RootState) => state.todos.find((todo) => todo.id === id));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (todo) {
      setTaskName(todo.name);
      setTaskDescription(todo.description);
      setPriority(todo.priority as 'low' | 'medium' | 'high');
    }
  }, [todo]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskName(e.target.value);
  };

  const handleTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskDescription(e.target.value);
  };

  const handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as 'low' | 'medium' | 'high');
  }

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    const edit = {
      isEdit: false,
      id: id,
    }
    dispatch(toggleIsEdit(edit));
    setTaskName('');
    setTaskDescription('');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task = {
      id: id,
      priority: taskPriority,
      name: taskName,
      description: taskDescription,
    };
    const edit: Edit = {
      isEdit: false,
      id: id,
    }
    dispatch(editTodo(task));
    dispatch(toggleIsEdit(edit));
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  if (!todo) {
    return null;
  }

  return (
    <EditWrap>
      <h2 style={{marginTop: 0}}>Редактирование задачи</h2>
      <FormWrap>
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
            value={taskPriority}
            isDefaultValue={true}
            options={options}
            handleChange={handlePriority}
          />
          <Button
            type={'primary'}
            text={'Сохранить'}
            handleClick={handleSubmit}
          />
          <Button
            type={'secondary'}
            text={'Отмена'}
            handleClick={handleCancel}
          />
        </FormFooter>
      </FormWrap>
    </EditWrap>
  );
}

export default EditTodo;
