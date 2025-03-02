import React from 'react';
// @ts-ignore
import edit from "../../../asset/delete.svg";
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Delete: React.FC = () => {
  return (
    <StyledImg src={edit} alt='Удалить' title='Удалить' />
  );
}

export default Delete;
