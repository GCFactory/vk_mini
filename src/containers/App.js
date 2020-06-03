import React from 'react';
import './App.css';

import List from './List';


function App() {
  let arr = ['a1', 'a2', 'a3'];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <List list={arr}/>
    </div>
  );
}

export default App;
