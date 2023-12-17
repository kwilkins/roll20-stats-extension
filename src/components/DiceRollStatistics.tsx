import { IDiceRollStatistics, IStatistic } from '../model/StatisticsInterfaces';
import { Tooltip } from '@fluentui/react-components';
import { Info16Regular } from '@fluentui/react-icons';

export interface IDiceRollStatisticsProps {
  diceRollStatistics: IDiceRollStatistics;
}

/**
 * @summary Renders dice roll statistics.
 */
const DiceRollStatistics: React.FunctionComponent<IDiceRollStatisticsProps> = (
  props: IDiceRollStatisticsProps
) => {
  return (
    <div className="dice-roll-type">
      <div className="total">{props.diceRollStatistics.rollCount} {props.diceRollStatistics.rollType} rolls</div>
      <div className="dice-roll-statistics">
        {Object.values(props.diceRollStatistics.statisticData)
          .filter((statistic: IStatistic) => statistic.shouldDisplay)
          .map((statistic: IStatistic) => (
            <div key={statistic.name} className="statistic">
              <span className="name">{statistic.name}:</span>
              {' '}
              <span className="value">{statistic.value}</span>
              {statistic.tooltipText && (
                <>
                  {' '}
                  <Tooltip content={statistic.tooltipText} relationship="description" {...props}>
                    <Info16Regular tabIndex={0} />
                  </Tooltip>
                </>
              )}
            </div>)
          )
        }
      </div>
    </div>
  );
};

export default DiceRollStatistics;