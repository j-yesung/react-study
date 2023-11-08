import { useSelector } from 'react-redux';
import './App.css';

function App() {
  // 여기에서 store에 접근하여 counter의 값을 읽어오자
  // useSelector
  const data = useSelector(state => state);

  console.log(data);

  return <div>Redux</div>;
}

export default App;
