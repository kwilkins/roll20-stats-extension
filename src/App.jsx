import React, { useState, useEffect } from 'react';

import { GroupRollsByAlias, CalculateStatistics } from './services/StatisticsService';
import PlayerStatistics from './components/PlayerStatistics';

const App = () => {
  const [message, setMessage] = useState('Nothing yet...');
  const [playerStatistics, setPlayerStatistics] = useState([]);
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
            <button className="calculate-stats" onClick={() => calculateStats(message.data, aliasMap, setPlayerStatistics)}>Calculate Stats!</button>
          </div>
          {!!playerStatistics.length &&
            <>
              {playerStatistics.map((ps) => (<PlayerStatistics {...ps} />) )}
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
        <div key={name}>
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

const calculateStats = (rollData, aliasMap, setPlayerStatistics) => {
  setPlayerStatistics([]);
  
  const groupedRolls = GroupRollsByAlias(rollData, aliasMap);
  const playerStatistics = CalculateStatistics(groupedRolls);

  setPlayerStatistics(playerStatistics);
};

export default App;
