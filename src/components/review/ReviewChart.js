import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Cell,
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

const fetchedData = {
  tagsData: {
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
  },
  reviewsData: [
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
  ],
}

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

  const handleClick = () => {
    console.log('handleClick')
  }

  const handleDelete = () => {
    console.log('handleDelete')
  }

  return (
    <div>
      <div className={classes.chipsContainer}>
        {Object.keys(fetchedData.tagsData).map((tagDataId) => {
          const tagData = fetchedData.tagsData[tagDataId]

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
          data={fetchedData.reviewsData}
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
          {Object.keys(fetchedData.tagsData).map((tagDataId) => {
            const tagData = fetchedData.tagsData[tagDataId]

            console.log('tagData', tagData)

            return (
              <Bar
                dataKey={tagDataId}
                name={tagData.label}
                fill={tagData.color}
                stackId="a"
              />
            )
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ReviewChart
