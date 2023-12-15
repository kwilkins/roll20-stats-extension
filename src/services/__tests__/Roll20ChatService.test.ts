import { retrieveSerializedRoll20ChatHtml } from '../Roll20ChatService';

describe('Roll20ChatService', () => {
  it('Returns error when tab url does not match roll20', () => {
    const parseResponse = retrieveSerializedRoll20ChatHtml();
  
    expect(parseResponse.log.length).toBeGreaterThan(1);
    expect(parseResponse.error).not.toBeUndefined();
    expect(parseResponse.error).toContain('only works on a Roll20');
    expect(parseResponse.roll20ChatHtml).toBeUndefined();
  });
  
  describe('mocking window.location to app.roll20.net', () => {
    let originalLocation: Location;
    
    beforeAll(() => {
      originalLocation = window.location;
      delete (window as any).location;
      Object.defineProperty(window, 'location', {
        writable: true,
        value: new URL('https://app.roll20.net/editor/')
      });
    });
  
    afterAll(() => {
      Object.defineProperty(window, 'location', {
        writable: true,
        value: originalLocation
      });
    });
    
    it('Returns error when tab content does not contain #textchat', () => {
      const parseResponse = retrieveSerializedRoll20ChatHtml();
    
      expect(parseResponse.log.length).toBeGreaterThan(1);
      expect(parseResponse.error).not.toBeUndefined();
      expect(parseResponse.error).toContain('No roll20 chat log was found');
      expect(parseResponse.roll20ChatHtml).toBeUndefined();
    });
    
    it('Returns error when tab content does not contain .content within #textchat', () => {
      document.body.innerHTML = '<div id="textchat"></div>';
    
      const parseResponse = retrieveSerializedRoll20ChatHtml();
    
      expect(parseResponse.log.length).toBeGreaterThan(1);
      expect(parseResponse.error).not.toBeUndefined();
      expect(parseResponse.error).toContain('No roll20 chat log was found');
      expect(parseResponse.roll20ChatHtml).toBeUndefined();
    });
    
    it('Returns DOM from roll20 game chat', () => {
      const testContentElementHtmlString = '<div class="content">this is the text</div>';
      document.body.innerHTML = `<div id="textchat">${testContentElementHtmlString}</div>`;
    
      const parseResponse = retrieveSerializedRoll20ChatHtml();
    
      expect(parseResponse.log.length).toBeGreaterThan(1);
      expect(parseResponse.error).toBeUndefined();
      expect(parseResponse.roll20ChatHtml).not.toBeUndefined();
      expect(parseResponse.roll20ChatHtml).toContain(testContentElementHtmlString);
    });
  });
});
