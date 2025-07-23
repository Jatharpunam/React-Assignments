import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="counter-wrapper">
      <div className="counter-card">
        <h1 className="counter-title">🌟 Counter App 🌟</h1>
        <div className="counter-display">Count: {count}</div>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>➕ Increment</button>
          <button onClick={handleIncrement}>🔼 Increment by Function</button>
          <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
          <button onClick={handleDecrement}>🔽 Decrement by Function</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
