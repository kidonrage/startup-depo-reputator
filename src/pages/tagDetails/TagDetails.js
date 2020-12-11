import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PageTitle from '../../components/PageTitle'
import ReviewListTable from '../../components/ReviewsListTable'
import CardDetailSummaryCard from '../../components/TagDetailCard'

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

const TagDetails = () => {
  const classes = useStyles()

  const tagName = 'Вокзалы'

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageTitle>Статистика по Тегу: {tagName}</PageTitle>
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Средний рейтинг"
              cardTextValue="4.0/5.0"
            />
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Всего отзывов"
              cardTextValue="210"
            />
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Новых отзывов"
              cardTextValue="3"
            />
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Изменение рейтинга"
              cardTextValue="0.1%"
            />
          </Grid>
          <Grid item xs={12}>
            <ReviewListTable />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default TagDetails
