import { createSlice } from '@reduxjs/toolkit';
import { initialStateType } from '../interfaces/interfaces';

const cashSlice = createSlice({
  name: 'main',
  initialState: {
    cash: 10,
  } as initialStateType,
  reducers: {
    setAddCash(state, action) {
      state.cash += Number(action.payload);
    },
    setGetCash(state, action) {
      state.cash += Number(action.payload);
    },
  },
});

export const { setAddCash, setGetCash } = cashSlice.actions;

export default cashSlice.reducer;
