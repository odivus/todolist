import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'

import EditTodo from '../../Forms/EditTodo';
import styled from 'styled-components';

interface PopUpType {
  isEdit: boolean;
}

const StyledPopUp = styled.div<PopUpType>`
  display: ${({ isEdit }) => (isEdit ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
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
  const edit = useSelector((state: RootState) => state.edit);
  const { isEdit, id } = edit;

  useEffect(() => {
    if (isEdit) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEdit]);

  return (
    <StyledPopUp isEdit={isEdit}>
      <EditTodo id={id} />
    </StyledPopUp>
  );
}

export default PopUp;
