import React, { useState } from 'react';

const ChangeHeading = () => {
  const [heading, setHeading] = useState('Learned HTML CSS JavaScript');

  function handleChangeHeading() {
    setHeading('Now learning ReactJS');
  }

  return (
    <div className="changeHeading text-center my-4">
      <h2 className="text-primary">{heading}</h2>
      <button className="btn btn-outline-success mt-2" onClick={handleChangeHeading}>
        Change Heading
      </button>
    </div>
  );
};

export default ChangeHeading;
