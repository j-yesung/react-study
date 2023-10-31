import React, { useState } from 'react';

function App() {
  // react에서 변경해야할 값들은 state로 관리해줘야 함.
  const [fruit, setFruit] = useState('');

  return (
    <div>
      과일 :{' '}
      <input
        value={fruit}
        onChange={function (event) {
          // console.log('event: ', event.target.value);
          setFruit(event.target.value);
        }}
      />
      <br />
      <br />
      {fruit}
    </div>
  );
}

export default App;
