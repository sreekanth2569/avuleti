import React, { useState } from 'react';

const Counter = () => {
  const [count, setCOunt] = useState(0);

  const handleCount = () => {
    setCOunt(prev => prev + 1);
  };
  return (
    <div>
      <h1>hi</h1>
      <h1>count {count}</h1>
      <button onClick={handleCount}> incremtnt </button>
    </div>
  );
};

export default Counter;
