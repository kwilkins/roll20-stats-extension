import { ISerializedRoll20ChatDOMResponse } from '../model/Roll20Interfaces';

/**
 * @description Attempts to retrieve the HTML string representing the Roll20 chat starting with the
 * .content element.
 * @returns {ISerializedRoll20ChatDOMResponse} Containing the serialized error or Roll20 chat HTML
 * data and a log of execution.
 */
export const retrieveSerializedRoll20ChatHtml = (): ISerializedRoll20ChatDOMResponse => {
  const response: ISerializedRoll20ChatDOMResponse = {
    log: [
      'starting roll20_chat_parser...'
    ]
  };

  try {
    if (window.location.host === 'app.roll20.net') {
      response.log.push('target tab is roll20 host...');
      const textChat = document.querySelector('#textchat > .content');
      if (textChat) {
        response.log.push('found a roll20 game chat.');
        response.roll20ChatHtml = textChat.outerHTML;
      } else {
        throw new RangeError('No roll20 chat log was found.');
      }
    } else {
      throw new RangeError('This extension only works for Roll20.');
    }
  } catch (error: unknown) {
    response.log.push('an error occured.');

    let errorToReturn: Error;
    if (error instanceof Error) {
      errorToReturn = error;
    } else {
      errorToReturn = new ReferenceError('An unexpected error occured.');
    }

    response.log.push(`ERROR: ${errorToReturn.message}`);
    response.error = JSON.stringify(errorToReturn, Object.getOwnPropertyNames(errorToReturn));
  } finally {
    return response;
  }
};