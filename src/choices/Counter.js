import React, { useState } from 'react';

const Counter = () => {
  const images = [
    'https://images.pexels.com/photos/32081298/pexels-photo-32081298/free-photo-of-ornate-decorative-faucet-with-colorful-tile-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/32284698/pexels-photo-32284698/free-photo-of-charming-house-with-blooming-roses-and-red-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/31540692/pexels-photo-31540692/free-photo-of-delicious-dessert-with-fresh-berries-and-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prev => prev + 1);
  };

  const handleMinu = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h1>Hi</h1>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increment</button>\
      <button onClick={handleMinu}>decrement</button>
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
