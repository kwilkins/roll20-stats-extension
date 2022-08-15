export const DiceRollD100Name = 'd100',
  DiceRollD20Name = 'd20',
  DiceRollD12Name = 'd12',
  DiceRollD10Name = 'd10',
  DiceRollD8Name = 'd8',
  DiceRollD6Name = 'd6',
  DiceRollD4Name = 'd4',
  DiceRoll2D6Name = '2d6';
export const DiceRollTypeValues = [ DiceRollD100Name, DiceRollD20Name, DiceRollD12Name, DiceRollD10Name, DiceRollD8Name, DiceRollD6Name, DiceRollD4Name, DiceRoll2D6Name ];
export type DiceRollType = (typeof DiceRollTypeValues)[number];

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
  [DiceRollD20Name]: string[] 
}