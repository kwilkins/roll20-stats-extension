import { useState, useEffect, useCallback } from 'react';

import * as ActiveTabScriptExecutor from './services/ActiveTabScriptExecutor';
import { IRollData } from './model/DiceRollInterfaces';
import * as StatisticsService from './services/StatisticsService';
import RollerStatisticsList from './components/RollerStatisticsList';
import { IDiceRollerStatistics } from './model/StatisticsInterfaces';
import Roll20ChatParser from './parsers/Roll20ChatParser';
import RollerPersonaList from './components/RollerPersonaList';
import { Roller } from './model/Roller';

/**
 * @summary Renders the main app display and kicks off the roll data gathering process for the
 * active tab.
 */
const App: React.FunctionComponent = () => {
  const [errorMessageFromFetchingRoll20Data, setErrorMessageFromFetchingRoll20Data] = useState<string>();
  const [roll20DiceRollData, setRoll20DiceRollData] = useState<undefined | IRollData>(undefined);
  const [playerStatistics, setPlayerStatistics] = useState<IDiceRollerStatistics[]>([]);
  const [rollerPersonaList, setRollerPersonaList] = useState<Roller[]>([]);

  const handleAsyncFetchRoll20DiceRollData = useCallback(async (): Promise<void> => {
    try {
      const response = await ActiveTabScriptExecutor.fetchRoll20ChatDOM();
      if (response.error) {
        setErrorMessageFromFetchingRoll20Data(response.error.message);
      } else if (response.roll20ChatDOM) {
        const rollData = new Roll20ChatParser().parseRollDataFromRoll20ChatDOM(response.roll20ChatDOM);
        setRoll20DiceRollData(rollData);
        
        const baseRollerList: Roller[] = rollData.rollerNames.map((name: string) => ({
          name,
          aliases: []
        }));

        setRollerPersonaList(baseRollerList);
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

  const handleGroupingRoller = useCallback((parentRollerName: string, childRollerName: string) => {
    setPlayerStatistics([]);
    setRollerPersonaList((prevState: Roller[]) => {
      const childRoller = prevState.find((roller: Roller) => roller.name === childRollerName);
      return prevState.map((roller: Roller) => roller.name === parentRollerName
        ? {
          ...roller,
          aliases: [
            ...roller.aliases,
            childRollerName,
            ...(childRoller?.aliases ?? [])
          ]
        }
        : roller);
    });
  }, []);

  const calculateStats = useCallback((rollData: IRollData, rollers: Roller[]): void => {
    setPlayerStatistics([]);
  
    const playerStatistics = StatisticsService.CalculateStatistics(rollData, rollers);
  
    setPlayerStatistics(playerStatistics);
  }, []);

  useEffect(() => {
    handleAsyncFetchRoll20DiceRollData();
  }, [handleAsyncFetchRoll20DiceRollData]);

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
          <RollerPersonaList rollers={rollerPersonaList} rollData={roll20DiceRollData} onRollerGroupingCallback={handleGroupingRoller} />
          <button className="calculate-stats" onClick={() => calculateStats(roll20DiceRollData, rollerPersonaList)}>
            Calculate Stats!
          </button>
          {!!playerStatistics?.length &&
            <RollerStatisticsList diceRollerStatisticsList={playerStatistics} />
          }
        </>
      }
    </div>
  );
};

export default App;
