import React, { useState } from 'react';

const Fruits = () => {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);

  return (
    <div className="text-center my-3">
      <h4 style={{ color: '#ff9800' }}>{fruits[2]}</h4>
    </div>
  );
};

export default Fruits;
