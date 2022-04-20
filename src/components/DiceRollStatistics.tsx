import classNames from 'classnames';
import { IDiceRollStatistics, IStatistic } from '../model/StatisticsInterfaces';

export interface IDiceRollStatisticsProps {
  diceRollStatistics: IDiceRollStatistics;
}

const DiceRollStatistics: React.FunctionComponent<IDiceRollStatisticsProps> = (
  props: IDiceRollStatisticsProps
) => {
  return (
    <div className="dice-roll-statistics">
      <div className="total">{props.diceRollStatistics.rollCount} {props.diceRollStatistics.rollType} rolls</div>
      {Object.values(props.diceRollStatistics.statisticData)
        .filter((s: IStatistic) => s.shouldDisplay)
        .map((s: IStatistic) => (
          <div className={classNames('statistic', { tooltip: s.tooltipText })}>
            <span className="name">{s.name}:</span> <span className="value">{s.value}</span>
            {s.tooltipText && <span className="tooltip-text">{s.tooltipText}</span>}
          </div>)
        )
      }
    </div>
  );
};

export default DiceRollStatistics;