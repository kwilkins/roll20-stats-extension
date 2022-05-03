import { IRollData, IRollRecord, RollDataDiceRollsPropertyName } from '../model/DiceRollInterfaces';

/**
 * @description Class responsible for parsing a Roll20 chat DOM.
 */
export default class Roll20ChatParser {
  // CSS Selectors
  private static readonly messageClassDirectDescendantOfContentClassSelector: string = '.content > .message';
  private static readonly byClassSelector: string = '.by';
  private static readonly divWithSheetRollTemplateClassSelector: string = 'div[class^=\'sheet-rolltemplate\']';
  private static readonly diceRollAndD20ClassSelector: string = '.diceroll.d20';
  private static readonly spanWithInlineRollResultClassSelector: string = 'span.inlinerollresult';
  private static readonly basicDiceRollClassSelector: string = '.basicdiceroll';
  // Class names and attribute values
  private static readonly rollResultClassValue: string = 'rollresult';
  private static readonly titleAttributeValue: string = 'title';
  // Text values
  private static readonly inlineRolling1D20TextValue: string = 'Rolling 1d20';

  private lastParsedMessageSentBy: string;
  private parsedRollerNames: Set<string>;
  private parsedRollRecords: Record<RollDataDiceRollsPropertyName, IRollRecord[]>;

  /**
   * @constructor Creates a new Roll20 chat parser object.
   */
  public constructor() {
    this.lastParsedMessageSentBy = 'UNKNOWN ROLLER';
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
      const chatMessages = roll20ChatDOM.querySelectorAll(Roll20ChatParser.messageClassDirectDescendantOfContentClassSelector);
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
    const messageSenderText = messageElement.querySelector(Roll20ChatParser.byClassSelector)?.textContent;
    if (messageSenderText) {
      // if this message has a player name associated with it, we keep it
      // for 'stacked' messages that only show the player name on the first
      // message.
      this.lastParsedMessageSentBy = messageSenderText?.substring(0, messageSenderText.lastIndexOf(':')).trim();
    }

    if (messageElement.className.includes(Roll20ChatParser.rollResultClassValue)) {
      this.handleStandardRoll(messageElement);
    } else if (messageElement.querySelector(Roll20ChatParser.divWithSheetRollTemplateClassSelector)) {
      this.handleRoll20CharacterSheetTemplateRoll(messageElement);
    } else if (false) {
      this.handleBeyond20ExtensionTemplateRoll(messageElement);
    }
  };

  private handleStandardRoll = (messageElement: Element): void => {
    // This message is a standard roll20 d20 dice roll
    const standardD20RollSelector = messageElement.querySelectorAll(Roll20ChatParser.diceRollAndD20ClassSelector);
    if (standardD20RollSelector.length) {
      standardD20RollSelector.forEach((standardD20DiceRollElement: Element, key: number) => {
        const rollResult = standardD20DiceRollElement.querySelector(Roll20ChatParser.diceRollAndD20ClassSelector)?.textContent;

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
    const inlineRollSelector = messageElement.querySelectorAll(Roll20ChatParser.spanWithInlineRollResultClassSelector);
    if (inlineRollSelector.length) {
      inlineRollSelector.forEach((inlineD20DiceRollElement: Element, key: number) => {
        // For whatever reason the inline rolls use an html element attribute
        // named "original-title" which is NOT a valid attribute name, proper
        // browser parsing separates this into two attributes which leaves title
        // as the one we want to look for.
        const inlineRollTitleAttributeString = inlineD20DiceRollElement.getAttribute(Roll20ChatParser.titleAttributeValue);
        if (inlineRollTitleAttributeString?.includes(Roll20ChatParser.inlineRolling1D20TextValue)) {
          const inlineRollAsDoc = new DOMParser().parseFromString(`<div>${inlineRollTitleAttributeString}</div>`, 'text/html');
          const rollResult = inlineRollAsDoc.querySelector(Roll20ChatParser.basicDiceRollClassSelector)?.textContent;
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
