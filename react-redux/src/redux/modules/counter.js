// Action Creator에 사용할 value
const PLUS_N = 'conuter/PLUS_N';
const MINUS_N = 'conuter/MILUS_N';

// Action Creator
export const plusN = payload => {
  return {
    type: PLUS_N,
    payload,
  };
};
export const minusN = payload => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// reducer
const counter = (state = initialState, action) => {
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case PLUS_N:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
