export const theme = {
  color: {
    header: '#FFEA00',
    sidemenu: '#FF9500'
  }
}

/**
 * Flattens a nested theme object into a single-level object.
 * Nested keys are concatenated with underscores.
 *
 * @param {object} theme - The nested theme object.
 * @returns {object} The flattened theme object.
*/
export function themeToFlatObject(theme: any) {
  const flattened = {};

  function _flatten(currentObject: any, parentKey = '') {
    for (const key in currentObject) {
      // Ensure the key is an own property of the object
      if (Object.prototype.hasOwnProperty.call(currentObject, key)) {
        const newKey = parentKey ? `${parentKey}_${key}` : key;

        // If the value is an object (and not null or an array), recurse
        if (typeof currentObject[key] === 'object' && currentObject[key] !== null &&
          !Array.isArray(currentObject[key])) {
          _flatten(currentObject[key], newKey);
        } else {
          // Otherwise, add the key-value pair to the flattened object
          // @ts-expect-error
          flattened[newKey] = currentObject[key];
        }
      }
    }
  }

  _flatten(theme);
  return flattened;
} 