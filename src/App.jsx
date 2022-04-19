import React, { useState, useEffect, useCallback } from 'react';

import { GroupRollsByAlias, CalculateStatistics } from './services/StatisticsService';
import PlayerStatistics from './components/PlayerStatistics';

const App = () => {
  const [currentTab, setCurrentTab] = useState(undefined);
  const [message, setMessage] = useState('Nothing yet...');
  const [playerStatistics, setPlayerStatistics] = useState([]);
  const [aliasMap, setAliasMap] = useState({});

  const loadCurrentTabStateValue = useCallback(async () => {
    const queryOptions = { active: true, currentWindow: true };
    const [tab] = await window.chrome.tabs.query(queryOptions);
    const tabUrl = new URL(tab.url);

    if (tabUrl.hostname === 'app.roll20.net') {
      setCurrentTab(tab);
    } else {
      setCurrentTab(null);
    }

  }, []);

  useEffect(() => {
    loadCurrentTabStateValue();
  }, []);

  useEffect(() => {
    if (currentTab) {
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
  
      window.chrome.scripting.executeScript(
        {
          files: [ 'jquery-2.1.0.min.js' ],
          target: {
            tabId: currentTab.id
          }
        },
        () => {
          window.chrome.scripting.executeScript(
            {
              files: [ 'roll20_chat_parser.js' ],
              target: {
                tabId: currentTab.id
              }
            });
      });
    }
  }, [currentTab]);

  return (
    <div className="App">
      {currentTab === undefined &&
        <span>Loading...</span>
      }
      {currentTab === null &&
        <span>Only works on roll20.net game logs</span>
      }
      {message.error &&
        <span>{message.error}</span>
      }
      {message.data &&
        <>
          <div className="parsed-results">
            <div>Found {message.data.d20Rolls.length} d20 rolls for {message.data.playerNames.length} players.</div>
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
