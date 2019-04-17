/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input } = this.props;
    return (
      <input id="display" type="text" className="Operation" value={input} readOnly />
    );
  }
}

function mapStateToProps(state) {
  // const { todos } = state
  return { input: state.input };
}

export default connect(mapStateToProps)(Input);
