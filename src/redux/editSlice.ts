import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isEdit: false,
  id: '',
};

export interface Edit {
  isEdit: boolean;
  id: string;
}

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    toggleIsEdit: (state, action: PayloadAction<Edit>) => {
      state.isEdit = action.payload.isEdit;
      state.id = action.payload.id;
    },
  },
});

export const { toggleIsEdit } = editSlice.actions;
export default editSlice.reducer;
