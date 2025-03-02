import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form/Form';
import ListItem from './components/ListItem/ListItem';
import Control from './components/Control/Control';
import PopUp from './components/Ui/PopUp/PopUp';
import styled from 'styled-components';
import './style.css';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
`;

const App: React.FC = () => (
  <>
    <PopUp />
    <Wrap>
      <h2>Добавление задач</h2>
      <Form />
      <h2 style={{marginTop: '34px'}}>Задачи</h2>
      <Control />
      <ListItem />
    </Wrap>
  </>
);

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
