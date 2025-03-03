import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Control from '../Control/Control';
import ListItem from '../ListItem/ListItem';

const ShowTodos: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

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
            id={todo.id}
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
