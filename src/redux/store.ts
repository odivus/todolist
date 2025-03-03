import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
import editReducer from './editSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    edit: editReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
