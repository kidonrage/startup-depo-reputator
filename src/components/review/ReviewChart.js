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
import { Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { invertColor } from '../../helpers/invertColor'
import axios from '../../axios'

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

const ReviewChart = () => {
  const classes = useStyles()

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
      const { data } = await axios.get('/reviewsData')
      setReviewsData(data)
    }

    fetchReviewsData()
  }, [tagsData])

  const handleClick = () => {
    console.log('handleClick')
  }

  const handleDelete = () => {}

  return (
    <div>
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
              onClick={handleClick}
              onDelete={handleDelete}
            />
          )
        })}
      </div>

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
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(tagsData).map((tagDataId) => {
            const tagData = tagsData[tagDataId]

            console.log('tagData', tagData)

            return (
              <Bar
                dataKey={tagDataId}
                name={tagData.label}
                fill={tagData.color}
                stackId="default"
              />
            )
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ReviewChart
