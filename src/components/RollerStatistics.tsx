import { IDiceRollStatistics } from '../model/StatisticsInterfaces';
import DiceRollStatistics from './DiceRollStatistics';

export interface IRollerStatisticsProps {
  rollerName: string;
  diceRollStatistics: IDiceRollStatistics[];
}

/**
 * @summary Renders a roller's dice roll statistics.
 */
const RollerStatistics: React.FunctionComponent<IRollerStatisticsProps> = (
  props: IRollerStatisticsProps
) => {
  return (
    <div className="roller-statistics">
      <div className="roller-name">{props.rollerName}</div>
      {props.diceRollStatistics.map((diceRollStatistics: IDiceRollStatistics) => (
        <DiceRollStatistics key={diceRollStatistics.rollType} diceRollStatistics={diceRollStatistics} />
      ))}
    </div>
  );
};

export default RollerStatistics;