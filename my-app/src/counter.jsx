/*import React, { useState } from 'react';

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
      {/* Display current value of count }/*
      //<h2>Count: {count}</h2>

     // {/* Buttons to increment and decrement count }*/
     // <button onClick={incrementCount}>Increment</button>
     // <button onClick={decrementCount}>Decrement</button>
    //</div>
  //);
//}

//export default Counter;

/*import React, { useState, useEffect } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [isModified, setIsModified] = useState(false);
  const [isAboveTen, setIsAboveTen] = useState(false);

  useEffect(() => {
    setIsAboveTen(count > 10);
  }, [count]);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
      setIsModified(true);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setIsModified(true);
    }
  };

  const reset = () => {
    setCount(initialCount);
    setIsModified(false);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {isModified && <button onClick={reset}>Reset</button>}
      <div style={{ color: isAboveTen ? "red" : "black" }}>{count}</div>
    </div>
  );
};

export default Counter;*/

import React, { useState, useEffect } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [isModified, setIsModified] = useState(false);
  const [isAboveTen, setIsAboveTen] = useState(false);

  useEffect(() => {
    // Run once after component mount
    const storedCount = Number(localStorage.getItem('count'));
    if (!isNaN(storedCount)) {
      setCount(storedCount);
    }
  }, []); // Empty dependency array ensures the effect runs only once after mount

  useEffect(() => {
    setIsAboveTen(count > 10);
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
      setIsModified(true);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setIsModified(true);
    }
  };

  const reset = () => {
    setCount(initialCount);
    setIsModified(false);
    localStorage.setItem('count', initialCount);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {isModified && <button onClick={reset}>Reset</button>}
      <div style={{ color: isAboveTen ? "red" : "black" }}>{count}</div>
    </div>
  );
};

export default Counter;

