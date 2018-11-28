/**
 * @file exports all callable API methods in one object
 */
import fetchChannel from './fetchChannel'
import fetchChannels from './fetchChannels'
import fetchServiceOpeningHours from './fetchServiceOpeningHours'

export default {
  fetchChannel,
  fetchChannels,
  fetchServiceOpeningHours
}
