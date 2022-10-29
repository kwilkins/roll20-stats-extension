import { useState, useEffect, useCallback } from 'react';

import * as ActiveTabScriptExecutor from './services/ActiveTabScriptExecutor';
import { IRollData } from './model/DiceRollInterfaces';
import * as StatisticsService from './services/StatisticsService';
import RollerStatisticsList from './components/RollerStatisticsList';
import { IDiceRollerStatistics } from './model/StatisticsInterfaces';
import Roll20ChatParser from './parsers/Roll20ChatParser';
import RollerPersonaList from './components/RollerPersonaList';

/**
 * @summary Renders the main app display and kicks off the roll data gathering process for the
 * active tab.
 */
const App: React.FunctionComponent = () => {
  const [errorMessageFromFetchingRoll20Data, setErrorMessageFromFetchingRoll20Data] = useState<string>();
  const [roll20DiceRollData, setRoll20DiceRollData] = useState<undefined | IRollData>(undefined);
  const [playerStatistics, setPlayerStatistics] = useState<IDiceRollerStatistics[]>([]);
  // TODO Create some model to better represent this now that we have a grouping system
  const [aliasMap, setAliasMap] = useState<Record<string, string>>({});

  const handleAsyncFetchRoll20DiceRollDataMemo = useCallback(async (): Promise<void> => {
    try {
      const response = await ActiveTabScriptExecutor.fetchRoll20ChatDOM();
      if (response.error) {
        setErrorMessageFromFetchingRoll20Data(response.error.message);
      } else if (response.roll20ChatDOM) {
        const rollData = new Roll20ChatParser().parseRollDataFromRoll20ChatDOM(response.roll20ChatDOM);
        setRoll20DiceRollData(rollData);
        
        const baseAliasMap: Record<string, string> = {};
        rollData.rollerNames.map((name: string) => baseAliasMap[name] = name);

        setAliasMap(baseAliasMap);
      } else {
        throw new SyntaxError('Response from tab script execution was incorrect.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessageFromFetchingRoll20Data(error.message);
      } else {
        setErrorMessageFromFetchingRoll20Data('An unknown error occured.');
      }
    }
  }, []);

  const updateAliasMapMemo = useCallback((rollerName: string, alias: string) => {
    setPlayerStatistics([]);
    setAliasMap(prevState => {
      return {
        ...prevState,
        [rollerName]: alias
      };
    });
  }, []);

  const calculateStatsMemo = useCallback((rollData: IRollData, aliasMap: Record<string, string>): void => {
    setPlayerStatistics([]);
  
    const playerStatistics = StatisticsService.CalculateStatistics(rollData, aliasMap);
  
    setPlayerStatistics(playerStatistics);
  }, []);

  useEffect(() => {
    handleAsyncFetchRoll20DiceRollDataMemo();
  }, [handleAsyncFetchRoll20DiceRollDataMemo]);

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
          <RollerPersonaList aliasMap={aliasMap} rollData={roll20DiceRollData} onAliasChangeCallback={updateAliasMapMemo} />
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
