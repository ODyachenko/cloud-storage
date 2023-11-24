import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface userState {
  value: number;
}

// Define the initial state using that type
const initialState: userState = {
  value: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state: RootState) => {
      state.value += 1;
    },
    decrement: (state: RootState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: RootState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
export default userSlice.reducer;
