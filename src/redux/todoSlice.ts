import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  date: number;
  priority: string;
  name: string;
  description: string;
  completed: boolean;
}

interface Sort {
  date: 'new' | 'old';
}

interface Filter {
  priority: 'all'|'low' | 'medium' | 'high';
}

const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeTodo: (state, action: PayloadAction<string>)=> {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus: (
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    )=> {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    sortByDate: (state, action: PayloadAction<Sort>)=> {
      const date = action.payload.date;
      if (date === 'new') {
        state.sort((a, b) => b.date - a.date);
      } else {
        state.sort((a, b) => a.date - b.date);
      }
    },
    filterByPriority: (state, action: PayloadAction<Filter>)=> {
      const priority = action.payload.priority;
      if (priority === 'all') {
        return state;
      } else {
        state = state.filter((todo) => {
          switch (priority) {
            case 'low':
              return todo.priority === 'Низкий';
            case 'medium':
              return todo.priority === 'Средний';
            case 'high':
              return todo.priority === 'Высокий';
            default:
              return false;
          }
        });
      }
    },
  },
});

export const {
  addTodo,
  editTodo,
  removeTodo,
  setTodoStatus,
  sortByDate,
  filterByPriority,
} = todoSlice.actions;
export default todoSlice.reducer;
