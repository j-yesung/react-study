import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  // clean up
  useEffect(() => {
    console.log(`hello useEffect! ${value}`);

    // 컴포넌트가 죽을 때, 실행
    return () => {
      console.log('사라짐!');
    };
  }, [value]);
  return (
    <>
      <div>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      </div>
    </>
  );
}

// props : 부모 컴포 -> 자식 컴포

export default App;
