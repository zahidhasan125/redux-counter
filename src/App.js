import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const handleIncrease = ()=>{
    dispatch(actions.increament())
    // counter + 1;
  }

  const handleDecrease =()=>{
    dispatch(actions.decreament())
    // counter - 1;
  }
  const handleAdd10 = () =>{
    dispatch(actions.add10(10))
  }
  const handleMinus10 = ()=>{
    dispatch(actions.minus10(10))
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
