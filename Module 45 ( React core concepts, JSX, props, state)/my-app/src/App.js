// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Data from './data.json'

function App() {

 
    return ( 
        <div className="App">
           <h1>Components</h1>
            {Data.map( ({id, name, shift, group}) => <New id={id} name={name} shift={shift} group={group}></New>)}

            <ExternalUsers/>

        </div>
    );

   
}

 /* <New name="Shamim" email="shamimislamonline@gmail.com"></New>
           <New name="Salman" email="salmanislamonline@gmail.com"></New>
           <New name="Rafiq" email="rafiqislamonline@gmail.com"></New> */

function New (props) {
    const {id, name, shift, group} = props;

    
    // console.log(props);
    const [count, setCount] = useState(1);

    const Increase = () => {
        let newCount;
        newCount = count + 1;
        setCount(newCount);
    }

    const Decrease = () => {
        let newCount;
        if(count <=0){
            newCount = 0;
          
        }else{
            newCount = count - 1;
        }
        
        setCount(newCount);
      }
  

    return (
        <div className='new'>
            <h3>Name: {name}</h3>
            <p>ID: {id} </p>
            <p>ID: {shift} </p>
            <p>ID: {group} </p>
            <h2>Count: {count}</h2>
            <button onClick={Increase}>Increase</button>
            <button id='decrease-btn' onClick={Decrease}>Decrease</button>
        </div>
    )
}




function ExternalUsers(){

    const [users, setUsers] = useState([]);

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUsers(data))
   } 
   ,[]);

//    console.log(users);


    return (
        <div style={{color: 'blue', border: '2px solid red', padding: '10px'}}>
            <h1 style={{color: 'red', border: '2px solid blue'}}>{users.map(user=> user.title)}</h1>
        </div>
           );
}

export default App;