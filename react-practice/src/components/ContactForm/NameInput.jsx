import React from 'react';

const NameInput = ({ inputType, onchange, value }) => {
  return (
    <>
    <h2 style={{textAlign: "center", fontSize: "40px"}}>Contact Form</h2>
    <div>
      <input
        type={inputType}
        placeholder='Add Your Name Here'
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
    </div>
    </>
  );
};

export default NameInput;
