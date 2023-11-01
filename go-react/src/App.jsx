import React, { useState } from 'react';

function App() {
  // react에서 변경해야할 값들은 state로 관리해줘야 함.
  let [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          let plusConut = count + 1;
          setCount(plusConut);
        }}
      >
        증가
      </button>
      <br />
      <button
        onClick={() => {
          let desCount = count - 1;
          setCount(desCount);
        }}
      >
        감소
      </button>
    </div>
  );
}

export default App;
