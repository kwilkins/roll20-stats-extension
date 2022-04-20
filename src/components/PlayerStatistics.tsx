import classNames from 'classnames';
import { IDiceRollStatistics, IStatistic } from '../model/StatisticsInterfaces';

export interface IPlayerStatisticsProps {
  rollerName: string;
  diceRollStatistics: IDiceRollStatistics[];
}

const PlayerStatistics: React.FunctionComponent<IPlayerStatisticsProps> = (
  props: IPlayerStatisticsProps
) => {
  return (
    <div className="player-statistics">
      <div className="player-name">{props.rollerName}</div>
      <div className="statistics">
        {renderStatistics(props.diceRollStatistics)}
      </div>
    </div>
  );
};

const renderStatistics = (diceRollStatistics: IDiceRollStatistics[]) => {
  return diceRollStatistics.map((st: IDiceRollStatistics) => (
    <div className="statistic-type">
      <div className="total">{st.rollCount} {st.rollType} rolls</div>
      {Object.values(st.statisticData)
        .filter((s: IStatistic) => s.shouldDisplay)
        .map((s) => (
          <div className={classNames('statistic', { tooltip: s.tooltipText })}>
            <span className="name">{s.name}:</span> <span className="value">{s.value}</span>
            {s.tooltipText && <span className="tooltip-text">{s.tooltipText}</span>}
          </div>)
        )
      }
    </div>)
  );
};

export default PlayerStatistics;