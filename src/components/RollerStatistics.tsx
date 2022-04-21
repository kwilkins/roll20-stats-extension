import { IDiceRollStatistics } from '../model/StatisticsInterfaces';
import DiceRollStatistics from './DiceRollStatistics';

export interface IRollerStatisticsProps {
  rollerName: string;
  diceRollStatistics: IDiceRollStatistics[];
}

/**
 * @summary Renders a 
 */
const RollerStatistics: React.FunctionComponent<IRollerStatisticsProps> = (
  props: IRollerStatisticsProps
) => {
  return (
    <div className="roller-statistics">
      <div className="roller-name">{props.rollerName}</div>
      {props.diceRollStatistics.map((st: IDiceRollStatistics) => (
        <DiceRollStatistics diceRollStatistics={st} />))
      }
    </div>
  );
};

export default RollerStatistics;