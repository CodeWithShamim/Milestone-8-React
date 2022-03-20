// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(1);
  const addCount =()=>{

    let newCount;

    if(count === 2){
      newCount = 2;
    }else{
      newCount = count +1;
    }
    
    setCount(newCount)
  }
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default App;
