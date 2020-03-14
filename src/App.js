import React from 'react';
import logo from './logo.svg';
import instagram from './instagram.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon ...
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/pleated_by_mansi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagram}
            alt="instagram" 
            className="Instagram" 
          />
        </a>
      </header>
    </div>
  );
}

export default App;
