/**
 * Creates a string will all whitespace removed and converted to
 * lowercase.
 *
 * @note The primary usecase for this method is during signin.
 *       We want to be able to be more liberal in accepting clan
 *       and member names. Spaces should should not matter.
 *
 * @param {string} value - The string to convet.
 */
export default (value) => {
  value = value || '';
  return value
          .replace(/\W/g, '') // Remove all whitespace
          .toLowerCase(); // Make the string lowercase
}
