// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import New from './components/New/New';
import {getTotal} from './utilities/storage';

function App() {
  const [items, setItems] = useState([]);
useEffect(()=>{
  fetch('./data.json')
  .then(res=> res.json())
  .then(data=>setItems(data));
},[]);


  return (
    <div className="App">
      <h1>Total Price : {getTotal(items)}</h1>
     <div>
         {items.map(item=> <New key={item.id} item={item}></New>)}
     </div>
    </div>
  );
}

export default App;
