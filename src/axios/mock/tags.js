let allTagsData = {
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
}

export const getTagsData = (tagsIds) => {
  if (!tagsIds) {
    return allTagsData
  }

  let allTagsIds = Object.keys(allTagsData)
  let searchedTagsIds = allTagsIds.filter((tagId) => tagsIds.includes(tagId))

  let result = {}

  searchedTagsIds.forEach((tagId) => {
    result[tagId] = allTagsData[tagId]
  })

  return result
}

const tagsStatistics = {
  stations: {
    label: 'Вокзалы',
    averageRating: 5.0,
    reviewsCount: 210,
    newReviewsCount: 1,
    ratingChange: 0.5,
  },
  cars: {
    label: 'Вагоны',
    averageRating: 5.0,
    reviewsCount: 210,
    newReviewsCount: 1,
    ratingChange: 0.5,
  },
  restaraunts: {
    label: 'Вагоны-рестораны',
    averageRating: 5.0,
    reviewsCount: 210,
    newReviewsCount: 1,
    ratingChange: 0.5,
  },
  conductors: {
    label: 'Проводники',
    averageRating: 5.0,
    reviewsCount: 210,
    newReviewsCount: 1,
    ratingChange: 0.5,
  },
}

export const getTagStatistics = (tagId) => {
  return tagsStatistics[tagId]
}

const tagsReviews = [
  {
    sourceName: '2ГИС',
    sourceLink: 'https://2gis.ru',
    date: '11.12.2020',
    reviewText: 'Текст отзыва',
    rating: 4.3,
  },
  {
    sourceName: 'ВК',
    sourceLink: 'https://vk.com',
    date: '11.12.2020',
    reviewText: 'Текст отзыва 2',
    rating: 5.0,
  },
  {
    sourceName: 'ВК',
    sourceLink: 'https://vk.com',
    date: '11.12.2020',
    reviewText: 'Текст отзыва 2',
    rating: 5.0,
  },
]

export const getTagReviews = (tagId) => {
  return tagsReviews
}
