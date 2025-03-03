import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { addTodo, removeTodo, setTodoStatus } from '../../redux/todoSlice';

import Checkbox from '../Ui/Checkbox/Checkbox';
import Edit from '../Ui/Edit/Edit';
import Delete from '../Ui/Delete/Delete';

import { ListItemProps } from './interfaces';
import {
  ListItemWrap,
  ContentWrap,
  Description,
  IconsWrap,
  Priority,
  Header,
  Date,
} from './styles';

const ListItem: React.FC<ListItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    id,
    name,
    date,
    priority,
    description,
    completed,
  } = props;

  const toggleCompleted = () => {
    dispatch(
      setTodoStatus({ completed: !completed, id: id })
    );
  }

  return (
    <ListItemWrap>
      <Checkbox
        completed={completed}
        onChange={toggleCompleted}
      />
      <ContentWrap>
        <Header completed={completed}>{name}</Header>
        <Date>{date}</Date>
        <Priority>{priority}</Priority>
        <Description>{description}</Description>
      </ContentWrap>
      <IconsWrap>
        <Edit />
        <Delete />
      </IconsWrap>
    </ListItemWrap>
  )
}

export default ListItem;
