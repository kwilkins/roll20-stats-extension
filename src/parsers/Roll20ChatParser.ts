import { IRollData, IRollRecord, RollDataDiceRollsPropertyName } from '../model/DiceRollInterfaces';

export default class Roll20ChatParser {
  private lastParsedMessageSentBy: string;
  private parsedRollerNames: Set<string>;
  private parsedRollRecords: Record<RollDataDiceRollsPropertyName, IRollRecord[]>;

  /**
   * @constructor Creates a new Roll20 Chat Parser object.
   */
  public constructor() {
    this.lastParsedMessageSentBy = '';
    this.parsedRollerNames = new Set<string>();
    this.parsedRollRecords = {
      [RollDataDiceRollsPropertyName.d20]: []
    };
  };

  /**
   * @description Parses the roll data from the Roll20 chat DOM.
   * @param {Document} roll20ChatDOM The DOM containing the Roll20 chat .content.
   * @returns {IRollData} The parsed roll data.
   */
  public parseRollDataFromRoll20ChatDOM(roll20ChatDOM: Document): IRollData {
    console.log('starting roll20 chat parser...');

    this.lastParsedMessageSentBy = '';
    this.parsedRollerNames = new Set<string>();
    this.parsedRollRecords = {
      [RollDataDiceRollsPropertyName.d20]: []
    };
    console.log('properties initialized...');

    try {
      const chatMessages = roll20ChatDOM.querySelectorAll('.content > .message');
      chatMessages.forEach(this.processMessage);

      if (this.parsedRollerNames.size) {
        console.log('finished parsing results.');

        return {
          ...this.parsedRollRecords,
          rollerNames: [...this.parsedRollerNames]
        };
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

  private processMessage = (messageElement: Element, key: number): void => {
    const messageSenderText = messageElement.querySelector('.by')?.textContent;
    if (messageSenderText) {
      // if this message has a player name associated with it, we keep it
      // for 'stacked' messages that only show the player name on the first
      // message.
      this.lastParsedMessageSentBy = messageSenderText?.substring(0, messageSenderText.lastIndexOf(':')).trim();
    }

    if (messageElement.className.includes('rollresult')) {
      this.handleStandardRoll(messageElement);
    } else if (messageElement.querySelector('div[class^=\'sheet-rolltemplate\']')) {
      this.handleRoll20CharacterSheetTemplateRoll(messageElement);
    } else if (false) {
      this.handleBeyond20ExtensionTemplateRoll(messageElement);
    }
  };

  private handleStandardRoll = (messageElement: Element): void => {
    // This message is a standard roll20 d20 dice roll
    const standardD20RollSelector = messageElement.querySelectorAll('.diceroll.d20');
    if (standardD20RollSelector.length) {
      standardD20RollSelector.forEach((standardD20DiceRollElement: Element, key: number) => {
        const rollResult = standardD20DiceRollElement.querySelector('.didroll')?.textContent;

        if (rollResult) {
          this.addD20RollResult(this.lastParsedMessageSentBy, rollResult);
        }
      });
    }
  };

  // TODO #11 Take into account templated rolls that roll twice, marked with .sheet-adv
  // When the sheet is set to 'Advantage Toggle' the 'ignored' value is contained by .sheet-grey
  // When the sheet is set to 'Always Roll Advantage' it just rolls two values
  private handleRoll20CharacterSheetTemplateRoll = (messageElement: Element): void => {
    const inlineRollSelector = messageElement.querySelectorAll('span.inlinerollresult');
    if (inlineRollSelector.length) {
      inlineRollSelector.forEach((inlineD20DiceRollElement: Element, key: number) => {
        // For whatever reason the inline rolls use an html element attribute
        // named "original-title" which is NOT a valid attribute name, proper
        // browser parsing separates this into two attributes which leaves title
        // as the one we want to look for.
        const inlineRollTitleAttributeString = inlineD20DiceRollElement.getAttribute('title');
        if (inlineRollTitleAttributeString?.includes('Rolling 1d20')) {
          const inlineRollAsDoc = new DOMParser().parseFromString(`<div>${inlineRollTitleAttributeString}</div>`, 'text/html');
          const rollResult = inlineRollAsDoc.querySelector('.basicdiceroll')?.textContent;
          if (rollResult) {
            this.addD20RollResult(this.lastParsedMessageSentBy, rollResult);
          }
        }
      });
    }
  };

  private handleBeyond20ExtensionTemplateRoll = (messageElement: Element): void => {

  };

  private addD20RollResult = (rollerName: string, rollResult: string): void => {
    this.addRollResult(rollerName, RollDataDiceRollsPropertyName.d20, rollResult);
  };

  private addRollResult = (rollerName: string, rollType: RollDataDiceRollsPropertyName, rollResult: string): void => {
    if (rollResult) {
      this.parsedRollRecords[rollType] = [
        ...this.parsedRollRecords[rollType],
        {
          rollerName: rollerName,
          result: rollResult
        }
      ];

      this.parsedRollerNames.add(rollerName);
    }
  };
}
