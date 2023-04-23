import { useState, useEffect } from 'react';
import './App.css';



const App = () => {
  
  const [counter,setCounter] = useState(0);

  useEffect( () => {
    alert("Counter changed");
    console.log("Counter changed to" + counter);
  },[counter]);

  return (
  <div className="App">
  <>
  <h1>Hi this is my first Dynamic React App. </h1>
  <h1>This is a simple counter.</h1>
  <button onClick={() => {setCounter((prevCounter)=>(prevCounter+1))}}>+</button>
  <h1>{counter}</h1>
  <button onClick={() => {setCounter((prevCounter)=>(prevCounter-1))}}>-</button>
  </>
  </div>
  );
}

export default App;
