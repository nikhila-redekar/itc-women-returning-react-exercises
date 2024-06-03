import React from 'react';
import './App.css';
import ToDoApp from './ToDoApp';
import Counter from './counter'; // Import the Counter component
import Hello from './Hello';
import SignUpForm from './SignUpForm';

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
  return(
    <div>
      <ToDoApp name = "John" weather = {weatherData} toDos={toDosList}/>
      <Counter/>
      <Hello/>
      <SignUpForm/>
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

