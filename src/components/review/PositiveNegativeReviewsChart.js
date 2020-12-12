import React, { PureComponent, useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Chip, colors } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { invertColor } from '../../helpers/invertColor'
import axios from '../../axios'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

const PositiveNegativeReviewsChart = ({ fromDate, tillDate }) => {
  const classes = useStyles()
  const history = useHistory()

  const [tagsData, setTagsData] = useState({})
  const [reviewsData, setReviewsData] = useState([])

  useEffect(() => {
    async function fetchTagsData() {
      const { data } = await axios.get('/tagsData')
      setTagsData(data)
    }

    fetchTagsData()
  }, [])

  useEffect(() => {
    async function fetchReviewsData() {
      let tagsIds = Object.keys(tagsData)
      const { data } = await axios.get('/positiveNegativeReviewsData', {
        params: {
          tagsIds,
          fromDate: fromDate,
          tillDate: tillDate,
        },
      })
      setReviewsData(data)
    }

    fetchReviewsData()
  }, [tagsData, fromDate, tillDate])

  const handleTagClick = (tagId) => {
    history.push(`/tags/${tagId}`)
  }

  const handleDeleteTag = async (deletedTagId) => {
    let tagsIds = Object.keys(tagsData)
    let updatedTagsIds = tagsIds.filter((tagId) => tagId !== deletedTagId)

    const { data } = await axios.get('/tagsData', {
      params: {
        tagsIds: updatedTagsIds,
      },
    })
    setTagsData(data)
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={reviewsData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tagLabel" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey={'positiveReviewsCount'}
            name="Позитивных"
            fill={colors.green[500]}
          />
          <Bar
            dataKey={'negativeReviewsCount'}
            name="Негативных"
            fill={colors.red[500]}
          />
          {/* {reviewsData.map((reviewData) => {
            return (
              <>
                <Bar
                  dataKey={'positiveReviewsCount'}
                  name="Позитивных"
                  fill={colors.green}
                />
                <Bar
                  dataKey={'negativeReviewsCount'}
                  name="Негативных"
                  fill={colors.red}
                />
              </>
            )
          })} */}
        </BarChart>
      </ResponsiveContainer>

      <div className={classes.chipsContainer}>
        {Object.keys(tagsData).map((tagDataId) => {
          console.log(tagsData, tagDataId)

          const tagData = tagsData[tagDataId]

          return (
            <Chip
              size="small"
              style={{
                backgroundColor: tagData.color,
                color: invertColor(tagData.color, true),
              }}
              label={tagData.label}
              onClick={() => handleTagClick(tagDataId)}
              onDelete={() => handleDeleteTag(tagDataId)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PositiveNegativeReviewsChart
