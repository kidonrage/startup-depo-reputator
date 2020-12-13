import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import socketIOClient from 'socket.io-client'
import ReviewsListTable from '../ReviewsListTable'
import { getSenceFromRating } from '../../helpers/mood'

const ENDPOINT = 'http://127.0.0.1:5000'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paperHeader: {},
  datePickersContainer: {
    textAlign: 'right',
  },
  datePicker: {
    marginLeft: theme.spacing(2),
  },
}))

const PositiveNegativeReviewsCountPanel = () => {
  const classes = useStyles()

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('reviews', (data) => {
      const { reviews, url } = data

      const reviewsWithUrl = reviews.map((review) => ({
        ...review,
        moment: moment.unix(review.time),
        sourceName: 'Google Maps',
        sourceLink: url,
        sence: getSenceFromRating(review.rating),
      }))

      setReviews(reviewsWithUrl)
    })
    return () => socket.disconnect()
  }, [])

  return (
    <Paper className={classes.paper}>
      <Typography
        className={classes.paperHeader}
        variant="h6"
        component="h4"
        gutterBottom
      >
        Новые отзывы
      </Typography>
      <ReviewsListTable reviews={reviews} />
    </Paper>
  )
}

export default PositiveNegativeReviewsCountPanel
