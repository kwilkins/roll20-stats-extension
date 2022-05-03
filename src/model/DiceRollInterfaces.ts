export enum DiceRollType {
  d100 = 'd100',
  d20 = 'd20',
  d12 = 'd12',
  d10 = 'd10',
  d8 = 'd8',
  d6 = 'd6',
  d4 = 'd4',
  twod6 = '2d6'
}

export enum RollDataDiceRollsPropertyName {
  d20 = 'd20Rolls'
}

/**
 * Represents roll data found within a game log.
 */
export interface IRollData {
  [RollDataDiceRollsPropertyName.d20]: IRollRecord[],
  rollerNames: string[]
  // only d20 scores for now...
  // can we determine damage rolls?
  // 2d6?
}

/**
 * Represents a single roll record.
 */
export interface IRollRecord {
  rollerName: string,
  result: string
}

/**
 * Represents a list of roll results according to the type of dice rolled.
 */
export interface IRollResults {
  [DiceRollType.d20]: string[] 
}