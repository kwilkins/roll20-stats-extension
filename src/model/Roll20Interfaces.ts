/**
 * Represents the actualized/deserialized data returned from the remote script
 * execution.
 */
export interface IRoll20ChatDOMResponse {
  error?: Error;
  roll20ChatDOM?: Document;
}

/**
 * Represents serialized data that is returned from the remote script execution.
 * Events and native objects are not directly available between the page and the
 * extension, so we store either error or DOM into string properties to return.
 * Some native objects (like an Error or Document) will be emptied (become {})
 * if returned directly.
 */
 export interface ISerializedRoll20ChatDOMResponse {
  error?: string;
  log: string[];
  roll20ChatHtml?: string;
}