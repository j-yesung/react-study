import logo from "./logo.svg";
import "./App.css";

// App 컴포넌트 (컴포넌트 이름은 무조건 "대문자")
function App() {
  // 여기가 자바스크립트를 쓸 수 있는 영역
  const onClickButtonHandler = () => {
    alert("클릭");
  };

  return (
    // JSX 문법
    <div
      style={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
      <sapn>이것은 내가 만든 App컴포넌트 입니다</sapn>
      <button type="button" onClick={onClickButtonHandler}>
        클릭!
      </button>
    </div>
  );
}

export default App;
