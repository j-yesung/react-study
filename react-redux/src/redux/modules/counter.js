import { createSlice } from '@reduxjs/toolkit';

// Action Creator에 사용할 value
const ADD_NUMBER = 'counter/ADD_NUMBER';
const MINUS_NUMBER = 'counter/MINUS_NUMBER';

// Action Creator
// export const plusN = payload => ({
//   type: PLUS_N,
//   payload,
// });

// export const minusN = payload => ({
//   type: MINUS_N,
//   payload,
// });

// 초기 상태값
const initialState = {
  number: 0,
};

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ADD_NUMBER: (state, action) => {
      state.number = state.number + action.payload;
    },
    MINUS_NUMBER: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counter;
// export {PLUS_N, MINUS_N} counterSlice.actions
