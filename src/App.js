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
  const handleAdd10 = () =>{
    dispatch({type: "ADD10", payload: 10})
  }
  const handleMinus10 = ()=>{
    dispatch({type: "MINUS10", payload: 10})
  }
  return (
    <div className="App">
      <h1><u>Positive Counter</u></h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <br />
      <button onClick={handleAdd10}>Add 10</button>
      <button onClick={handleMinus10}>Minus 10</button>
    </div>
  );
}

export default App;
