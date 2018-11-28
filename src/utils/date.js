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
 * Format a date into YY-MM-DD format.
 *
 * @param {Date} date
 *  JS Date that should be formatted.
 * @return {string}
 *  Formatted date.
 */
export function formatDate(date) {
  if(!(date instanceof Date)) {
    throw new TypeError('Provide a validate JS Date Object.')
  }

  return date.toLocaleDateString('fr-CA', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  })
}
