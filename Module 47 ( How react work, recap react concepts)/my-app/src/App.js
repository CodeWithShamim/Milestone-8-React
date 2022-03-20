// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Display from './components/Display/Display';
import ClassComponent from './components/ClassComponent/ClassComponent';

function App() {
  const [count, setCount] = useState(1);
  const addCount =()=>{

    let newCount;

    if(count === 10){
      newCount = 1;
    }else{
      newCount = count +1;
    }
    
    setCount(newCount)
  }
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={addCount}>Add</button>
      <Display name={count}></Display>

      <ClassComponent></ClassComponent>
    </div>
  );
}

export default App;
