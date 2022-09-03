import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface gloablState {
  openNavBar: boolean;
}

const initialState: gloablState = {
  openNavBar: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setOpenNavBar: (state, action: PayloadAction<boolean>) => {
      state.openNavBar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenNavBar } = globalSlice.actions;

export default globalSlice.reducer;
