import React, { useState } from 'react';

const Counter = () => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
  ];

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>Hi</h1>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increment</button>

      <div style={{ marginTop: '20px' }}>
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Placeholder ${150 + index * 50}px`}
            style={{ width: '100px', marginRight: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Counter;
