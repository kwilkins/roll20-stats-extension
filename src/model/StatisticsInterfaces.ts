import { DiceRollType } from './DiceRollInterfaces'

export const d20StatisticDisplayNames = {
  average: 'Average',
  twentyCount: '# of 20s',
  max: 'Max',
  oneCount: '# of 1s',
  min: 'Min',
  mostCommon: 'Most Common Roll'
}

export interface IDiceRollerStatistics {
  rollerName: string;
  diceRollStatistics: IDiceRollStatistics[]
}

export interface IDiceRollStatistics {
  rollCount: number,
  rollType: DiceRollType,
  statisticData: IUserStatisticData
}

export interface IUserStatisticData {
  average: IStatistic
  twentyCount: IStatistic
  max: IStatistic
  oneCount: IStatistic
  min: IStatistic
  mostCommon: IStatistic
}

export interface IStatistic {
  name: string;
  value: number;
  tooltipText?: string;
  shouldDisplay: boolean;
}
