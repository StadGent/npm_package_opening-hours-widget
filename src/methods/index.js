/**
 * @file exports all callable methods in one object
 */
import fetchChannel from './fetchChannel'
import fetchChannels from './fetchChannels'
import fetchOpeningHours from './fetchOpeningHours'

export default {
  fetchChannel,
  fetchChannels,
  ...fetchOpeningHours
}
