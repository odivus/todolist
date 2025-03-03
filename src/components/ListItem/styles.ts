import styled from 'styled-components'
import { HeaderType } from './interfaces'

export const defineHeaderStyle = ({ completed }: HeaderType) => {
  if (completed) {
    return 'line-through';
  } else {
    return 'none';
  }
}

export const ListItemWrap = styled.div`
  display: flex;
  width: 440px;
  padding: 20px;
  margin: 0 0 10px 0;
  background-color: white;
  border-radius: 8px;
`;

export const ContentWrap = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const IconsWrap = styled.div`
  display: flex;
  width: fit-content;
`;

export const Header = styled.div<HeaderType>`
  text-decoration: ${({ completed }) => defineHeaderStyle({ completed })};
  font-size: 1.2rem;
  margin-bottom: 4px;
`;

export const Date = styled.div`
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export const Priority = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Description = styled.div`
  margin-top: 8px;
`;
