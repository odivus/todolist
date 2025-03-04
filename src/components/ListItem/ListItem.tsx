import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { removeTodo, setTodoStatus } from '../../redux/todoSlice';
import { toggleIsEdit } from '../../redux/editSlice';

import Edit from '../Ui/Edit/Edit';
import Checkbox from '../Ui/Checkbox/Checkbox';
import Delete from '../Ui/Delete/Delete';

import { ListItemProps, EditData } from './interfaces';
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
  const handleRemove = () => {
    dispatch(removeTodo(id));
  }

  const handleEdit = () => {
    const edit: EditData = {
      id: id,
      isEdit: true,
    };
    dispatch(toggleIsEdit(edit));
  };

  return (
    <ListItemWrap>
      <Checkbox
        completed={completed}
        onChange={toggleCompleted}
      />
      <ContentWrap>
        <Header completed={completed}>{name}</Header>
        <Date>{date}</Date>
        <Priority><span style={{fontWeight: 'normal'}}>Приоритет:&nbsp;</span>{priority}</Priority>
        <Description>{description}</Description>
      </ContentWrap>
      <IconsWrap>
        <Edit onClick={handleEdit} />
        <Delete onClick={handleRemove} />
      </IconsWrap>
    </ListItemWrap>
  )
}

export default ListItem;
