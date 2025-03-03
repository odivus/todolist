import React, { useState } from 'react';
import EditTodo from '../../Forms/EditTodo';
import styled from 'styled-components';

const StyledPopUp = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin:0;
  background: rgba(0,0,0,0.7);
`;

const PopUp: React.FC = () => {
  return (
    <StyledPopUp>
      <EditTodo />
    </StyledPopUp>
  );
}

export default PopUp;
