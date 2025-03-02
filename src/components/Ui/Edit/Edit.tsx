import React from 'react';
// @ts-ignore
import edit from "../../../asset/edit.svg";
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

const Edit: React.FC = () => {
  return (
    <StyledImg src={edit} alt='Редактировать' title='Редактировать' />
  );
}

export default Edit;
