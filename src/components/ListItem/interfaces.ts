export interface ListItemProps {
  id: string;
  date: number;
  priority: string;
  name: string;
  description: string;
  completed: boolean;
}

export interface HeaderType {
  completed: boolean;
}

export interface EditData {
  id: string;
  isEdit: boolean;
}

