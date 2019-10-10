import React from 'react';

import './App.scss';
import Display from './components/Display';
import KeyPad from './components/KeyPad';

export default function App() {
  return (
    <div className="App">
      <p className="heading">Calculator</p>
      <Display />
      <KeyPad />

    </div>
  );
}
