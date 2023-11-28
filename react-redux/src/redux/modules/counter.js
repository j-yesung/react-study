import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const __addNumber = createAsyncThunk('ADD_NUMBER_WAIT', (payload, thunkAPI) => {
  setTimeout(() => {
    thunkAPI.dispatch(addNumber(payload)); // 실행
  }, 3000);
});

// 초기 상태값
const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { addNumber, minusNumber } = counterSlice.actions;
