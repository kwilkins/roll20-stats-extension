import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Nothing yet...');
  const [shouldDisplayStats, setShouldDisplayStats] = useState(false);
  const [aliasMap, setAliasMap] = useState({});
  useEffect(() => {
    window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'ROLL20_STATS_EXTENSION') {
        if (message.data) {
          const baseAliasMap = {};
          message.data.playerNames.map((name) => baseAliasMap[name] = name);
          setAliasMap(baseAliasMap);
        }
        setMessage(message);
      }
    });

    window.chrome.tabs.executeScript({ file: 'jquery-2.1.0.min.js' }, () => {
      window.chrome.tabs.executeScript({ file: 'roll20_chat_parser.js' });
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
            {renderPlayerInputs(message.data.playerNames, setAliasMap)}
            <button className="calculate-stats" onClick={() => calculateStats(setShouldDisplayStats)}>Calculate Stats!</button>
          </div>
          {shouldDisplayStats &&
            <>
              <span>Player Stats Here!</span>
              <ul>
                {Object.keys(groupRolls(message.data, aliasMap)).map((key) => (<li>{key}</li>))}
              </ul>
            </>
          }
        </>
      }
    </div>
  );
};

const renderPlayerInputs = (playerNames, setAliasMap) => {
  return (
    playerNames.map((name) => {
      return (
        <div>
          <input className="alias" data-roll20name={name} onChange={(e) => updateAliasMap(e, setAliasMap)} placeholder={name} />
          {name}
        </div>
      );
    })
  );
};

const updateAliasMap = (e, setAliasMap) => {
  const playerName = e.target.getAttribute('data-roll20name');
  const aliasName = e.target.value || playerName;
  setAliasMap(prevState => {
    return {
      ...prevState,
      [playerName]: aliasName
    };
  });
};

const calculateStats = (setShouldDisplayStats) => {
  setShouldDisplayStats(false);

  setShouldDisplayStats(true);
};

const groupRolls = (rollData, aliasMap) => {
  const groupedRolls = {};

  rollData.d20Rolls.forEach((roll) => {
    const playerKey = aliasMap[roll.roller] || roll.roller;
    if (!groupedRolls[playerKey]) {
      groupedRolls[playerKey] = { d20: [] };
    }
    groupedRolls[playerKey].d20.push(roll.result);
  });

  return groupedRolls;
}

export default App;
