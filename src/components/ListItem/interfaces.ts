export interface ListItemProps {
  id: string;
  date: string;
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

