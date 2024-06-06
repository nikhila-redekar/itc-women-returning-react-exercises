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
import {BrowserRouter, Router, Route, Routes, Link, NavLink} from 'react-router-dom';


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
      <nav>
      <ul>  
    <li>  
    <Link to="/">Home</Link>  
    </li>  
    <li>  
    <Link to="/about">About Me</Link>  
    </li>  
    <li>  
    <Link to="/jeopardy">Jeopardy</Link>  
    </li>  
</ul> 
      </nav>
      <Routes>
      <Route path='/' element={<h1>This is a home page</h1>}/>
      <Route path='/about' element={<h1>This is a about me section</h1>}/>
      <Route path='/jeopardy' element={<h1>This is a jeopardy app section</h1>}/>
      </Routes>
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

