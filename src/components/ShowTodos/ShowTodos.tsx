import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Control from '../Control/Control';
import ListItem from '../ListItem/ListItem';
import { RootState } from '../../redux/store'

const ShowTodos: React.FC = () => {
  const todos = useSelector((state: RootState) => state);

  if (todos.length === 0) {
    return null;
  }

  return (
    <>
      <h2 style={{ marginTop: '34px' }}>Задачи</h2>
      <Control />
      {
        todos.map((todo) => (
          <ListItem
            key={todo.id}
            name={todo.name}
            date={todo.date}
            priority={todo.priority}
            description={todo.description}
            completed={todo.completed}
          />
        ))
      }
    </>
  )
}

export default ShowTodos;
