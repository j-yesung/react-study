// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
// App 컴포넌트 (컴포넌트 이름은 무조건 "대문자")

function Son() {
  return <div>나는 아들입니다.</div>;
}

function Mother() {
  return <Son />;
}

function Grandfather() {
  return <Mother />;
}

function App() {
  return <Grandfather />;
}

export default App;
