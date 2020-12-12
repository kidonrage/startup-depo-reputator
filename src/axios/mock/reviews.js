import moment from 'moment'

let allReviewsData = [
  {
    date: '11.12.2020',
    stations: 100,
    cars: 150,
    restaraunts: 112,
    conductors: 87,
  },
  {
    date: '12.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 100,
  },
  {
    date: '13.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 65,
  },
  {
    date: '14.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 80,
  },
  {
    date: '15.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '16.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '17.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '18.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
  {
    date: '19.12.2020',
    stations: 120,
    cars: 135,
    restaraunts: 118,
    conductors: 75,
  },
]

export const getReviewsData = (tagsIds, fromDate, tillDate) => {
  if (!tagsIds) {
    return []
  }

  const from = moment(fromDate)
  const till = moment(tillDate)

  let result = allReviewsData.filter((reviewData) => {
    const reviewDate = moment(reviewData.date, 'DD.MM.YYYY')
    return reviewDate >= from && reviewDate <= till
  })

  return result
}

export const getPositiveNegativeReviewsData = (tagsIds, fromDate, tillDate) => {
  return [
    {
      tagId: 'stations',
      tagLabel: 'Станции',
      positiveReviewsCount: 50,
      negativeReviewsCount: 37,
    },
    {
      tagId: 'cars',
      tagLabel: 'Вагоны',
      positiveReviewsCount: 50,
      negativeReviewsCount: 37,
    },
    {
      tagId: 'restaraunts',
      tagLabel: 'Вагоны-рестораны',
      positiveReviewsCount: 50,
      negativeReviewsCount: 62,
    },
    {
      tagId: 'conductors',
      tagLabel: 'Проводники',
      positiveReviewsCount: 50,
      negativeReviewsCount: 37,
    },
  ]
}
