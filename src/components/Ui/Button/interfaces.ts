export interface ButtonType {
  type: 'primary' | 'secondary' | 'disabled';
}

export interface ButtonProps extends ButtonType {
  text: string;
  handleClick: () => void;
}
