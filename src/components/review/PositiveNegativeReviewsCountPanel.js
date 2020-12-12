import React, { useState } from 'react'
import { Paper, Box, Typography } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import PositiveNegativeReviewsChart from './PositiveNegativeReviewsChart'

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

  const [fromDate, setFromDate] = useState(new Date('2020-12-11T00:00:00'))
  const [tillDate, setTillDate] = useState(new Date('2020-12-18T00:00:00'))

  const handleFromDateChange = (date) => {
    setFromDate(date)
  }

  const handleTillDateChange = (date) => {
    setTillDate(date)
  }

  return (
    <Paper className={classes.paper}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          className={classes.paperHeader}
          variant="h6"
          component="h4"
          gutterBottom
        >
          Количество позитивных/нейтральных отзывов
        </Typography>
        <div className={classes.datePickersContainer}>
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="С:"
            format="dd.MM.yyyy"
            value={fromDate}
            InputAdornmentProps={{ position: 'start' }}
            onChange={handleFromDateChange}
            className={classes.datePicker}
          />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="По:"
            format="dd.MM.yyyy"
            value={tillDate}
            InputAdornmentProps={{ position: 'start' }}
            onChange={handleTillDateChange}
            className={classes.datePicker}
          />
        </div>
      </Box>
      <PositiveNegativeReviewsChart fromDate={fromDate} tillDate={tillDate} />
    </Paper>
  )
}

export default PositiveNegativeReviewsCountPanel
