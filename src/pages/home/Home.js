import React, { useState } from 'react'
import { Grid, Container, Paper, Box, Typography } from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'

import PageTitle from '../../components/PageTitle'
import ReviewChart from '../../components/review/ReviewChart'
import FreshReviews from '../../components/review/FreshReviews'
import PositiveNegativeReviewsChart from '../../components/review/PositiveNegativeReviewsChart'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
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

const Home = () => {
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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PageTitle>Обзор</PageTitle>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    className={classes.paperHeader}
                    variant="h6"
                    component="h4"
                    gutterBottom
                  >
                    Статистика отзывов
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
                <ReviewChart fromDate={fromDate} tillDate={tillDate} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    className={classes.paperHeader}
                    variant="h6"
                    component="h4"
                    gutterBottom
                  >
                    Статистика отзывов (кол-во
                    позитивных/нейтральных/негативных)
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
                <PositiveNegativeReviewsChart
                  fromDate={fromDate}
                  tillDate={tillDate}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </div>
      </Container>
    </MuiPickersUtilsProvider>
  )
}

export default Home
