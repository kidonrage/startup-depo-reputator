import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FreshReviews from './FreshReviews'

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
      <FreshReviews />
    </Paper>
  )
}

export default PositiveNegativeReviewsCountPanel
