// Citation: (dasherize)
// https://coderwall.com/p/hpq7sq/undescorize-dasherize-capitalize-string-prototype
//
// Looked up a clean example of handling the first character as an uppercase character
// problem. Wasn't exactly sure how to handle that cleanly.
// -Aaron

/**
 * Returns new string with all whitespace removed and all capital
 * letters replaced with a dash followed by the lower case version of
 * the character.
 *
 * @param {String} value The string value that you want to dasherize
 * @return {String}      Dasherized string.
 */
export default (value) => {
  return value
    .replace(/\W/g, '')
    .replace(/[A-Z]/g, (char, index) => {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
}
