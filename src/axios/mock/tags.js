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
