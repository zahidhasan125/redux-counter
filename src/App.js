import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const handleIncrease = ()=>{
    dispatch({type: "INC"})
    // counter + 1;
  }

  const handleDecrease =()=>{
    dispatch({type: "DEC"})
    // counter - 1;
  }
  return (
    <div className="App">
      <h1><u>Positive Counter</u></h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
