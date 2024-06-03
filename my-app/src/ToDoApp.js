import React from 'react';
export default ToDoApp;

// Define the ToDoApp component
function ToDoApp({ name, weather, toDos }) {
  // Destructure weather object
  const { currentCity, description, temperature } = weather;

  // Log each todo to the console
  toDos.forEach(todo => console.log(todo));

  return (
    <div>
      {/* Render the welcome message */}
      <h1>Welcome to {name}'s To-Do List</h1>

      {/* Render weather information */}
      <h2>The weather in {currentCity} is {description} with a temperature of {temperature} degrees fahrenheit.</h2>
    </div>
  );
}

