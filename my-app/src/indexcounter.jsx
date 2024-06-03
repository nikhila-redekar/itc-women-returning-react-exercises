import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter'; // Import the Counter component

function App() {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter /> {/* Render the Counter component */}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
