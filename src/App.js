
import './App.css';
import {useSelector , useDispatch} from "react-redux" 
import {increment , decrement} from "./actions" 

function App() {
  const counter = useSelector(state => state.counter)
  const isloged = useSelector(state => state.isloged )
  const dispatch = useDispatch() 
  console.log(counter , isloged)

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick = {() => dispatch(increment(5,4))} >+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
      <h1>{isloged}</h1>
     
    </div>
  );
}

export default App;
