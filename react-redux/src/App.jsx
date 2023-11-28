import React, { useState } from 'react';
// import Router from './shared/Router';

function App() {
  // return <Router />;
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount(count + 1);
  };
  const minusNumber = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={addNumber}>+</button>
      <button onClick={minusNumber}>-</button>
    </>
  );
}

export default App;
