/* eslint-disable linebreak-style */
import React from 'react';
import Key from './Key';
const keys = ['/', '*', '-', 7, 8, 9, '+', 4, 5, 6, 1, 2, 3, 0, '.', '='];

export default function KeyPad() {
  return (
    <div className="KeyPad">
      {keys.map(key => <Key key={key} button={key} />)};
    </div>
  );
}
