import React from 'react';

const Greetings = (props) => {
  console.log(props);
  console.log(props.studName);

  return (
    <div className="text-center my-3">
      <h3 className="text-success">Hello {props.studName}</h3>
      <p className="text-muted">You got {props.marks} marks</p>
    </div>
  );
};

export default Greetings;
