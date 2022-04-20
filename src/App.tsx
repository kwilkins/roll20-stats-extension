import { useState, useEffect, useCallback } from 'react';

import { GroupRollsByAlias, CalculateStatistics } from './services/StatisticsService';
import PlayerStatistics from './components/PlayerStatistics';
import { Roll20Hostname } from './config/roll20Config';
import { AppMessageType } from './config/appConfig';
import { IRollData } from './model/DiceRollInterfaces';
import { IDiceRollerStatistics } from './model/StatisticsInterfaces';

// TODO #6 This component is bad and needs to be CAST OUT...or just completely rewritten
const App = () => {
  const [currentTab, setCurrentTab] = useState<any>(undefined);
  const [message, setMessage] = useState<any>('Nothing yet...');
  const [playerStatistics, setPlayerStatistics] = useState<IDiceRollerStatistics[]>([]);
  const [aliasMap, setAliasMap] = useState({});

  const loadCurrentTabStateValue = useCallback(async () => {
    const queryOptions = { active: true, currentWindow: true };
    const [tab] = await window.chrome.tabs.query(queryOptions);

    if (!!tab.url && (new URL(tab.url)).hostname === Roll20Hostname) {
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
        if (message.type === AppMessageType) {
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
          files: ['jquery-2.1.0.min.js'],
          target: {
            tabId: currentTab.id
          }
        },
        () => {
          (window as any).chrome.scripting.executeScript(
            {
              files: ['roll20_chat_parser.js'],
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
              {playerStatistics.map((ps) => (<PlayerStatistics {...ps} />))}
            </>
          }
        </>
      }
    </div>
  );
};

const renderPlayerInputs = (playerNames: string[], setAliasMap: React.Dispatch<React.SetStateAction<{}>>) => {
  return (
    playerNames.map((name: string) => {
      return (
        <div key={name}>
          <input className="alias" data-roll20name={name} onChange={(e) => updateAliasMap(e, setAliasMap)} placeholder={name} />
          {name}
        </div>
      );
    })
  );
};

const updateAliasMap = (e: React.ChangeEvent<HTMLInputElement>, setAliasMap: React.Dispatch<React.SetStateAction<{}>>) => {
  const playerName = e.target.getAttribute('data-roll20name') ?? 'never-used';
  const aliasName = e.target.value || playerName;
  setAliasMap(prevState => {
    return {
      ...prevState,
      [playerName]: aliasName
    };
  });
};

const calculateStats = (rollData: IRollData, aliasMap: Record<string, string>, setPlayerStatistics: React.Dispatch<React.SetStateAction<IDiceRollerStatistics[]>>) => {
  setPlayerStatistics([]);

  const groupedRolls = GroupRollsByAlias(rollData, aliasMap);
  const playerStatistics = CalculateStatistics(groupedRolls);

  setPlayerStatistics(playerStatistics);
};

export default App;
