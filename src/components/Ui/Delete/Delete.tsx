import React from 'react';
// @ts-ignore
import edit from "../../../asset/delete.svg";
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

interface EditProps {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const Delete: React.FC<EditProps> = ({ onClick }) => {
  return (
    <StyledImg
      src={edit}
      alt='Удалить'
      title='Удалить'
      onClick={onClick}
    />
  );
}

export default Delete;
