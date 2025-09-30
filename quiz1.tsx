import React, { useState } from 'react';

const Counter = () => {
  const [initialValue, setInitialValue] = useState(0);

  const handleIncrement = () => {
    setInitialValue(initialValue + 1);
  };

  const handleDecrement = () => {
    if (initialValue > 0) {
      setInitialValue(initialValue - 1);
    }
  };

  return (
    <div>
      <button onClick={handleIncrement} className='incrementbtn'>Increment</button>
      <button onClick={handleDecrement} className='decrementbtn'>Decrement</button>
      <h1>Current count: {initialValue}</h1>
    </div>
  );
};

export default Counter;
