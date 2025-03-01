import styled from 'styled-components';
import { ButtonType } from './interfaces';

const defineButtonColor = ({ type = 'primary' }: ButtonType) => {
  switch (type) {
    case 'primary':
      return '#238CFF';
    case 'secondary':
      return '#ff9523';
    case 'disabled':
      return '#949494';
    default:
      return '#238CFF';
  }
}

export const StyledButton = styled.button<ButtonType>`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ type }) => defineButtonColor({ type })};
  background-color: ${({ type }) => defineButtonColor({ type })};
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  outline: none;
  cursor: ${({ type }) => type === 'disabled' ? 'not-allowed' : 'pointer'};
  opacity: ${({ type }) => type === 'disabled' ? 0.5 : 1};
`;
