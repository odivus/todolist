import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import AddTodo from './components/Forms/AddTodo';
import PopUp from './components/Ui/PopUp/PopUp';
import ShowTodos from './components/ShowTodos/ShowTodos'

import styled from 'styled-components';
import './style.css';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
`;

const App: React.FC = () => (
  <>
    <PopUp />
    <Wrap>
      <h2>Добавление задач</h2>
      <AddTodo />
      <ShowTodos />
    </Wrap>
  </>
);

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
