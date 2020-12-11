import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getTagsData } from './mock/tags'

const axiosInstance = axios.create({
  baseURL: '/api/v1/',
  timeout: 1500,
})

var mock = new MockAdapter(axiosInstance, { delayResponse: 2000 })

// mock
//   .onGet('/tagsData', { params: { tagsIds: ['stations'] } })
//   .reply('200', getTagsData(['stations']))

mock.onGet('/tagsData').reply((config) => {
  let tagsIds = config.params ? config.params.tagsIds : null
  return ['200', getTagsData(tagsIds)]
})

mock.onGet('/reviewsData').reply('200', [
  {
    date: '07.05.1999',
    stations: 100,
    cars: 150,
    restaraunts: 112,
    conductors: 87,
  },
  {
    date: '08.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 100,
  },
  {
    date: '09.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 65,
  },
  {
    date: '10.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 80,
  },
  {
    date: '11.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '12.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '13.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '14.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '15.05.1999',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
])

export default axiosInstance
