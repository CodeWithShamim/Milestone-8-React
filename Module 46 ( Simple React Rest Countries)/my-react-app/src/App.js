// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <LoadCountries></LoadCountries>
    </div>
  );
}


function LoadCountries(){
  const [countries, setCountries] = useState([]);

  // useEffect 
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      },
  []);
  console.log(countries);
  return(
    <div>
      <h1>Hello</h1>
    </div>
  )

}

export default App;
