import { IRollData, RollDataDiceRollsPropertyName } from '../model/DiceRollInterfaces';

// TODO can we move this into function scope?
let lastMessageBy: string;
let parsedRoll20Data: IRollData;

/**
 * @description Parses the roll data from the Roll20 chat DOM.
 * @param {Document} roll20ChatDOM The DOM containing the Roll20 chat .content.
 * @returns {IRollData} The parsed roll data.
 */
export const parseRollDataFromRoll20ChatDOM = (roll20ChatDOM: Document): IRollData => {
  console.log('starting roll20 chat parser...');
  lastMessageBy = '';
  parsedRoll20Data = {
    [RollDataDiceRollsPropertyName.d20]: [],
    rollerNames: []
  };
  console.log('properties initialized...');

  try {
    const chatMessages = roll20ChatDOM.querySelectorAll('.content > .message');
    chatMessages.forEach(processMessage);

    parsedRoll20Data.rollerNames = [...new Set(parsedRoll20Data.rollerNames)];

    if (parsedRoll20Data.rollerNames.length) {
      console.log('finished parsing results.');
      return parsedRoll20Data;
    } else {
      throw new RangeError('No player messages were found in the chat.');
    }
  } catch (error) {
    console.log('an error occured during parsing.');
    console.log(error);

    throw error instanceof Error
      ? new ReferenceError(error.message, { cause: error })
      : new ReferenceError('An unexpected error occured.');
  }
};

const processMessage = (messageElement: Element, key: number) => {
  const byElement = messageElement.querySelector('.by');
  if (byElement) {
    // if this message has a player name associated with it, we keep it
    // for repeat messages
    const messageSenderText = byElement.textContent;
    lastMessageBy = messageSenderText?.substring(0, messageSenderText.lastIndexOf(':')).trim() ?? '';
  }

  if (messageElement.className.includes('rollresult')) {
    handleStandardRoll(messageElement);
  } else if (messageElement.querySelector('div[class^=\'sheet-rolltemplate\']')) {
    handleRoll20CharacterSheetTemplateRoll(messageElement);
  } else if (false) {
    handleBeyond20ExtensionTemplateRoll(messageElement);
  }
};

const handleStandardRoll = (messageElement: Element): void => {
  // This message is a standard roll20 d20 dice roll
  const standardD20RollSelector = messageElement.querySelectorAll('.diceroll.d20');
  if (standardD20RollSelector.length) {
    standardD20RollSelector.forEach((standardD20DiceRollElement: Element, key: number) => {
      const rollResult = standardD20DiceRollElement.querySelector('.didroll')?.textContent;
      if (rollResult) {
        addD20RollResult(lastMessageBy, rollResult);
      }
    });
  }
};

// TODO Take into account templated rolls that roll twice, marked with .sheet-adv
// When the sheet is set to 'Advantage Toggle' the 'ignored' value is contained by .sheet-grey
// When the sheet is set to 'Always Roll Advantage' it just rolls two values
const handleRoll20CharacterSheetTemplateRoll = (messageElement: Element): void => {
  const inlineRollSelector = messageElement.querySelectorAll('span.inlinerollresult');
  if (inlineRollSelector.length) {
    inlineRollSelector.forEach((inlineD20DiceRollElement: Element, key: number) => {
      // For whatever reason the inline rolls use an html element attribute
      // named "original-title" which is NOT a valid attribute name, proper
      // browser parsing separates this into two attributes which usually
      // leaves title as the one we want to look for(this is why we search
      // for both).
      // TODO: possible bug due to this interaction, we might consider importing ALL of the text chat into a DOMParser for us to use?
      const inlineRollTitleAttributeString = inlineD20DiceRollElement.getAttribute('title');
      // ? rollElement.getAttribute('title')
      // : rollElement.getAttribute('original-title');
      if (inlineRollTitleAttributeString?.includes('Rolling 1d20')) {
        const inlineRollAsDoc = new DOMParser().parseFromString(`<div>${inlineRollTitleAttributeString}</div>`, 'text/html');
        const rollResult = inlineRollAsDoc.querySelector('.basicdiceroll')?.textContent;
        if (rollResult) {
          addD20RollResult(lastMessageBy, rollResult);
        }
      }
    });
  }
};

const handleBeyond20ExtensionTemplateRoll = (messageElement: Element): void => {

};

const addD20RollResult = (rollerName: string, rollResult: string) => {
  addRollResult(rollerName, RollDataDiceRollsPropertyName.d20, rollResult);
};

const addRollResult = (rollerName: string, rollType: string, rollResult: string) => {
  if (rollResult) {
    parsedRoll20Data[rollType] = [
      ...parsedRoll20Data.d20Rolls,
      {
        rollerName: rollerName,
        result: rollResult
      }
    ];

    parsedRoll20Data.rollerNames = [
      ...parsedRoll20Data.rollerNames,
      rollerName
    ]
  }
};