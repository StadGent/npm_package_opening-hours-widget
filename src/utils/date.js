/**
 * @file Utility functions for modification of JS date objects.
 */

/**
 * Get the current date (without time information)
 *
 * @param {Boolean} formatted
 *  Whether or not the return value should be formatted
 * @return {Date|string}
 *  The current date.
 */
export function now(formatted = true) {
  let date = new Date()
  date.setHours(0, 0, 0, 0) // reset the hour to 00:00:00.00

  if(formatted) {
    date = formatDate(date)
  }

  return date
}

/**
 * Pad any value with leading characters
 *
 * @param {*} value
 *  Target value that will be padded.
 * @param {Number} [width]
 *  Total length of the padded string.
 * @param {string} [character]
 *  The text character with which the value will be padded.
 * @return {string}
 *  Padded value.
 */
export function pad(value, width = 2, character = '0') {
  value = value + '' // make sure we're dealing with a string here
  return value.length >= width ? value : new Array(width - value.length + 1).join(character) + value
}

/**
 * Format a date into YY-MM-DD format.
 *
 * @param {Date} date
 *  JS Date that should be formatted.
 * @param {string} separator
 *  Separator of the returned date. '-' by default.
 * @return {string}
 *  Formatted date.
 */
export function formatDate(date, separator = '-') {
  if(!(date instanceof Date)) {
    throw new TypeError('Provide a validate JS Date Object.')
  }

  let formatted = []

  formatted.push(date.getFullYear().toString().slice(-2))
  formatted.push(pad(date.getMonth() + 1))
  formatted.push(pad(date.getDate()))

  return formatted.join(separator)
}
