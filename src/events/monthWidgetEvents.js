/**
 * @file Adds events to a month widget.
 */

/**
 * Adds day events.
 *
 * @param {Object} monthWidget
 *  MonthWidget DOM-element.
 */
export default function addDayActions (monthWidget) {

  /**
   * Handles keyboard events.
   *
   * @param {event} event
   * @param {Object} element
   *  MonthWidget DOM-element.
   */
  const handleKeyboardInput = function (event, element) {
    const key = event.key
    const current = event.target
    let currentPosition = +current.getAttribute('aria-posinset')

    const changeFocus = function () {
      event.preventDefault()

      let nextElem
      let i = 0

      while (!nextElem && i < arguments.length) {
        nextElem = element.querySelector('[aria-posinset="' + arguments[i] + '"]')
        i++
      }

      if (nextElem) {
        event.preventDefault()
        nextElem.click()
      }
    }

    switch (key) {
    case 'Left':
    case 'ArrowLeft':
      changeFocus(--currentPosition, 31, 30, 29, 28)
      break

    case 'Right':
    case 'ArrowRight':
      changeFocus(++currentPosition, 1)
      break

    case 'Down':
    case 'ArrowDown':
      changeFocus(currentPosition + 7, currentPosition - 4 * 7, currentPosition - 3 * 7)
      break

    case 'Up':
    case 'ArrowUp':
      changeFocus(currentPosition - 7, currentPosition + 4 * 7, currentPosition + 3 * 7)
      break

    case 'Home':
      changeFocus(1)
      break

    case 'End':
      changeFocus(31, 30, 29, 28)
      break
    }
  }

  /**
   * Handles click events.
   *
   * @param {Object[]} days
   *  A collection of day DOM-elements.
   * @param {Object} selectedDay
   *  The selected DOM-element.
   */
  const clickEvent = function (days, selectedDay) {
    for (let i = days.length; i--;) {
      days[i].setAttribute('tabindex', -1)
      // IE fix: trigger repaint
      days[i].classList.add('inactive')
    }
    selectedDay.setAttribute('tabindex', 0)
    // IE fix: trigger repaint
    selectedDay.classList.remove('inactive')
    // Focus for keyboard usage.
    selectedDay.focus()
  }

  const days = monthWidget.querySelectorAll('.openinghours--day:not([aria-hidden])')
  for (let i = days.length; i--;) {
    days[i].addEventListener('keydown', function (e) {
      handleKeyboardInput(e, monthWidget)
    })

    days[i].addEventListener('click', function (e) {
      clickEvent(days, this)
    })
  }
}
