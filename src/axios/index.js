import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getTagsData } from './mock/tags'
import { getReviewsData } from './mock/reviews'

const axiosInstance = axios.create({
  baseURL: '/api/v1/',
  timeout: 1500,
})

var mock = new MockAdapter(axiosInstance, { delayResponse: 2000 })

mock.onGet('/tagsData').reply((config) => {
  let tagsIds = config.params ? config.params.tagsIds : null
  return ['200', getTagsData(tagsIds)]
})

mock.onGet('/reviewsData').reply((config) => {
  const { tagsIds, fromDate, tillDate } = config.params
  return ['200', getReviewsData(tagsIds, fromDate, tillDate)]
})

export default axiosInstance
