/* eslint-disable linebreak-style */
import React, { Component } from 'react';

export default class Answer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      answer: 'this is where the answer appears',
    };
  }

  render() {
    const { answer } = this.state;
    return (
      <div className="Answer">

        <p>{answer}</p>
      </div>
    );
  }
}
