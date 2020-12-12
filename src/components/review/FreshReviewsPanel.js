import React, { useState, useEffect } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import socketIOClient from 'socket.io-client'
import FreshReviews from './FreshReviews'

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

  const [reviewsSourceUrl, setReviewsSourceUrl] = useState(null)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('reviews', (data) => {
      const { reviews, url } = data
      setReviews(reviews)
      setReviewsSourceUrl(url)

      console.log(url)
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
      <FreshReviews reviews={reviews} url={reviewsSourceUrl} />
    </Paper>
  )
}

export default PositiveNegativeReviewsCountPanel
