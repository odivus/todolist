import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Popup {
  isPopup: boolean;
}

const initialState = {isPopup: false} as Popup;

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    togglePopup: (state, action: PayloadAction<Popup>) => {
      state.isPopup = action.payload.isPopup;
    },
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
