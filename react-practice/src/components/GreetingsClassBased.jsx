import React from 'react';

class GreetingsClassBased extends React.Component {
  render() {
    const name = this.props.studName;

    return <h1 className="text-center text-info">Hello {name}</h1>;
  }
}

export default GreetingsClassBased;
