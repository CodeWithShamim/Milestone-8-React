import './App.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';


function App() {
  return (
    <div className="App">
       <div className="bg-primary py-3">
           <Menubar></Menubar>
       </div>
      <div className='container bg-warning'>
          <h1>Hello</h1>    
      </div>
    </div>
  );
}

export default App;
