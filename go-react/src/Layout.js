import React from 'react';

export default function Layout(props) {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          border: '1px solid black',
        }}
      >
        헤더 영역
      </div>
      {props.children}
    </>
  );
}
