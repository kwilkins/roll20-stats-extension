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

export interface IRollData {
  d20Rolls: IRollRecord[],
  playerNames: string[]
}

export interface IRollRecord {
  roller: string,
  result: string
}

export interface IRollResult {
  d20: string[] 
}