import { useState, useEffect, useCallback } from 'react';

import { GroupRollsByAlias, CalculateStatistics } from './services/StatisticsService';
import * as Roll20DiceRollService from './services/Roll20DiceRollService';
import { IRollData } from './model/DiceRollInterfaces';
import { IDiceRollerStatistics } from './model/StatisticsInterfaces';
import RollerAliasInputList from './components/RollerAliasInputList';
import RollerStatisticsList from './components/RollerStatisticsList';

// TODO #6 This component is bad and needs to be CAST OUT...or just completely rewritten
const App: React.FunctionComponent = () => {
  const [errorMessageFromFetchingRoll20Data, setErrorMessageFromFetchingRoll20Data] = useState<string>();
  // TODO create interface structure for actual message data we expect
  const [roll20DiceRollData, setRoll20DiceRollData] = useState<any>(undefined);
  const [playerStatistics, setPlayerStatistics] = useState<IDiceRollerStatistics[]>([]);
  const [aliasMap, setAliasMap] = useState<Record<string, string>>({});

  const handleAsyncFetchRoll20DiceRollDataMemo = useCallback(async (): Promise<void> => {
    try {
      const data = await Roll20DiceRollService.fetchRoll20DiceRollData();
      if (data) {
        const baseAliasMap = {};
        data.playerNames.map((name: string) => baseAliasMap[name] = name);
        setAliasMap(baseAliasMap);
      }

      setRoll20DiceRollData(data);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessageFromFetchingRoll20Data(error.message);
      } else {
        setErrorMessageFromFetchingRoll20Data('An unknown error occured.');
      }
    }
  }, [setAliasMap, setRoll20DiceRollData, setErrorMessageFromFetchingRoll20Data]);
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
    handleAsyncFetchRoll20DiceRollDataMemo();
  }, [/* Calling this once on mount */]);

  return (
    <div className="roll20-statistics-app">
      {roll20DiceRollData === undefined && !errorMessageFromFetchingRoll20Data &&
        <span>Loading...</span>
      }
      {errorMessageFromFetchingRoll20Data &&
        <span className="error-message">{errorMessageFromFetchingRoll20Data}</span>
      }
      {roll20DiceRollData &&
        <>
          <div className="parsed-results">
            Found {roll20DiceRollData.d20Rolls?.length} d20 rolls for {roll20DiceRollData.rollerNames?.length} players.
          </div>
          <RollerAliasInputList rollerNames={roll20DiceRollData.playerNames} onAliasChangeCallback={updateAliasMapMemo} />
          <button className="calculate-stats" onClick={() => calculateStatsMemo(roll20DiceRollData, aliasMap)}>
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
