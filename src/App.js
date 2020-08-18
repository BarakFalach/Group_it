import React from 'react';
import './App.css';
import {Person} from './PersonClass';

const barak = new Person(312470396 , 100);

const a = barak.toString();
console.log(a);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button>this is a person</button>
<p>
  {a}
  </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
