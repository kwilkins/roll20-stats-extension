import { IDiceRollerStatistics } from '../model/StatisticsInterfaces';
import RollerStatistics from './RollerStatistics';

export interface IRollerAliasInputListProps {
  diceRollerStatisticsList: IDiceRollerStatistics[];
}

/**
 * @summary Renders a list of roller statistics.
 */
const RollerStatisticsList: React.FunctionComponent<IRollerAliasInputListProps> = (
  props: IRollerAliasInputListProps
) => {

  return (
    <div className="roller-statistics-list">
      {props.diceRollerStatisticsList.map((rollerStatistics: IDiceRollerStatistics) => (
        <RollerStatistics key={rollerStatistics.rollerName} {...rollerStatistics} />
      ))}
    </div>
  );
};

export default RollerStatisticsList;