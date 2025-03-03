import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
import popupReducer from './popupSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    popup: popupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
