/*import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ToDoApp from './ToDoApp';

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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToDoApp name="John" weather={weatherData} toDos={toDosList} />
  </React.StrictMode>,
  document.getElementById('root')
);

export default ToDoApp;*/

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter'; // Import the Counter component

function App() {
  return (
    <div className="App">
      <h1>Counter Example</h1>
      <Counter /> {/* Render the Counter component */}
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

