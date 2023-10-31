import React, { useState } from 'react';

function App() {
  // react에서 변경해야할 값들은 state로 관리해줘야 함.
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // id
  const onIdChangeHandler = event => {
    setId(event.target.value);
  };
  // pw
  const onPwChangeHandler = event => {
    setPw(event.target.value);
  };

  return (
    <div>
      아이디 :
      <input type="text" value={id} onChange={onIdChangeHandler} />
      <br />
      비밀번호 :
      <input type="password" value={pw} onChange={onPwChangeHandler} />
      <br />
      <button
        onClick={function () {
          alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`);
          setId(''); // 아이디 입력 칸 초기화
          setPw(''); // 비밀번호 입력 칸 초기화
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default App;
