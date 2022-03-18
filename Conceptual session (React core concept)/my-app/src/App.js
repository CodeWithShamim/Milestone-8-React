import './App.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Product from './components/Product/Product';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const addToCart= () => {
    const newCount = count + 1;
    setCount(newCount)
    
  }
  return (
    <div className="App">
      <div className="bg-primary py-3">
        <Menubar count={count}></Menubar>
      </div>

      {/* all product  */}
      <Product addToCart={addToCart}></Product>

    </div>
  );
}

export default App;
