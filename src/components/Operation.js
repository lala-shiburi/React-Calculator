/* eslint-disable linebreak-style */
import React, { Component } from 'react';

export default class Operation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operation: 'this is where the operation goes',
    };
  }

  render() {
    const { operation } = this.state;
    return (
      <div className="Operation"><p>{operation}</p></div>
    );
  }
}
