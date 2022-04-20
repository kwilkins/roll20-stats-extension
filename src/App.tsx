import { useState, useEffect, useCallback } from 'react';

import { GroupRollsByAlias, CalculateStatistics } from './services/StatisticsService';
import { Roll20Hostname } from './config/roll20Config';
import { AppMessageType } from './config/appConfig';
import { IRollData } from './model/DiceRollInterfaces';
import { IDiceRollerStatistics } from './model/StatisticsInterfaces';
import RollerAliasInputList from './components/RollerAliasInputList';
import RollerStatisticsList from './components/RollerStatisticsList';

// TODO #6 This component is bad and needs to be CAST OUT...or just completely rewritten
const App: React.FunctionComponent = () => {
  const [currentTabId, setCurrentTabId] = useState<undefined | number>(undefined);
  const [isErrorWithRoll20Tab, setIsErrorWithRoll20Tab] = useState(false);
  // TODO create interface structure for actual message data we expect
  const [message, setMessage] = useState<any>(undefined);
  const [playerStatistics, setPlayerStatistics] = useState<IDiceRollerStatistics[]>([]);
  const [aliasMap, setAliasMap] = useState<Record<string, string>>({});

  const loadCurrentTabStateValueMemo = useCallback(async () => {
    const queryOptions = { active: true, currentWindow: true };
    const [tab] = await window.chrome.tabs.query(queryOptions);

    if (!!tab.url
      && (new URL(tab.url)).hostname === Roll20Hostname
      && tab.id) {
      setCurrentTabId(tab.id);
    } else {
      setIsErrorWithRoll20Tab(true);
    }

  }, [setCurrentTabId, setIsErrorWithRoll20Tab]);
  const updateAliasMapMemo = useCallback((rollerName: string, alias: string) => {
    setAliasMap(prevState => {
      return {
        ...prevState,
        [rollerName]: alias
      };
    });
  }, [setAliasMap]);
  const calculateStatsMemo = useCallback((rollData: IRollData, aliasMap: Record<string, string>): void => {
    setPlayerStatistics([]);
  
    const groupedRolls = GroupRollsByAlias(rollData, aliasMap);
    const playerStatistics = CalculateStatistics(groupedRolls);
  
    setPlayerStatistics(playerStatistics);
  }, [setPlayerStatistics]);

  useEffect(() => {
    loadCurrentTabStateValueMemo();
  }, [/* Calling this once on mount */]);
  useEffect(() => {
    if (currentTabId) {
      // TODO abstract all the chrome bullshit into it's own service
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
            tabId: currentTabId
          }
        },
        () => {
          (window as any).chrome.scripting.executeScript(
            {
              files: ['roll20_chat_parser.js'],
              target: {
                tabId: currentTabId
              }
            });
        });
    }
  }, [currentTabId]);

  return (
    <div className="roll20-statistics-app">
      {currentTabId === undefined &&
        <span>Loading...</span>
      }
      {isErrorWithRoll20Tab &&
        <span>Only works on roll20.net game logs</span>
      }
      {message?.error &&
        <span>{message.error}</span>
      }
      {message?.data &&
        <>
          <div className="parsed-results">
            Found {message.data.d20Rolls?.length} d20 rolls for {message.data.rollerNames?.length} players.
          </div>
          <RollerAliasInputList rollerNames={message.data.playerNames} onAliasChangeCallback={updateAliasMapMemo} />
          <button className="calculate-stats" onClick={() => calculateStatsMemo(message.data, aliasMap)}>
            Calculate Stats!
          </button>
          {!!playerStatistics?.length &&
            <RollerStatisticsList diceRollerStatistics={playerStatistics} />
          }
        </>
      }
    </div>
  );
};

export default App;
