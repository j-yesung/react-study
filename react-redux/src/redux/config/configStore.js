import counter from '../modules/counter';
import { configureStore } from '@reduxjs/toolkit';

// not toolkit version
// 일반 리듀서
// const rootReducer = combineReducers({
//   counter,
// });

// toolkit version
const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
