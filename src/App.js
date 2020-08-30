import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Nothing yet...');
  const [statData, setStatData] = useState(null);
  useEffect(() => {
    window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'ROLL20_STATS_EXTENSION') {
        setMessage(message);
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
      {message.error &&
        <span>{message.error}</span>
      }
      {message.data &&
        <>
          <div className="parsed-results">
            <div>Found rolls for {message.data.playerNames.length} players.</div>
            {renderPlayerInputs(message.data.playerNames)}
            <button className="calculate-stats" onClick={() => calculateStats(setStatData)}>Calculate Stats!</button>
          </div>
          <div className="player-list">
            {statData &&
              'Player Stats Here!'
            }
          </div>
        </>
      }
    </div>
  );
};

const renderPlayerInputs = (playerNames) => {
  return (
    playerNames.map((name) => {
      return (
        <div>
          <input id={`alias-${name}`} placeholder={name} />
          {name}
        </div>
      )
    })
  );
};

const calculateStats = (setStatData) => {
  setStatData(null);

  // actually calculate the stats...

  setStatData({ enabled: true });
}

export default App;
