import React, { useState } from 'react';
import InputText from '../Ui/InputText/InputText';
import TextArea from '../Ui/TextArea/TextArea';
import SelectPriority from '../SelectPriority/SelectPriority'
import Button from '../Ui/Button/Button';
import styled from 'styled-components';

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;

const TextAreaWrap = styled.div`
  margin: 10px 0 7px 0;
`;

const FormFooter = styled.div`
  display: flex;
  width: 100%;
`;

const FormEdit: React.FC = () => {
  return (
    <FormWrap>
      <form>
        <h6>Название:</h6>
        <InputText />
        <TextAreaWrap>
          <h6>Описание:</h6>
          <TextArea />
        </TextAreaWrap>
        <h6>Приоритет:</h6>
        <FormFooter>
          <SelectPriority />
          <Button
            type={'primary'}
            text={'Сохранить'}
            handleClick={() => {}}
          />
          <Button
            type={'secondary'}
            text={'Отмена'}
            handleClick={() => {}}
          />
        </FormFooter>
      </form>
    </FormWrap>
  );
}

export default FormEdit;
