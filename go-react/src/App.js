import React from 'react';

// props를 통해 부모 데이터를 전달받았다.
function Son(props) {
  console.log('props: ', props);
  return <div>나는 {props.motherName}의 아들이에요!</div>;
}

// 부모 -> 자식 정보를 전달했다.
function Mother() {
  const name = '흥부인';
  return <Son motherName={name} />;
}

function GrandFather() {
  return <Mother />;
}

export default function App() {
  return <GrandFather />;
}
