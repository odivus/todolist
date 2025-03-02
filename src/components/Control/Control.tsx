import React, { useState } from 'react';
import SelectSort from '../SelectSort/SelectSort';
import SelectFilter from '../SelectFilter/SelectFilter';
import styled from 'styled-components';

const ControlWrap = styled.div`
  display: flex;
  width: 440px;
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  border-radius: 8px;
`;

const Control: React.FC = () => {
  return (
    <ControlWrap>
      <SelectSort />
      <SelectFilter />
    </ControlWrap>
  );
}

export default Control;
