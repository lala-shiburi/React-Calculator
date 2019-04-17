/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clear, decimal, numbers, equals } from '../redux/actions';

class Key extends Component {
  render() {
    const {
      equals, operators, clear, numbers, decimal,
    } = this.props;
    return (
      <div>
        <button id="clear" value="ac" onClick={clear}>AC</button>
        <button id="divide" value="/" onClick={e => numbers(e.target.value)}>/</button>
        <button id="multiply" value="*" onClick={e => numbers(e.target.value)}>*</button>
        <button id="subtract" value="-" onClick={e => numbers(e.target.value)}>-</button>
        <button id="seven" value="7" onClick={e => numbers(e.target.value)}>7</button>
        <button id="eight" value="8" onClick={e => numbers(e.target.value)}>8</button>
        <button id="nine" value="9" onClick={e => numbers(e.target.value)}>9</button>
        <button id="add" value="+" onClick={e => numbers(e.target.value)}>+</button>
        <button id="four" value="4" onClick={e => numbers(e.target.value)}>4</button>
        <button id="five" value="5" onClick={e => numbers(e.target.value)}>5</button>
        <button id="six" value="6" onClick={e => numbers(e.target.value)}>6</button>
        <button id="one" value="1" onClick={e => numbers(e.target.value)}>1</button>
        <button id="two" value="2" onClick={e => numbers(e.target.value)}>2</button>
        <button id="three" value="3" onClick={e => numbers(e.target.value)}>3</button>
        <button id="zero" value="0" onClick={e => numbers(e.target.value)}>0</button>
        <button id="decimal" value="." onClick={e => numbers(e.target.value)}>.</button>
        <button id="equals" value="=" onClick={equals}>=</button>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
 clear, decimal, numbers, equals 
}, dispatch);

export default connect(null, mapDispatchToProps)(Key);
