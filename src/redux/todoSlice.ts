import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  date: string;
  priority: string;
  name: string;
  description: string;
  completed: boolean;
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
  },
});

export const { addTodo, editTodo, removeTodo, setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
