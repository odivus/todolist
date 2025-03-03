import React, { useState } from 'react';
import Checkbox from '../Ui/Checkbox/Checkbox';
import Edit from '../Ui/Edit/Edit';
import Delete from '../Ui/Delete/Delete';
import styled from 'styled-components';

interface ListItemProps {
  date: string;
  priority: string;
  name: string;
  description: string;
  completed: boolean;
}

const ListItemWrap = styled.div`
  display: flex;
  width: 440px;
  padding: 20px;
  margin: 0 0 10px 0;
  background-color: white;
  border-radius: 8px;
`;

const ContentWrap = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const IconsWrap = styled.div`
  display: flex;
  width: fit-content;
`;

const Header = styled.div`
  font-size: 1.2rem;
  margin-bottom: 4px;
`;

const Date = styled.div`
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

const Priority = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 8px;
`;

const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    name,
    date,
    priority,
    description,
    completed,
  } = props;

  return (
    <ListItemWrap>
      <Checkbox completed={completed} />
      <ContentWrap>
        <Header>{name}</Header>
        <Date>{date}</Date>
        <Priority>{priority}</Priority>
        <Description>{description}</Description>
      </ContentWrap>
      <IconsWrap>
        <Edit />
        <Delete />
      </IconsWrap>
    </ListItemWrap>
  );
}

export default ListItem;
