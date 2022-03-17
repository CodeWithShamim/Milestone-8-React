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

  console.log(countries[0]);

  return (
    <div>
      <h1>Visit All Country</h1>
      { countries.map(countrie => <Country name={countrie.name.common} flags={countrie.flags.png}></Country>)}
    </div>
  )

}



function Country(props){
  return(
    <div className='country'>
      <img src={props.flags} alt="" />
      <h3>Name: {props.name}</h3>
    </div>
  )
}


export default App;
