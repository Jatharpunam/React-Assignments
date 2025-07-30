import React from 'react';

const MessageInput = ({ onchange, value }) => {
  return (
    <div>
      <textarea
        placeholder='Add Message Here'
        value={value}
        onChange={(e) => onchange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default MessageInput;
