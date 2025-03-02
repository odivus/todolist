import React, { useState } from 'react';
import Checkbox from '../Ui/Checkbox/Checkbox';
import Edit from '../Ui/Edit/Edit';
import Delete from '../Ui/Delete/Delete';
import styled from 'styled-components';

const ListItemWrap = styled.div`
  display: flex;
  width: 440px;
  padding: 20px;
  margin: 10px 0;
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

const ListItem: React.FC = () => {
  return (
    <ListItemWrap>
      <Checkbox />
      <ContentWrap>
        <Header>Задача номер один</Header>
        <Date>27.02.2025 19:09</Date>
        <Priority>Приоритет: низкий</Priority>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, enim eu luctus eleifend, massa arcu ultrices neque, et mollis magna massa sit amet est.</Description>
      </ContentWrap>
      <IconsWrap>
        <Edit />
        <Delete />
      </IconsWrap>
    </ListItemWrap>
  );
}

export default ListItem;
