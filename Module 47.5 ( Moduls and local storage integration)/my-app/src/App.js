// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import New from './components/New/New';

function App() {
  const [items, setItems] = useState([]);
useEffect(()=>{
  fetch('./data.json')
  .then(res=> res.json())
  .then(data=>setItems(data));
},[]);
  return (
    <div className="App">
      {items.map(item=> <New key={item.id} item={item}></New>)}

    </div>
  );
}

export default App;
