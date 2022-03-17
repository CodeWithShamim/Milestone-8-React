// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import React from 'react';

function App() {
  return (
    <div className="App">
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
      <h1 style={{color: 'blue' , textTransform:"uppercase"}}>Country-King</h1>
      <div className='container'>
      { countries.map(countrie => <Country name={countrie.name.common} flags={countrie.flags.png}></Country>)}
      </div>
    </div>
  )

}



function Country(props){
  return(
    <div className='country'>
      <img style={{width: '100%', borderRadius:"60px"}} src={props.flags} alt="" />
      <h3 style={{color: 'white'}}>Name: {props.name}</h3>
    </div>
  )
}


export default App;
