/**
 * @param {Boolean} formatted
 *  Whether or not the return value should be formatted
 * @return {Date|string}
 *  The current date.
 */
export function now(formatted = true) {
  let date = new Date()
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
  return date.toLocaleDateString('fr-CA', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  })
}
