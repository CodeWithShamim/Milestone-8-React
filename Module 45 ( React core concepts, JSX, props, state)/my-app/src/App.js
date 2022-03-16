import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
        <div className="App">
           <h3>shamim</h3>
           <New name="Shamim" email="shamimislamonline@gmail.com"></New>
           <New name="Salman" email="salmanislamonline@gmail.com"></New>
           <New name="Rafiq" email="rafiqislamonline@gmail.com"></New>
           
        </div>
    );
}

function New (props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Email: {props.email} </h3>
            <h5>Id: 400000</h5>
        </div>
    )
}

export default App;