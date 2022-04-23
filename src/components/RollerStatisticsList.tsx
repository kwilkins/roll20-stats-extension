import { IDiceRollerStatistics } from '../model/StatisticsInterfaces';
import RollerStatistics from './RollerStatistics';

export interface IRollerAliasInputListProps {
  diceRollerStatistics: IDiceRollerStatistics[];
}

const RollerStatisticsList: React.FunctionComponent<IRollerAliasInputListProps> = (
  props: IRollerAliasInputListProps
) => {

  return (
    <div className="roller-statistics-list">
      {props.diceRollerStatistics.map((ps) => (<RollerStatistics {...ps} />))}
    </div>
  );
};

export default RollerStatisticsList;