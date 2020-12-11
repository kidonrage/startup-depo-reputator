import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PageTitle from '../../components/PageTitle'
import ReviewChart from '../../components/review/ReviewChart'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageTitle>Обзор</PageTitle>
          </Grid>
          <Grid item xs={12}>
            <ReviewChart />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Home
