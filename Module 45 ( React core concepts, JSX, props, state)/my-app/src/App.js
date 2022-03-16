import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
    return ( 
        <div className="App">
           <h1
           >Components</h1>
           <New name="Shamim" email="shamimislamonline@gmail.com"></New>
           <New name="Salman" email="salmanislamonline@gmail.com"></New>
           <New name="Rafiq" email="rafiqislamonline@gmail.com"></New>
           
        </div>
    );
}

function New (props) {
    const a = useState(100);
    console.log(a);
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email} </p>
            <h5>Id: 12233</h5>
        </div>
    )
}

export default App;