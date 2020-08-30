import React, { useState, useEffect } from 'react';

import logo from './logo.svg';

const App = () => {
  const [message, setMessage] = useState('Nothing yet...');
  useEffect(() => {
    window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log(message);
      console.log(message.type);
      console.log(message.type === 'ROLL20_STATS_EXTENSION');
      if (message.type === 'ROLL20_STATS_EXTENSION') {
        if (message.error) {
          setMessage(message.error);
        } else {
          setMessage(message.data);
        }
      }
    });

    window.chrome.tabs.executeScript(
      {
        file: 'jquery-2.1.0.min.js'
      }, () => {
        window.chrome.tabs.executeScript(
          {
            file: 'roll20_chat_parser.js'
          }
        );
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
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
    </div>
  );
}

export default App;
