import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShortedState {
  sortOption: string;
  itemOffset: number;
}

const initialState: ShortedState = {
  sortOption: '',
  itemOffset: 0,
};

export const shortedSlice = createSlice({
  name: 'shorted',
  initialState,
  reducers: {
    setSortOption: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
      state.itemOffset = 0; // Reset offset when sorting changes
    },
    setItemOffset: (state, action: PayloadAction<number>) => {
      state.itemOffset = action.payload;
    },
  },
});

export const { setSortOption, setItemOffset } = shortedSlice.actions;

export default shortedSlice.reducer;