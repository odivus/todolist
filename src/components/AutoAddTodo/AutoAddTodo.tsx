import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { addTodo } from '../../redux/todoSlice';
import { data } from './data';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  date: number;
  priority: string;
  name: string;
  description: string;
  completed: boolean;
}

const AutoAddTodo: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter < 10) {
        setCounter((counter) => counter + 1);
        autoSubmit();
      } else {
        clearInterval(intervalId);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [counter]);

  const dispatch = useDispatch<AppDispatch>();

  const autoSubmit = () => {
    const task: Task = {
      id: uuidv4(),
      date: Date.now(),
      priority: data[counter].priority,
      name: data[counter].name,
      description: data[counter].description,
      completed: false,
    };
    dispatch(addTodo(task));
  };

  return null;
}

export default AutoAddTodo;
