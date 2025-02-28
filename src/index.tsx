import React from 'react';
import ReactDOM from 'react-dom/client';

import styled from 'styled-components';
import './style.css';

const Wrap = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 620px;
  margin: 0 auto;
`;

const App: React.FC = () => (
  <Wrap>
    Hello world!
  </Wrap>
);

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
