/**
 * @file exports all callable methods in one object
 */
import fetchChannel from './fetchChannel'
import fetchChannels from './fetchChannels'
import fetchOpeningHoursByType from './fetchOpeningHoursByType'
import fetchOpeningHoursByRange from './fetchOpeningHoursByRange'
import fetchStatus from './fetchStatus'
import addDayActions from './monthWidgetEvents'

export default {
  fetchChannel,
  fetchChannels,
  ...fetchOpeningHoursByType,
  fetchOpeningHoursByRange,
  fetchStatus,
  addDayActions
}
