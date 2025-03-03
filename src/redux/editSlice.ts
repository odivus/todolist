import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const editSlice = createSlice({
  name: 'isEdit',
  initialState,
  reducers: {
    toggleIsEdit: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
    },
  },
});

export const { toggleIsEdit } = editSlice.actions;
export default editSlice.reducer;
