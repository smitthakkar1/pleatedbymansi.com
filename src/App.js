import React from 'react';
import logo from './logo.svg';
import instagram from './instagram.png';
import youtube from './youtube.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="PleatedHeader">
          <p className="Pleated">Pleated By Mansi</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Coming">
          Coming Soon ...
        </p>
        <div className="SocialContainer">
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
          <a
            className="App-link"
            href="https://www.youtube.com/channel/UCI8VjcgjbR4Yt_-vwnrXw-Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtube}
              alt="youtube" 
              className="Instagram" 
            />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
