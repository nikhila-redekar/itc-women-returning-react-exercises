import React from 'react';
import './App.css';
import ToDoApp from './ToDoApp';
import Counter from './counter'; // Import the Counter component
import Hello from './Hello';
import SignUpForm from './SignUpForm';
import ToDoList from './ToDoList';
import ToDo from './Todo';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { useState } from "react";
import TypesExample from './TypesExample';
import navB from './navbar';
import CounterM from './usememo'
import CardExample from './cardexample';


const weatherData = {
  currentCity: "Cleveland",
  description: "Sunny",
  temperature: 76
};

const toDosList = [
  "learn React",
  "eat",
  "sleep",
  "practice React",
  "watch React Pluralsight videos",
  "practice JavaScript",
];


const App = () => {
  const [user] = useState({
    username: 'timk',
    firstName: 'tim',
    lastName: 'kellogg'
  });

  return(
    
    <div>
      <ToDoApp name = "John" weather = {weatherData} toDos={toDosList}/>
      <Counter/>
      <Hello/>
      <SignUpForm/>
      <ToDoList/>
      <ComponentA user={user} />
      {/*<TypesExample/>
      <CounterM/> 
  <navB/>
      <CardExample/>*/}
    </div>
  );
  
}
 export default App;


//ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

