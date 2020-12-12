import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getTagsData, getTagStatistics, getTagReviews } from './mock/tags'
import { getReviewsData, getPositiveNegativeReviewsData } from './mock/reviews'

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

mock.onGet('/positiveNegativeReviewsData').reply((config) => {
  const { tagsIds, fromDate, tillDate } = config.params
  return ['200', getPositiveNegativeReviewsData(tagsIds, fromDate, tillDate)]
})

const tagStatisticRegExp = /^\/tags\/(.+)\/statistics/
mock.onGet(tagStatisticRegExp).reply((config) => {
  const id = config.url.match(tagStatisticRegExp)[1]
  console.log('getTagStatistics', getTagStatistics(id))
  return ['200', getTagStatistics(id)]
})

const tagReviewsRegExp = /^\/tags\/(.+)\/reviews/
mock.onGet(tagReviewsRegExp).reply((config) => {
  console.log('tagReviewsRegExp', config)
  const [id] = config.url.match(tagReviewsRegExp)
  return ['200', getTagReviews(id)]
})

export default axiosInstance
