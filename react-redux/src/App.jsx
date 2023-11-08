import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 사용할 Action creator를 import 합니다.
import { minusOne, plusOne, plusN, minusN } from './redux/modules/counter';

const App = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  // useEffect(() => {
  //   console.log('number: ', number);
  // }, [number]);

  return (
    <div>
      <div>현재 카운트 : {counter.number}</div>
      <input
        type="number"
        value={number}
        onChange={e => {
          const { value } = e.target;
          setNumber(+value);
        }}
      />
      <button
        onClick={() => {
          // dispatch(plusOne()); // 액션객체를 Action creator로 변경합니다.
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      {/* 빼기 버튼 추가 */}
      <button
        onClick={() => {
          // dispatch(minusOne()); // 액션객체를 Action creator로 변경합니다.
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
