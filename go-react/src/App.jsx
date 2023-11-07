import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const idRef = useRef('');
  const pwdRef = useRef('');

  const [value, setValue] = useState('');

  // 렌더링이 될 때
  useEffect(() => {
    // input tag를 지칭함.
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (value.length >= 10) {
      pwdRef.current.focus();
    }
  }, [value]);

  return (
    <>
      <div>
        아이디 :
        <input
          type="text"
          value={value}
          ref={idRef}
          onChange={e => {
            setValue(e.target.value);
            // 리액트에서 state를 일어나게 하는 건 배치 업데이트이다.
            // if (value.length >= 10) {
            //   pwdRef.current.focus();
            // }
          }}
        />
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwdRef} />
      </div>
    </>
  );
}

export default App;
