import './App.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">
      <div className="bg-primary py-3">
        <Menubar></Menubar>
      </div>

      {/* all product  */}
      <Product></Product>

    </div>
  );
}

export default App;
