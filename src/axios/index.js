import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const axiosInstance = axios.create({
  baseURL: '/api/v1/',
  timeout: 1500,
})

var mock = new MockAdapter(axiosInstance, { delayResponse: 2000 })

mock.onGet('/tagsData').reply('200', {
  stations: {
    label: 'Вокзалы',
    color: '#8884d8',
  },
  cars: {
    label: 'Вагоны',
    color: '#82ca9d',
  },
  restaraunts: {
    label: 'Вагоны-рестораны',
    color: '#ffc658',
  },
  conductors: {
    label: 'Проводники',
    color: '#ccbb40',
  },
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
