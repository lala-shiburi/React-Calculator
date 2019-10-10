/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';

function Output(props) {
  const {answer} = props;
  return (
    <div className="answer">

      <p>{answer}</p>

    </div>
  );
}

function mapStateToProps(state) {
  return { answer: state.answer };
}

export default connect(mapStateToProps)(Output);
