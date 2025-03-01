import React from 'react';
import ReactDOM from 'react-dom/client';

import Form from './components/Form/Form';
import styled from 'styled-components';
import './style.css';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
`;

const App: React.FC = () => (
  <Wrap>
    <h2>Добавление задач</h2>
    <Form />
  </Wrap>
);

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
