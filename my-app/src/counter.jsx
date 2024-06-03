import React, { useState } from 'react';

function Counter() {
  // Initialize state with count property
  const [count, setCount] = useState(0);

  // Function to increment count
  function incrementCount () {
    setCount(count + 1);
  };

  // Function to decrement count
  function decrementCount () {
    setCount(count - 1);
  };

  return (
    <div>
      {/* Display current value of count */}
      <h2>Count: {count}</h2>

      {/* Buttons to increment and decrement count */}
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;
