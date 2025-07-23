import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();

  function addition() {
    setResult(Number(n1) + Number(n2));
  }

  function division() {
    if (n2 == 0) {
      setResult("Can't divide by Zero");
    } else {
      setResult(Number(n1) / Number(n2));
    }
  }

  function multiplication() {
    setResult(Number(n1) * Number(n2));
  }

  function substraction() {
    setResult(Number(n1) - Number(n2));
  }

  function modulus() {
    if (n2 == 0) {
      setResult("Can't divide by Zero");
    } else {
      setResult(Number(n1) % Number(n2));
    }
  }

  return (
    <div className="section text-center">
      <h3>🔢 Simple Calculator</h3>
      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setN1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setN2(e.target.value)}
      />
      <div className="result-box">{result}</div>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={addition}>+</button>
        <button className="btn btn-secondary" onClick={substraction}>-</button>
        <button className="btn btn-success" onClick={multiplication}>*</button>
        <button className="btn btn-warning" onClick={division}>/</button>
        <button className="btn btn-danger" onClick={modulus}>%</button>
      </div>
    </div>
  );
};

export default Calculator;
